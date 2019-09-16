/*
 filedrag.js - HTML5 File Drag & Drop demonstration
 Featured on SitePoint.com
 Developed by Craig Buckler (@craigbuckler) of OptimalWorks.net
 */
(function() {

    // getElementById
    function $id(id) {
        return document.getElementById(id);
    }


    // output information
    function Output(msg) {
        var m = $id("textfile");
        m.innerHTML = msg;
    }


    // file drag hover
    function FileDragHover(e) {
        e.stopPropagation();
        e.preventDefault();
        //        e.target.className = (e.type == "dragover" ? "hover" : "");
    }


    // file selection
    function FileSelectHandler(e) {

        // cancel event and hover styling
        FileDragHover(e);

        // fetch FileList object
        var files = e.target.files || e.dataTransfer.files;

        // process all File objects
        for (var i = 0, f; f = files[i]; i++) {
            ParseFile(f);
        }

        if (this.value != "") {
            document.getElementById('upldimg').style.display = 'none';
            document.getElementById('pro_bx').style.display = 'block';
        }
        setTimeout(function() {
            document.getElementById('pro_bx').style.display = 'none';
            document.getElementById('main_drag2').style.display = 'none';
            document.getElementById('mainDrag3').style.display = 'block';
        }, 2500);



        var can = document.getElementById('canvas'),
            spanProcent = document.getElementById('procent'),
            c = can.getContext('2d');

        var posX = can.width / 2,
            posY = can.height / 2,
            fps = 1000 / 200,
            procent = 0,
            oneProcent = 360 / 100,
            result = oneProcent * 100;

        c.lineCap = 'round';
        arcMove();

        function arcMove() {
            var deegres = 0;
            var acrInterval = setInterval(function() {
                deegres += 1;
                c.clearRect(0, 0, can.width, can.height);
                procent = deegres / oneProcent;

                spanProcent.innerHTML = procent.toFixed();

                c.beginPath();
                c.arc(posX, posY, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360));
                c.strokeStyle = '#fff';
                c.lineWidth = '10';
                c.stroke();

                c.beginPath();
                c.strokeStyle = '#ffd012';
                c.lineWidth = '10';
                c.arc(posX, posY, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + deegres));
                c.stroke();
                if (deegres >= result) clearInterval(acrInterval);
            }, fps);

        }



    }

    // output file information
    function ParseFile(file) {

        // var trim = file.name.split().pop();
        Output(
            // "<div class='Uploadimg1'><img src='img/file-icon-psd.png' alt='form_upload' class='img-responsive '><span class='textcolor'>" + file.name + "<img src='img/cross.png' alt='form_upload' class='img-responsive srcoss_im'> </span></div>"
            // $('.upldimg1').find('span.textcolor').children('g').text('asdfsadfs');

            document.getElementById('textfile').innerHTML = file.name

        );
    }


    // initialize
    function Init() {

        var fileselect = $id("fileselect"),
            filedrag = $id("filedrag"),
            submitbutton = $id("submitbutton");

        // file select
        fileselect.addEventListener("change", FileSelectHandler, false);

        // is XHR2 available?
        var xhr = new XMLHttpRequest();
        if (xhr.upload) {

            // file drop
            filedrag.addEventListener("dragover", FileDragHover, false);
            filedrag.addEventListener("dragleave", FileDragHover, false);
            filedrag.addEventListener("drop", FileSelectHandler, false);
            filedrag.style.display = "block";


            // remove submit button
            submitbutton.style.display = "none";
        }


    }

    // call initialization file
    if (window.File && window.FileList && window.FileReader) {
        Init();
    }


})();