function ConfigInputs(){
    this.text= {
      type: "text",
      tag: "input",
      pattern: "",
      placeholder: "",
      required: false,
    }, 
    this.number= {
      type: "number",
      tag: "input",
      placeholder: "",
      min: "",
      max: "",
      step: "",
      required: false
    }, 
    this.date= {
      type: "date",
      tag: "input",
      min: "",
      max: "",
      required: false
    }, 
    this.datetime= {
      type: "datetime-local",
      tag: "input",
      required: false,
      min: "",
      max: "",
      value: ""
    }, 
    this.email= {
      type: "email",
      tag: "input",
      pattern: "",
      placeholder: "",
      required: false,
      value: ""
    },
    this.file= {
      type: "file",
      tag: "input",
      required: false
    },
    this.mesAno= {
      type: "month",
      tag: "input",
      required: false,
      value: "",
      min: "",
      max: ""
    },
    this.telefone= {
      type: "tel",
      tag: "input",
      required: false,
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
      required: false,
      value: "",
      min: "",
      max: ""
    },
    this.select= {
      id: "",
      tag: "select",
      multiple: false,
      required: false
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