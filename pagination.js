export default {
   props: ['pages'], // 外層傳入內層-傳入page資訊 還有第10,11行  (作業看到30:21-34:36-37:19分)
   // 第6,11,12,13,14,16行 套用bootstrap pagination樣式
   // 頁面切換事件 第16行@click="$emit('get-data', page)">{{page}}</a> 
   template: `<nav aria-label="Page navigation example">
   <ul class="pagination">
     <li class="page-item" :class="{ disabled: !pages.has_pre}">
       <a class="page-link" href="#" aria-label="Previous">
         <span aria-hidden="true">&laquo;</span>
       </a>
     </li>
     <li class="page-item" 
     :class="{ active: page === pages.current_page}"
     v-for="page in pages.total_pages" :key="page + 'page'">  
     <a class="page-link" href="#"
     @click="$emit('get-data', page)">{{page}}</a> 
     </li>
     <li class="page-item" :class="{ disabled: !pages.has_next}">
       <a class="page-link" href="#" aria-label="Next">
         <span aria-hidden="true">&raquo;</span>
       </a>
     </li>
   </ul>
 </nav>`
}

