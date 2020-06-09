

						var AbaPayway = (function (options) {
    "use strict"


    $ = jQuery.noConflict();

    var _jQ = $;

    var openPopup = function(selector, custom_iframe_class) {
        if (_jQ(window).width() < 500) {
            //Disable scrool in iOS
            _jQ('.aba-modal').height(_jQ(window).height() - 30);
            _jQ('html, body').css({"overflow":"hidden", "height":"0"});
            _jQ('.aba-modal-content').css({'width':_jQ(window).width()-25+'px', 'margin-left':'0'});
        }

        var iframe_class = custom_iframe_class || '';

        _jQ('.dropdown-menu').hide();

        _jQ('#aba_main_modal').append('<div class="aba-loader '+iframe_class+'"></div>');

        _jQ('.aba-modal-content').append('<iframe scrolling="yes" class="aba-iframe '+iframe_class+'" src="" name="aba_webservice" id="aba_webservice"></iframe>');
    
        _jQ('.aba-modal-content').append('<span class="aba-close"><img src="https://payway.ababank.com/fileadmin/templates/img/close.png"/></span>');
    

        // Get the modal
        _jQ('#aba_main_modal').css('display','block');


        _jQ('#aba_main_modal').click(function(){ _jQ(this).focus(); });

        if(_jQ(selector).submit()){

            var form = this;

            _jQ(':submit', form).attr('disabled', false);

            setTimeout(function(){ _jQ('.aba-loader').hide(); }, 5000);

            _jQ('#aba_webservice').load(function() {
                _jQ('.aba-loader').hide();
            });
        }

        //---------Close Popup----------------------------
        _jQ(document).on("click touchstart", ".aba-close", function () {
            closePopup();
        });
    }

    var closePopup = function (){
        var confirmClose = true;
        
            confirmClose = confirm("Do you want to leave?");
        

        if (confirmClose == true) {
            if(_jQ('#aba_main_modal').hide()) {
                _jQ('#aba_webservice').attr('src', "");
        
                document.location.reload(true);
            

                if (_jQ(window).width() < 500) {
                    _jQ('html, body').css({"overflow":"auto", "height":"auto"});
                    //Enable scrool in iOS
                }
            
            }
        }
    }

    var checkout = function () {
        return openPopup('#aba_merchant_request, #respayment');
    }
    var addCard = function () {
        return openPopup('#aba_merchant_add_card, #respayment', 'add-card');
    }

    return {
        checkout: checkout,
        addCard: addCard
    }
})();
				