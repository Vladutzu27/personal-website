var editorinput = document.getElementById("input");
var filefile = document.getElementById("filefile");
var fileedit = document.getElementById("fileedit");
var fileview = document.getElementById("fileview");
var numarindicator = document.getElementById("numar-indicator");
var culoareindicator = document.getElementById("culoare-indicator");
var indicator1 = document.getElementById("indicator-1");
var icon = document.getElementById("icon");
var logo = document.getElementById("logo");
var logosilinie = document.getElementById("logosilinie");
var indicator1 = document.getElementById("indicator1");
var themeSelector = document.getElementById("themeselector");
var fontsize = document.getElementById("size");
fontsize.value = "16px";

document.getElementById("tematica").style.display = "none";
document.getElementById("colortheme").style.display = "none";
document.getElementById("icon").style.display = "none";

var firimituri = 0;

var compact = true;

if (editorinput.addEventListener) {
    editorinput.addEventListener('input', function() {
        seteazaFirimituri();
    }, false);
} else if (editorinput.attachEvent) {
    editorinput.attachEvent('onpropertychange', function() {
      console.error("Nu merge");
    });
}

function saveTextToFile(fileName, textContent) {
    const blob = new Blob([textContent], { type: 'text/plain' });
  
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
  
    link.click();
  
    URL.revokeObjectURL(link.href);
}
function actionfile(actiune)
{
    fileedit.value = "Edit";
    filefile.value = "File";
    fileview.value = "View";
    if(actiune == "ul-md")
    {

    }
    else if(actiune == "dl-md")
    {
        saveTextToFile("output.md", editorinput.value);
    }
    else if(actiune == "dl-html")
    {
        editorinput.value.split("\n")[0].replace("# ", "") != null ? saveTextToFile(editorinput.value.split("\n")[0].replace("# ", "") + ".html", markdownRegex(formatParagraphs(editorinput.value.trim()))) : saveTextToFile("output.html", markdownRegex(formatParagraphs(editorinput.value.trim())));
    }
    else if(actiune == "cookie")
    {
        schimbaIndicator(1);
    }
    else if(actiune == "css")
    {
        afiseaza("tematica");
    }
    else if(actiune == "compact")
    {
        if (compact)
        {
            icon.style.display = "block";
            filefile.style.marginLeft = "30px";
            logosilinie.style.display = "none";
        }
        else
        {
            icon.style.display = "none";
            filefile.style.marginLeft = "0px";
            logosilinie.style.display = "block";
        }
        compact = !compact;
    }
    else if(actiune == "colortheme")
    {
        console.log("colortheme");
        afiseaza("colortheme");
    }
    else if(actiune == "imgur")
    {
        window.open("https://imgur.com/upload", "_blank");
        editorinput.value = editorinput.value + "![imgur](linkaici)";
    }
    else if(actiune == "winamp")
    {
        webamp.renderWhenReady(app);
    }
}
function formatParagraphs(textul)
{
    textul = textul.replace(/\n\n/g, "<\/p><p>");
    textul = textul.replace(/\n/g, "<br>");
    return textul;
}
function markdownRegex(textul)
{
    textul = textul.replace(/__(\w+)__/g, "<u>$1<\/u>");
    textul = textul.replace(/\*\*\*(\w+)\*\*\*/g, "<b><i>$1<\/i><\/b>");
    textul = textul.replace(/\*\*(\w+)\*\*/g, "<b>$1<\/b>");
    textul = textul.replace(/\*(\w+)\*/g, "<i>$1<\/i>");
    textul = textul.replace(/~~(\w+)~~/g, "<strike>$1<\/strike>");
    textul = textul.replace("***", "<hr>");
    textul = textul.replace("---", "<hr>");
    textul = textul.replace(/(\w+):(\w+)/g, "<a href=\"$2\">$1<\/a>");
    textul = textul.replace(/(\w+)\((\w+)\)/g, "<img src=\"$2\" alt=\"$1\">");
    textul = textul.replace(/```(\w+)```/g, "<div id=\"codeblock\">$1<\/div>");
    textul = textul.replace(/`(\w+)`/g, "<code>$1<\/code>");
    textul = textul.replace(/^###### (.+)$/gm, '<h6>$1</h6>');
    textul = textul.replace(/^##### (.+)$/gm, '<h5>$1</h5>');
    textul = textul.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
    textul = textul.replace(/^### (.+)$/gm, '<h3>$1</h3>');
    textul = textul.replace(/^## (.+)$/gm, '<h2>$1</h2>');
    textul = textul.replace(/^# (.+)$/gm, '<h1>$1</h1>');
    return textul;
}
function inchide(id)
{
    document.getElementById(id.split("-")[1]).style.display = "none";
}
function afiseaza(id)
{
    document.getElementById(id).style.display = "block";
}
function testIndicator()
{
    document.getElementById("indicator" + numarindicator.value).style.color = culoareindicator.value;
    console.log(numarindicator.value);
}
function schimbaIndicator(numar)
{
    document.getElementById("indicator" + numar).style.color = "#7aff5f";
}
function dezamorseazaIndicator(numar)
{
    document.getElementById("indicator" + numar).style.color = "#130f33";
}
function seteazaFirimituri()
{
    editorinput.value.split("\n").length > firimituri ? firimituri = editorinput.value.split("\n").length : null; 
    for (i = 0; i <= firimituri; i++)
    {
        var mergelaindicatoare = false;
        try {
            mergelaindicatoare = editorinput.value.split("\n")[i].includes("# ")
        } catch (error) {
            mergelaindicatoare = false;
        }
        console.log(editorinput.value);
        mergelaindicatoare ? schimbaIndicator(i + 1) : dezamorseazaIndicator(i + 1);
        mergelaindicatoare ? console.log(editorinput.value.split("\n")[i]) : null;
    }
}
function changetheme(tema)
{
    themeSelector.value = "colortheme";
    if(tema == "default")
    {
        updateTheme("#7aff5f", "#130f33");
    }
    if (tema == "dark")
    {
        updateTheme("#fff", "#111");
    }
    if (tema == "light")
    {
        updateTheme("#000", "#fff");
    }
}

function updateTheme(foreground, background)
{
    editorinput.style.backgroundColor = background; 
    editorinput.style.color = foreground;
    editorinput.style.border = foreground + " 1px solid";
    document.getElementById("body").style.backgroundColor = background;
    document.getElementById("body").style.color = foreground;
    var fileButtons = document.getElementsByClassName("filebutton");
    for (var i = 0; i < fileButtons.length; i++) {
        fileButtons[i].style.backgroundColor = background;
        fileButtons[i].style.color = foreground;
        fileButtons[i].style.borderRight = foreground + " 4px solid";
        fileButtons[i].style.borderBottom = foreground + " 4px solid";
        console.log(fileButtons[i]);
    }
    for (var i = 0; i < document.getElementsByClassName("icsi").length; i++)
    {
        document.getElementsByClassName("icsi")[i].style.color = foreground;
        document.getElementsByClassName("icsi")[i].style.backgroundColor = background;
        document.getElementsByClassName("icsi")[i].style.borderRight = foreground + " 4px solid";
        document.getElementsByClassName("icsi")[i].style.borderBottom = foreground + " 4px solid";
    }
    for (var i = 0; i < document.getElementsByClassName("linieorizontala").length; i++) {
        document.getElementsByClassName("linieorizontala")[i].style.border = foreground + " 1px solid";
        console.log("linie " + linii[i]);
    }
}

function changethemefont(categorie, valoare)
{
    if(categorie == "family")
    {
        editorinput.style.fontFamily = valoare;
    }
    else if(categorie == "size")
    {
        editorinput.style.fontSize = valoare;
    }
}