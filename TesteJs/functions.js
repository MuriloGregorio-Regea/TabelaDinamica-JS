function buildFormTable(_id, _form) {

    var table = document.getElementById(_id);

  
    if (table.querySelectorAll('th').length === 0) {
      var row = document.createElement("tr")
      table.appendChild(row);
      Object.keys(_form).forEach(function (v) {
        var cell = document.createElement("th");
        row.appendChild(cell);
        cell.innerHTML = v;
      });
    }
          
    var row = document.createElement("tr");

    for (key in _form){

        var cell = document.createElement("td");
        row.appendChild(cell);
        
        var field = _form[key];
        var input = document.createElement(field?.tag);

        input.id = field?.id;
        input.name = field?.name;
        input.type = field?.type;
        input.className = "form-control";
        input.required = field?.required;
        field?.min ? input.min = field?.min : false;
        field?.max ? input.max = field?.max : false;
        field?.step ? input.step = field?.step : false;
        field?.pattern ? input.pattern = field?.pattern : false;
        field?.cols ? input.cols = field?.cols : false;
        field?.rows ? input.rows = field?.rows : false;
        field?.maxlength ? input.maxlength = field?.maxlength : false;

        cell.appendChild(input);

    }
  
    table.appendChild(row)
  
};