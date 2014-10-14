(function( sqor, $, undefined ){
    var HTML = sqor.HTML || {};

    // IMPORTANT:
    // Reusuable templates  that live in index.html should live inside the /partials/ folder from now on....



    // Note please make sure your template names have no weird chars.. try to make them of this form:
    // Good: my-simple-name
    // Bad:  my_simple_name
    // Great: mySimpleName
    HTML.getTemplateString = function(template_name){
        if (!HTML.isValidTemplateName(template_name)) {
           throw new Error("invalid template name: " + template_name);
        }
        // First we try to get the template by id locally:

        var template_string = $("#" + template_name).html();
        if (!_.exists(template_string)){
            template_string =   HTML._getRemote(template_name);
        }
        return template_string;
    };

    HTML.isValidTemplateName = function(template_name){
        return !!template_name.match(/^[a-zA-Z0-9-]+$/);
    };

    // This is a reusable underscore template.
    HTML.getTemplate = function(template_name){
        return  _.template(HTML.getTemplateString(template_name));
    };

    HTML.getOneTimeTemplate = function(template_name, options){
        if (!_.exists(options)){
            options = {};
        }
        return HTML.getTemplate(template_name)(options);
    };

    HTML._getRemote = function(template_name){
        var template_base =  "/templates/partials/";
        var remote_url =  template_base  + template_name  + ".html?dontCacheChrome" +  Math.random();

        return $.ajax({
            type: "GET",
            url:  remote_url,
            async: false
        }).responseText;
    };


    // TODO: add cache on and off to be able to get templates once only... for now who cares:
    // It will be super simple...


    /////////////////////////////////////////////////////////////////
    // Example usage:
    /////////////////////////////////////////////////////////////////////////////
    // sqor.HTML.getTemplate("example-template-remote")({name: "hi"})

    // One time use:
    // sqor.HTML.getOneTimeTemplate("#example-template-remote", {name: "hi"})


    // Local templates will also work (for prod, don't worry this will be by magic):
    // Cleaner reusable way:

    sqor.HTML = HTML;
}( typeof window === 'undefined' ? module.exports : (window.sqor = window.sqor || {}),
   typeof jQuery === 'undefined' ? require('jquery'): jQuery));
