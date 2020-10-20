export class CopyEmailToClipboard {
    email = "gabriel.borsero@gmail.com";
    copyMailElement = document.querySelector(".button--tertiary");
    paperIcon = document.querySelector(".button__icon--3");
    emailLabel = document.querySelector(".button__label--email");

    copyToClipboard() {
        let aux = document.createElement("input");
      
        aux.setAttribute("value", this.email);
      
        document.body.appendChild(aux);
      
        aux.select();
      
        document.execCommand("copy");
      
        document.body.removeChild(aux);
    }

}

