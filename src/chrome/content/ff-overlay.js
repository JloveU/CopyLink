var copylink = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
    this.strings = document.getElementById("copylink-strings");
  },

  onMenuItemCommand: function(e) {
    var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                                  .getService(Components.interfaces.nsIPromptService);
    promptService.alert(window, this.strings.getString("helloMessageTitle"),
                                this.strings.getString("helloMessage"));
  },

  onToolbarButtonCommand: function(e) {
    // just reuse the function above.  you can change this, obviously!
    copylink.onMenuItemCommand(e);
  }
};

window.addEventListener("load", function () { copylink.onLoad(); }, false);


copylink.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e) {
    copylink.showFirefoxContextMenu(e);
  }, false);
};

copylink.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-copylink").hidden = gContextMenu.onImage;
};

window.addEventListener("load", function () { copylink.onFirefoxLoad(); }, false);