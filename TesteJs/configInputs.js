function ConfigInputs(){
    this.text= {
      type: "text",
      tag: "input",
      maxlength: "",
      autocomplete: "",
      maxlength: "",
      minlength: "",
      pattern: "",
      placeholder: "",
      size: "",
      required: false,
      list: ""
    }, 
    this.number= {
      type: "number",
      tag: "input",
      list: "",
      placeholder: "",
      autocomplete: "",
      min: "",
      max: "",
      step: "",
      value: ""
    }, 
    this.date= {
      type: "date",
      tag: "input",
      list: "",
      autocomplete: "",
      min: "",
      max: "",
      step: "",
      valueAsNumber: ""
    }, 
    this.datetime= {
      type: "datetime-local",
      tag: "input",
      required: false,
      autocomplete: "",
      list: "",
      step: "",
      value: "",
      valueAsNumber: ""
    }, 
    this.email= {
      type: "email",
      tag: "input",
      autocomplete: false,
      list: "",
      maxlength: "",
      minlength: "",
      multiple : false,
      pattern: "",
      placeholder: "",
      required: false,
      size: "",
      value: ""
    },
    this.file= {
      type: "file",
      tag: "input",
      required: false,
      accept: "", 
      capture: "",
      multiple: false,
      value: ""
    },
    this.mesAno= {
      type: "month",
      tag: "input",
      autocomplete: "",
      list: "",
      required: false,
      step: "",
      value: ""
    },
    this.telefone= {
      type: "tel",
      tag: "input",
      autocomplete: "",
      required: false,
      list: "",
      maxlength: "",
      minlength: "",
      pattern: "",
      placeholder: "",
      size:"",
      value: ""
    },
    this.hora= {
      type: "time",
      tag: "input",
      autocomplete: "",
      required: false,
      list: "",
      step: "",
      value: ""
    },
    this.select= {
      id: "",
      tag: "select",
      multiple: false,
      required: false,
      size: "",
      value: ""
    },
    this.textArea= {
      tag: "textArea",
      cols: "",
      maxlength: "",
      placeholder: "",
      required: false,
      rows: "",
      wrap: "",
      value: ""
    }, 
    this.checkbox= {
      type: "checkbox",
      tag: "input",
      value: "",
      checked: false,
      indeterminate: false,
      required: false
    },
    this.radio= {
      type: "radio",
      tag: "input",
      value: "",
      checked: "",
      required: ""
    }

};