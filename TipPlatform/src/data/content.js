
/**
 a chrome plugin by:
 * Andy Groff (andy@groff.co)
 * http://groff.co
 *
 */

$(function(){

    var site = RDD.helpers.getCurrentSite();

    //early exit. The site wasn't resolved correctly.
    if(site === false) {
        dbg("site not found");
        return;
    }

    dbg("Attempting to load site: " + site);

    if(site !== 'apis' && window != window.top){
        dbg("Stopping iframe loads for this site.");
        return;
    }


    //set the current site
    RDD.site = RDD.sites[site];

    //initialiaze the modal dialogue
    //RDD.modal.initialize();

    //initialize the current site.
    RDD.site.initialize();

});
