const allFilterBtn = document.getElementById('all-filter-btn');
const openFilterBtn = document.getElementById('open-filter-btn');
const closedFilterBtn = document.getElementById('closed-filter-btn');



function toggleStyle(id){
    allFilterBtn.classList.remove('bg-blue-400', 'text-gray')
    openFilterBtn.classList.remove('bg-blue-400', 'text-gray')
    closedFilterBtn.classList.add('bg-blue-400', 'text-gray')


    allFilterBtn.classList.add('bg-gray-300', 'text-gray')
    openFilterBtn.classList.add('bg-gray-300', 'text-gray')
    closedFilterBtn.classList.add('bg-gray-300', 'text-gray')




    const selected = document.getElementById(id);
    currentStatus = id;

    selected.classList.remove('bg-gray-300', 'text-gray');
    selected.classList.add('bg-blue-400', 'text-gray')

    
    if(id == 'open-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        
    }
    else if (id == 'all-filter-btn') {

        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    }
    else if (id == 'closed-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        
    }


}