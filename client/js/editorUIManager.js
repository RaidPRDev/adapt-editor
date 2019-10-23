function EditorUI(options)
{
     this.initializeDropdown();
}

EditorUI.prototype.initializeDropdown = function()
{
     // Get select element
     let editorSelectElements = document.getElementsByClassName("editor-select");

     let i = 0;
     let j = 0;
     let newSelectItem, optionSelectItem, optionItem;
     let selectedElement;
     for (i = 0; i < editorSelectElements.length; i++)
     {
          selectedElement = editorSelectElements[i].getElementsByTagName("select")[0];

          /* For each element, create a new DIV that will act as the selected item: */
          let selectItem = selectedElement.options[selectedElement.selectedIndex];

          newSelectItem = document.createElement("div");
          newSelectItem.setAttribute("class", "select-selected");
          newSelectItem.setAttribute("data-path", selectItem.getAttribute("data-path"));
          newSelectItem.setAttribute("data-value", selectItem.getAttribute("value"));
          newSelectItem.innerHTML = selectItem.innerHTML;
          editorSelectElements[i].appendChild(newSelectItem);

          /* For each element, create a new DIV that will contain the option list: */
          optionSelectItem = document.createElement("div");
          optionSelectItem.setAttribute("class", "select-items select-hide");

          for (j = 0; j < selectedElement.length; j++)
          {
               /* For each option in the original select element,
               create a new DIV that will act as an option item: */
               optionItem = document.createElement("div");
               optionItem.innerHTML = selectedElement.options[j].innerHTML;
               optionItem.setAttribute("data-path", selectedElement.options[j].getAttribute("data-path"));
               optionItem.setAttribute("data-value", selectedElement.options[j].getAttribute("value"));
               optionItem.addEventListener("click", function(e)
               {
                    /* When an item is clicked, update the original select box,
                    and the selected item: */
                    let select = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    let selectParent = this.parentNode.previousSibling;
                    let index = 0;
                    let innerIndex = 0;
                    for (let index = 0; index < select.length; index++)
                    {
                         if (select.options[index].innerHTML == this.innerHTML)
                         {
                              select.selectedIndex = index;
                              selectParent.innerHTML = this.innerHTML;
                              selectParent.setAttribute("data-path", this.getAttribute("data-path"));
                              selectParent.setAttribute("data-value", this.getAttribute("data-value"));
                              selectedItems = this.parentNode.getElementsByClassName("same-as-selected");
                              for (innerIndex = 0; innerIndex < selectedItems.length; innerIndex++)
                                   selectedItems[innerIndex].removeAttribute("class");

                              this.setAttribute("class", "same-as-selected");
                              break;
                         }
                    }
                    selectParent.click();
                    $(selectParent).trigger("change");
               });
               optionSelectItem.appendChild(optionItem);
          }
          editorSelectElements[i].appendChild(optionSelectItem);
          newSelectItem.addEventListener("click", function(e)
          {
               /* When the select box is clicked, close any other select boxes,
               and open/close the current select box: */
               e.stopPropagation();
               closeAllSelect(this);
               this.nextSibling.classList.toggle("select-hide");
               this.classList.toggle("select-arrow-active");
          });
     }

     // auto select first select item
     $(editorSelectElements[0]).find('.select-items').children().first().click();
     closeAllSelect();

     function closeAllSelect(elmnt)
     {
          // A function that will close all select boxes in the document,
          // except the current select box:
          let selectItems = document.getElementsByClassName("select-items");
          let select = document.getElementsByClassName("select-selected");
          let nonSelectItems = [];
          let i = 0;
          for (i = 0; i < select.length; i++)
          {
               if (elmnt == select[i])
                    nonSelectItems.push(i)
               else
                    select[i].classList.remove("select-arrow-active");
          }
          for (i = 0; i < selectItems.length; i++)
          {
               if (nonSelectItems.indexOf(i))
                    selectItems[i].classList.add("select-hide");
          }
     }

     // If the user clicks anywhere outside the select box,
     // then close all select boxes:
     $(document).on("click", closeAllSelect);
}
