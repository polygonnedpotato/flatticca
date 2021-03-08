function newWindow(xmlFile, inorout) {
  if (inorout == "in") {
    //notavaliableyet
  } else if (inorout == "out") {
    open(xmlFile + ".xml", 'flatticca wm window', `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=200,left=-1000,top=-1000`)
  }
}