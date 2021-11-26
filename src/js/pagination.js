import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import {onCreateMarkup, onError} from './markupCardMovie';
export {createPagination};
import {Api} from './apiFetch';

const filmListRef = document.querySelector('.js-cards-movie-list');
const container = document.getElementById('tui-pagination-container');
console.log(container);

const options = {
    totalItems: 10,
    itemsPerPage: 10,
    visiblePages: 7,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected" style="background-color: #FF6B08; border-radius: 5px; width: 40px; height: 40px; padding: 13px 11px;">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
        '</a>'
    }
  };
  
function  createPagination (result) {
    console.log(result);

    options.totalItems = result.total_results;
    console.log(options.totalItems);
    const pagination = new Pagination(container, options);
  
    pagination.on('afterMove', (event) => {
        console.log(options.page);
        const currentPage = event.page;
        console.log(options.page);
        options.page = currentPage;
        console.log(currentPage);
        const api2 = new Api;
        api2.page = currentPage;
        console.log(api2);
        api2.fetchMovie()
            .then(data => {
                filmListRef.innerHTML = '';
                onCreateMarkup(data);
              })
            .catch(onError);
   });

//    pagination.on('beforeMove', (event) => {
//     const currentPage = event.page;

//         if (currentPage === 10) {
//         return false;
//         // return true;
//         }
//     });
}