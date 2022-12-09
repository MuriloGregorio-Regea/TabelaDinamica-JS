function buildFormTable(_id, _form) {

  var table = document.getElementById(_id);

  if (table.querySelectorAll('th').length === 0) {
    var thead = document.createElement("thead");
    thead.className = "table-dark col";
    var row = document.createElement("tr");
    table.appendChild(thead);
    thead.appendChild(row);
    Object.keys(_form).forEach(function (v) {
      var cell = document.createElement("th");
      row.appendChild(cell);
      cell.innerHTML = v;
    });
  }

  var tbody = document.createElement("tbody");
  table.appendChild(tbody);
  var row = document.createElement("tr");

  for (key in _form) {

    var cell = document.createElement("td");
    row.appendChild(cell);

    var div = document.createElement("div");
    div.className = "input-group";
    cell.appendChild(div);

    var span = document.createElement("span");
    span.innerHTML = key + ":";
    span.className = "input-group-text";
    div.appendChild(span);

    var field = _form[key];
    var input = document.createElement(field?.tag);

    input.id = field?.id;
    input.name = field?.name;
    input.type = field?.type;
    input.className = "form-control ";
    input.required = field?.required;
    field?.min ? input.min = field?.min : false;
    field?.max ? input.max = field?.max : false;
    field?.step ? input.step = field?.step : false;
    field?.cols ? input.cols = field?.cols : false;
    field?.rows ? input.rows = field?.rows : false;
    field?.value ? input.value = field?.value : false;
    //field?.checked ? input.checked = field?.checked: false;
    field?.pattern ? input.pattern = field?.pattern : false;
    field?.maxlength ? input.maxlength = field?.maxlength : false;
    field?.minlength ? input.minlength = field?.minlength : false;
    field?.placeholder ? input.placeholder = field?.placeholder : false;
    //field?.indeterminate ? input.indeterminate = field?.indeterminate : false;

        div.appendChild(input);

  }

  tbody.appendChild(row);

};