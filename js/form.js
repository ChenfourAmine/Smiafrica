class Form {
    constructor(id) {
        this.id = id;
        this.element = element(id);
    }

    getInputs() {
        return this.element.getElementsByTagName('input');
    }

    getData() {
        let inputs = this.getInputs();
        let data = {};
        for (let i = 0; i < inputs.length; i++) {
            this.addField(data, inputs[i]);
        }
        return data;
    }

    getURLParams() {
        let url = '';
        let data = this.getData();
        console.log("data : " , data)
        for(let prop in data) {
            url += prop + '=' + data[prop] + '&'
        }
        return url.slice(0, url.length - 1);
    }

    addField(data, input) {
        if(input.type != 'radio' && input.type != 'checkbox') {
            data[input.name] = input.value;
        }
        else if(input.type != 'radio') {

        }
        
        else {

        }
    }
}