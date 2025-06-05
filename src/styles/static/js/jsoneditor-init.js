document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('textarea').forEach(function (el) {
        if (el.closest('.form-row') && el.name === 'data') {
            CodeMirror.fromTextArea(el, {
                lineNumbers: true,
                mode: 'application/json',
                theme: 'default',
                tabSize: 2,
                matchBrackets: true,
                autoCloseBrackets: true,
            });
        }
    });
});
