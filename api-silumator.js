/*!
 * jQuery JavaScript Plugin v1.0.0
 * http://jquery.com/
 *
 * Depends of jQuery JavaScript Library
 *
 * Developer: H3rN4n
 * GitUser: https://github.com/H3rN4n/
 * Released under the MIT license
 *
 * Date: 2014-09-25
 */

jQuery.fn.extend({
  contentReloader: {
	    call: function(url, element, extraparams){
	    	var ctx = this;
        $.ajax({
	    		url: url,
	    		type: 'GET',
	    		dataType: 'html',
	    		data: extraparams,
	    		beforeSend: function(){
	    			ctx.loading(element);
	    		}
    		}).done(function(data) {
    			ctx.render(data, element);
    		});
	    },
	    loading: function(element, method){
	    	$(element).html('<div style="text-align: center; width: 100%;"><i class="fa fa-spinner fa-spin"></i> Actualizando...</div>');
	    },
	    render: function(data, element){
	    	var content = $(data).find(element);
	    	$(element).html(content);
	    	console.log(content);
	    },
	}
});