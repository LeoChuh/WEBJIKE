function stlSearchSubmit(e,n,t){var l=$(e),m=new Hash;if(l.elements)for(var o=0;o<l.elements.length;o++)""!=l.elements[o].name&&m.set(l.elements[o].name,encodeURIComponent(l.elements[o].value));var s=n+m.toQueryString();t?window.open(s):window.location.href=s}function stlEncodeFormElements(e){if(e.elements)for(var n=0;n<e.elements.length;n++)""!=e.elements[n].name&&(e.elements[n].style.visibility="hidden",e.elements[n].value=encodeURIComponent(e.elements[n].value))}