
class Pagination {
    constructor(contentId, paginationId, data, max) {
        this.contentId = contentId;
        this.paginationId = paginationId;
        this.data = data;
        this.max = max;
        this.numberOfPages = this.getPageNumber(data.length, max);
    }

    getPageNumber(dataLength, max) {
        const result = dataLength / max;
        if (Number.isInteger(result)) return result;
        else return Math.ceil(result);
    }

    load(callback) {
        this.loadContent(callback);
        this.loadPaginationNumbers(callback);
    }

    loadContent(callback) {
        let container  = element(this.contentId); 
        for (let i = 0; i < this.max; i++) {
            if(this.data[i] != undefined) {
                container.innerHTML += callback(this.data[i]);
            }
        }
    }

    loadPaginationNumbers(callback) {
        let paginationHtml  = element(this.paginationId); 
        let span = document.createElement('span');
        span.setAttribute('class', `${this.paginationId}-selected`);
        span.addEventListener('click', ()=> this.changePage(1, callback));

        paginationHtml.appendChild(span);
        for (let i = 2; i <= this.numberOfPages; i++) {
            span = document.createElement('span');
            span.addEventListener('click', ()=> this.changePage(i, callback));
            paginationHtml.appendChild(span);
        }
    }

    changePage(index, callback) {
        let container  = element(this.contentId); 
        container.innerHTML = '';
        let start = this.max * (index - 1);
        for (let i = start; i < start + this.max; i++) {
            if(this.data[i] != undefined) {
                container.innerHTML += callback(this.data[i]);
            }
            else break;
        }
        this.selectPageNumber(index);
    }

    selectPageNumber(index) {
        let paginationHtml  = element(this.paginationId);
        let spans = paginationHtml.getElementsByTagName('span'); 
        for (let i = 0; i < spans.length; i++) {
            if(i != (index - 1)) {
                spans[i].removeAttribute('class');
            }
            else {
                spans[i].setAttribute('class', `${this.paginationId}-selected`);
            }
        }
    }

}