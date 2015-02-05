$(document).ready(function() {
  $('body, html').on('focusout', '[contenteditable=true][object=false], [contenteditable=true][object=true]', function (e) {
    var $input = $(e.target),
      url = $input.attr('data-url'),
      object = $input.attr('object');

    if (object == 'true' ) {
      var id = $input.attr('data-id'),
        class_name = $input.attr('data-class'),
        attribute = $input.attr('data-attribute'),
        data = {
          id: id,
          class_name: class_name,
          attribute: attribute,
          value: $input.html()
        };

    } else if (object == 'false') {
      var key = $input.attr('data-pk'),
        data = {
          text_only: $input.data('data-text-only'),
          value: $input.html(),
          pk: key
        };
    }

    $.ajax({
      method: 'POST',
      url: url,
      data: data
    });
  });
});
