

	// original starts from 1, first dynamically created is 2
	var tiedotOikeinId = 2;
	//adds roads to tiedot oikein
	$(document).on("click", ".tiedot_oikein_lisaa_tie", function(e) {
		e.preventDefault();

		var lisatytTiet = document.getElementsByClassName('tiedot_oikein_lisatyt_tiet')[0];

	  // row
	  var uusiTieRow = document.createElement('div');
	  uusiTieRow.className = "row mb-3";

	  // col
	  var uusiTieCol = document.createElement('div');
	  uusiTieCol.className = "col";

		// input group
		var uusiTieControl = document.createElement('div');
		uusiTieControl.className = "input-group"

		// label
		var uusiTieLabel = document.createElement('label');
		uusiTieLabel.setAttribute("for", "tiedot_oikein_tien_nimi_" + tiedotOikeinId);
		uusiTieLabel.innerHTML = "Tien nimi";

	 	// text input
	  var input = document.createElement("input");
	  input.type = "text";
		input.className = "form-control";
		input.setAttribute("aria-describedby", "button-addon_" + tiedotOikeinId);
	  input.setAttribute("id", "tiedot_oikein_tien_nimi_" + tiedotOikeinId + "");
		input.setAttribute("name", "tiedot_oikein_tien_nimi_" + tiedotOikeinId + "");

		// input group appending
		var inputAppend = document.createElement('div');
		inputAppend.className = "input-group-append";

		// button
	  var removeButton = document.createElement("button");
	  removeButton.className = "btn btn-danger ";
		removeButton.setAttribute("id", "button-addon_" + tiedotOikeinId + "");
	  removeButton.innerHTML = "Poista";

		removeButton.onclick = function() {
			uusiTieRow.remove();
		}

	  //appending children
	  inputAppend.appendChild(removeButton);
		uusiTieControl.appendChild(input);
		uusiTieControl.appendChild(inputAppend);
		uusiTieCol.appendChild(uusiTieLabel);
		uusiTieCol.appendChild(uusiTieControl);
		uusiTieRow.appendChild(uusiTieCol);

	  lisatytTiet.appendChild(uusiTieRow);
	  tiedotOikeinId++;
	});


	// original starts from 1, first dynamically created is 2
	var ilmoitaTiedotId = 2;
	// adding roads to ilmoita tiekunnan tiedot
	$(document).on("click", ".ilmoita_tiedot_lisaa_tie", function(e) {
		e.preventDefault();

		var lisatytTiet = document.getElementsByClassName('ilmoita_tiedot_lisatyt_tiet')[0];

		//container for all
		var ilmoitaTiedotContainer = document.createElement('div');
		ilmoitaTiedotContainer.className="card mb-3 bg-light";

		  //fieldset
			var fieldset = document.createElement('fieldset');
			fieldset.className="card-body";

				//first row element -- Tien nimi
				var tienNimiRow = document.createElement('div');
			  tienNimiRow.className = "row mb-3";

					var tienNimiCol = document.createElement('div');
				  tienNimiCol.className = "col";

						var tienNimiLabel = document.createElement('label');
					  tienNimiLabel.innerHTML = "Tien nimi";


						var tienNimiInput = document.createElement("input");
					  tienNimiInput.type = "text";
					  tienNimiInput.setAttribute("id", "ilmoita_tiedot_tien_nimi_" + ilmoitaTiedotId + "");
						tienNimiInput.setAttribute("name", "ilmoita_tiedot_tien_nimi_" + ilmoitaTiedotId + "");
						tienNimiInput.className="form-control";

					  tienNimiCol.appendChild(tienNimiLabel);
					  tienNimiCol.appendChild(tienNimiInput);
				  tienNimiRow.appendChild(tienNimiCol);
				fieldset.appendChild(tienNimiRow);


			  //tierajoitukset container
			  var tierajoituksetContainer = document.createElement('div');
			  tierajoituksetContainer.className = "tierajoitukset_container_" + ilmoitaTiedotId;

			  //second row element -- Tiellä ei ole rajoituksia tai kieltoja checkbox
				var rajoituksetRow = document.createElement('div');
				rajoituksetRow.className = "row mb-3";

					var rajoituksetCol = document.createElement('div');
					rajoituksetCol.className = "col";

					var rajoituksetControl = document.createElement('div');
					rajoituksetControl.className = "custom-control custom-checkbox";

						var rajoituksetLabel = document.createElement('label');
					  rajoituksetLabel.innerHTML = "Tiellä ei ole rajoituksia tai kieltoja";
					  rajoituksetLabel.className = "custom-control-label";
						rajoituksetLabel.setAttribute("for", "tierajoitukset_checkbox_" + ilmoitaTiedotId);

						var rajoituksetCheckbox = document.createElement('input');
					  rajoituksetCheckbox.type = 'checkbox';
					  rajoituksetCheckbox.className = "custom-control-input";
						rajoituksetCheckbox.setAttribute("id", "tierajoitukset_checkbox_" + ilmoitaTiedotId);
						rajoituksetCheckbox.onclick = function() {
							tierajoituksetContainer.hidden = rajoituksetCheckbox.checked;
							if (tierajoituksetContainer.hidden) {
								resetFields(tierajoituksetContainer);
							}
						};


						rajoituksetControl.appendChild(rajoituksetCheckbox);
						rajoituksetControl.appendChild(rajoituksetLabel);


						rajoituksetCol.appendChild(rajoituksetControl);
					rajoituksetRow.appendChild(rajoituksetCol);
				fieldset.appendChild(rajoituksetRow);



			  //third row element -- painorajoitus
				var painoRow = document.createElement('div');
				painoRow.className = "row mb-3";

				  var painoCol = document.createElement('div');
				  painoCol.className = "col";

					  var painoLabel = document.createElement('label');
					  painoLabel.innerHTML = "Painorajoitus kg";
						painoCol.appendChild(painoLabel);


					  var painoInput = document.createElement('input');
					  painoInput.type = "text";
					  painoInput.setAttribute("id", "ilmoita_tiedot_painorajoitus_" + ilmoitaTiedotId + "");
						painoInput.setAttribute("name", "ilmoita_tiedot_painorajoitus_" + ilmoitaTiedotId + "");
						painoInput.className="form-control";
						painoCol.appendChild(painoInput);

					painoRow.appendChild(painoCol);

				tierajoituksetContainer.appendChild(painoRow);



			  //fourth row element -- Lisäkilvet
			  var kilvetRow = document.createElement('div');
				kilvetRow.className = "row mb-3";

				  var kilvetCol = document.createElement('div');
				  kilvetCol.className = "col";

					  var kilvetLabel = document.createElement('label');
					  kilvetLabel.innerHTML = "Lisäkilvet";
						kilvetCol.appendChild(kilvetLabel);

					  var kilvetInput = document.createElement('input');
					  kilvetInput.type = "text";
					  kilvetInput.setAttribute("id", "ilmoita_tiedot_lisakilvet_" + ilmoitaTiedotId + "");
						kilvetInput.setAttribute("name", "ilmoita_tiedot_lisakilvet_" + ilmoitaTiedotId + "");
						kilvetInput.className="form-control";
						kilvetCol.appendChild(kilvetInput);

					kilvetRow.appendChild(kilvetCol);

				tierajoituksetContainer.appendChild(kilvetRow);


				//fifth row element -- kelirikko
				var kelirikkoRow = document.createElement('div');
				kelirikkoRow.className = "row mb-3";

					var kelirikkoCol = document.createElement('div');
					kelirikkoCol.className = "col";

						var kelirikkoLabel = document.createElement('label');
						kelirikkoLabel.innerHTML = "Kelirikko";
						kelirikkoLabel.className = "voimassaoloAika";
						kelirikkoCol.appendChild(kelirikkoLabel);

						var kelirikkoInput = document.createElement('input');
						kelirikkoInput.type = "text";
						kelirikkoInput.setAttribute("id", "ilmoita_tiedot_kelirikko_" + ilmoitaTiedotId + "");
						kelirikkoInput.setAttribute("name", "ilmoita_tiedot_kelirikko_" + ilmoitaTiedotId + "");
						kelirikkoInput.className="form-control";
						kelirikkoCol.appendChild(kelirikkoInput);

					kelirikkoRow.appendChild(kelirikkoCol);

				tierajoituksetContainer.appendChild(kelirikkoRow);


			  //sixth row element -- voimassaoloaika
			  var voimassaoloRow = document.createElement('div');
				voimassaoloRow.className = "row mb-3";

				  var voimassaoloCol = document.createElement('div');
				  voimassaoloCol.className = "col";

					  var voimassaoloLabel = document.createElement('label');
					  voimassaoloLabel.innerHTML = "Arvio kelirikon tilapäisestä tai toistuvasta voimassaoloajasta";
					  voimassaoloLabel.className = "voimassaoloAika";
						voimassaoloCol.appendChild(voimassaoloLabel);

						var voimassaoloDateRow = document.createElement('div');
						voimassaoloDateRow.className = "row mb-3";

							var voimassaoloDateCol1 = document.createElement('div');
							voimassaoloDateCol1.className = "col";

							  var voimassaoloInput1 = document.createElement('input');
							  voimassaoloInput1.type = "text";
							  voimassaoloInput1.setAttribute("id", "voimassaoloStart");
								voimassaoloInput1.setAttribute("name", "ilmoita_tiedot_voimassaoloAika_start_" + ilmoitaTiedotId + "");
								voimassaoloInput1.setAttribute("placeholder", "Alkaa");
								voimassaoloInput1.setAttribute("autocomplete", "off");
								voimassaoloInput1.className="form-control";
								voimassaoloDateCol1.appendChild(voimassaoloInput1);

							voimassaoloDateRow.appendChild(voimassaoloDateCol1);


							var voimassaoloDateCol2 = document.createElement('div');
							voimassaoloDateCol2.className = "col";

								var voimassaoloInput2 = document.createElement('input');
								voimassaoloInput2.type = "text";
								voimassaoloInput2.setAttribute("id", "voimassaoloEnd");
								voimassaoloInput2.setAttribute("name", "ilmoita_tiedot_voimassaoloAika_end" + ilmoitaTiedotId + "");
								voimassaoloInput2.setAttribute("placeholder", "Päättyy");
								voimassaoloInput2.setAttribute("autocomplete", "off");
								voimassaoloInput2.className="form-control";
								voimassaoloDateCol2.appendChild(voimassaoloInput2);

							voimassaoloDateRow.appendChild(voimassaoloDateCol2);

						voimassaoloCol.appendChild(voimassaoloDateRow);

					voimassaoloRow.appendChild(voimassaoloCol);

				tierajoituksetContainer.appendChild(voimassaoloRow);

				// Calendar  for Arvio kelirikon tilapäisestä tai toistuvasta voimassaoloajasta
				var startPicker = new Pikaday({
							field: voimassaoloInput1,
							i18n: fiDate,
							weekStartsOn: '1',
							firstDay: 1,
							minDate: new Date(2019, 0, 1),
					    maxDate: new Date(2100, 12, 31),
							format: 'D.MM.YYYY',
							onSelect: function() {
									startDate = this.getDate();
									updateStartDate();
							}
					})

					var startDate, endDate, updateStartDate = function() {
								startPicker.setStartRange(startDate);
								endPicker.setStartRange(startDate);
								endPicker.setMinDate(startDate);
						}

					_startDate = startPicker.getDate()

					if (_startDate) {
							startDate = _startDate;
							updateStartDate();
					}



				var	endPicker = new Pikaday({
							field: voimassaoloInput2,
							i18n: fiDate,
							weekStartsOn: '1',
							firstDay: 1,
							minDate: new Date(2019, 0, 1),
					    maxDate: new Date(2100, 12, 31),
							format: 'D.MM.YYYY',
							onSelect: function() {
									endDate = this.getDate();
									updateEndDate();
							}
					})

					var updateEndDate = function() {
								startPicker.setEndRange(endDate);
								startPicker.setMaxDate(endDate);
								endPicker.setEndRange(endDate);
						}

					_endDate = endPicker.getDate();

					if (_endDate) {
							endDate = _endDate;
							updateEndDate();
					}


				//seventh row element -- ajokielto
			  var ajokieltoRow = document.createElement('div');
				ajokieltoRow.className = "row mb-3";

				  var ajokieltoCol = document.createElement('div');
				  ajokieltoCol.className = "col";

					  var ajokieltoLabel = document.createElement('label');
					  ajokieltoLabel.innerHTML = "Ajokielto";

					  var ajokieltoInput = document.createElement('input');
					  ajokieltoInput.type = "text";
					  ajokieltoInput.setAttribute("id", "ilmoita_tiedot_ajokielto_" + ilmoitaTiedotId + "");
						ajokieltoInput.setAttribute("name", "ilmoita_tiedot_ajokielto_" + ilmoitaTiedotId + "");
						ajokieltoInput.className="form-control";

						ajokieltoCol.appendChild(ajokieltoLabel);
						ajokieltoCol.appendChild(ajokieltoInput);
				 	ajokieltoRow.appendChild(ajokieltoCol);
			 	tierajoituksetContainer.appendChild(ajokieltoRow);



				//eighth row element -- ajokielto lisäkilvet
			  var ajokieltoKilvetRow = document.createElement('div');
				ajokieltoKilvetRow.className = "row mb-3";

			  var ajokieltoKilvetCol = document.createElement('div');
			  ajokieltoKilvetCol.className = "col";


			  var ajokieltoKilvetLabel = document.createElement('label');
			  ajokieltoKilvetLabel.innerHTML = "Lisäkilvet";

			  var ajokieltoKilvetInput = document.createElement('input');
			  ajokieltoKilvetInput.type = "text";
			  ajokieltoKilvetInput.setAttribute("id", "ilmoita_tiedot_ajokielto_lisakilvet_" + ilmoitaTiedotId + "");
				ajokieltoKilvetInput.setAttribute("name", "ilmoita_tiedot_ajokielto_lisakilvet_" + ilmoitaTiedotId + "");
				ajokieltoKilvetInput.className="form-control";

				//row 8 -- ajokielto lisäkilvet
				ajokieltoKilvetCol.appendChild(ajokieltoKilvetLabel);
				ajokieltoKilvetCol.appendChild(ajokieltoKilvetInput);
				ajokieltoKilvetRow.appendChild(ajokieltoKilvetCol);
				tierajoituksetContainer.appendChild(ajokieltoKilvetRow);



			  //ninth row element -- Nopeusrajoitus
			  var nopeusrajoitusRow = document.createElement('div');
				nopeusrajoitusRow.className = "row mb-3";

			  var nopeusrajoitusCol = document.createElement('div');
			  nopeusrajoitusCol.className = "col";

			  var nopeusrajoitusLabel = document.createElement('label');
			  nopeusrajoitusLabel.innerHTML = "Nopeusrajoitus";

			  var nopeusrajoitusInput = document.createElement('input');
			  nopeusrajoitusInput.type = "text";
			  nopeusrajoitusInput.setAttribute("id", "ilmoita_tiedot_nopeusrajoitus_" + ilmoitaTiedotId + "");
				nopeusrajoitusInput.setAttribute("name", "ilmoita_tiedot_nopeusrajoitus_" + ilmoitaTiedotId + "");
				nopeusrajoitusInput.className="form-control";

				nopeusrajoitusCol.appendChild(nopeusrajoitusLabel);
				nopeusrajoitusCol.appendChild(nopeusrajoitusInput);
				nopeusrajoitusRow.appendChild(nopeusrajoitusCol);

				tierajoituksetContainer.appendChild(nopeusrajoitusRow);

			  //tenth row element -- Karttalinkit
			  var karttaLinkitRow = document.createElement('div');
				karttaLinkitRow.className = "row mb-3";

			  var karttaLinkitCol = document.createElement('div');
			  karttaLinkitCol.className = "col";

			  var karttalinkitLabel = document.createElement('label');
			  karttalinkitLabel.innerHTML = "Karttalinkit*";

			  var karttalinkitTextArea = document.createElement('textarea');
			  karttalinkitTextArea.maxlength = "5000";
			  karttalinkitTextArea.setAttribute("id", "ilmoita_tiedot_karttalinkit_" + ilmoitaTiedotId + "");
				karttalinkitTextArea.setAttribute("name", "ilmoita_tiedot_karttalinkit_" + ilmoitaTiedotId + "");
				karttalinkitTextArea.setAttribute("placeholder", "Kirjoita...");
				karttalinkitTextArea.className="form-control";

 				//row 10 -- karttalinkit textfield
 				karttaLinkitCol.appendChild(karttalinkitLabel);
 				karttaLinkitCol.appendChild(karttalinkitTextArea);
 				karttaLinkitRow.appendChild(karttaLinkitCol);
				tierajoituksetContainer.appendChild(karttaLinkitRow);


				//email instructions
			  var ohjeRow = document.createElement("div");
			  ohjeRow.className = "row mb-3";

			  var ohjeCol = document.createElement("div");
			  ohjeCol.className = "col"


			  var ohjeLabel = document.createElement("label");
			  ohjeLabel.innerHTML = "*Rajoitusten ja kieltojen sijainneista voi toimittaa myös vapaamuotoisen kartan sähköpostitse osoitteeseen info@digiroad.fi. Otsikkokenttään tulee laittaa tiekunnan nimi."

				//instruction label
			  ohjeCol.appendChild(ohjeLabel);
				ohjeRow.appendChild(ohjeCol);
				tierajoituksetContainer.appendChild(ohjeRow);
				fieldset.appendChild(tierajoituksetContainer);



			  //remove button

			  var poistaRow = document.createElement("div");
			  poistaRow.className = "row mb-3";

			  var poistaCol = document.createElement("div");
			  poistaCol.className = "col text-right";

				var poistaTieA = document.createElement("button");
				poistaTieA.className = "btn btn-danger btn-lg";
				poistaTieA.innerHTML = "Poista";

				poistaTieA.onclick = function() {
					ilmoitaTiedotContainer.remove();
				}

				//row 11 delete road button
				poistaCol.appendChild(poistaTieA);
				poistaRow.appendChild(poistaCol);
				fieldset.appendChild(poistaRow);


		  //fieldset to container
			ilmoitaTiedotContainer.appendChild(fieldset);

		  //appending created elements to DOM
	  lisatytTiet.appendChild(ilmoitaTiedotContainer);
	  ilmoitaTiedotId++;
	});


	// moment locale to FI
	moment.locale('fi');

	var fiDate = {
                previousMonth: 'Edellinen',
                nextMonth: 'Seuraava',
								months: moment.localeData()._months,
                weekdays: moment.localeData()._weekdays,
                weekdaysShort: moment.localeData()._weekdaysShort
              };



	// Calendar  for Arvio kelirikon tilapäisestä tai toistuvasta voimassaoloajasta
	var startDate, endDate, updateStartDate = function() {
				startPicker.setStartRange(startDate);
				endPicker.setStartRange(startDate);
				endPicker.setMinDate(startDate);
		}

	var updateEndDate = function() {
				startPicker.setEndRange(endDate);
				startPicker.setMaxDate(endDate);
				endPicker.setEndRange(endDate);
		}

	var startPicker = new Pikaday({
				field: document.getElementById('voimassaoloStart'),
				i18n: fiDate,
				weekStartsOn: '1',
				firstDay: 1,
				minDate: new Date(2019, 0, 1),
		    maxDate: new Date(2100, 12, 31),
				format: 'D.MM.YYYY',
				onSelect: function() {
						startDate = this.getDate();
						updateStartDate();
				}
		})

		_startDate = startPicker.getDate()

		if (_startDate) {
				startDate = _startDate;
				updateStartDate();
		}



	var	endPicker = new Pikaday({
				field: document.getElementById('voimassaoloEnd'),
				i18n: fiDate,
				weekStartsOn: '1',
				firstDay: 1,
				minDate: new Date(2019, 0, 1),
		    maxDate: new Date(2100, 12, 31),
				format: 'D.MM.YYYY',
				onSelect: function() {
						endDate = this.getDate();
						updateEndDate();
				}
		})

		_endDate = endPicker.getDate();

		if (_endDate) {
				endDate = _endDate;
				updateEndDate();
		}


	// depending on the value of toiminto-dropdown, the user should see 1 of the 2 different divs
	// tiedot_oikein_container OR ilmoita_tiedot_container
	function dropdownUpdate() {
		document.getElementById('ilmoita_tiedot_container').style.display = 'none';
		document.getElementById('tiedot_oikein_container').style.display = 'none';

		if (this.value == 1) {
			resetVakuutanCheckboxes();
		  document.getElementById('tiedot_oikein_container').style.display = 'block';

		  // resets the ilmoita_tiedot_container fields
		 	resetFields('#ilmoita_tiedot_container');
		  deleteRoads('.ilmoita_tiedot_lisatyt_tiet');

		  document.getElementById("tiedot_oikein_checkbox").required = true;
		  document.getElementById("ilmoita_tiedot_checkbox").required = false;


		} else if (this.value == 2) {
			showIlmoitaTiedotRajoitukset();
			resetVakuutanCheckboxes();
		  document.getElementById('ilmoita_tiedot_container').style.display = 'block';

			// resets the tiedot_oikein_container fields & deletes added roads
				resetFields('#tiedot_oikein_container');
		  deleteRoads('.tiedot_oikein_lisatyt_tiet');

		  document.getElementById("tiedot_oikein_checkbox").required = false;
		  document.getElementById("ilmoita_tiedot_checkbox").required = true;
		}
	}

	// adding event listener to the dropdown menu
	document.getElementById('toiminto_dropdown').addEventListener('change', dropdownUpdate);
	window.addEventListener('load', dropdownUpdate);



	// creates a downloadable pdf from the form data
	function createPDF() {
		var doc = new jsPDF();
		doc.internal.scaleFactor = 30;
		var imgData = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAMBAAUAAAABAAAAVgMDAAEAAAABAAAAAFEQAAEAAAABAQAAAFERAAQAAAABAAAOw1ESAAQAAAABAAAOwwAAAAAAAYagAACxj//bAEMAAgEBAgEBAgICAgICAgIDBQMDAwMDBgQEAwUHBgcHBwYHBwgJCwkICAoIBwcKDQoKCwwMDAwHCQ4PDQwOCwwMDP/bAEMBAgICAwMDBgMDBgwIBwgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIBGMDGgMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBNgo2CkZ1Uc037Sv95fzrOVSK3YaklFNRww4p1aXuAUUUUAFFFGaACijNFABRRRQAUUUUAFFFGaACijNFABRRRQAUUUZoAKKKM0AFFGcU1pVjHzMBUykluA6ikVtw4paoAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKM0UAFFFFABRRRQAUUZooAKKKKACiiigAoozRQAUUZooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoooPSgD4P/bE/aP8AG3hz49eIvD+m69dWumWjQrBBDiMx74Y3bDKAxyzE5JOM+nFc/Y/D746XtnHeQ3njLyZlEiH+1ZfmUjI+Xf8A0rL/AG13z+1n4m/67Wv/AKTxV+gfw9TzfA+lH0tYx/46tfzhkuU4nPs7x1KviZwjCb5VGT0TbVrPZJJbH7XmmZYfKcowVWlh4SdSC5uaPVJO+lrt33dz4QX9pX4wfBq8jj1S41RY14EWo2pZZsc53Mu8j3Vh9a+kv2Zf22NL+Nt1HpOoRx6XrrAlI9+Y7rHJ2E8hsc7TnjoTg49e8XeBtL8b6HNpmrWcN5aTDDJIm4fUehHYjBHavzt/aK+FFx+zf8ZfJsZpo4VKXdjMpw6KWO3n+8rKRkf3QeMgV35rTzvg+rDGKvKthnJRkpNtq/m27fI4stllXE8J4WVGNKuk3GUdE7eVtfR3dup+luef9mgHn9c15BoHx5utY/ZTbxrbrBJqFvp8kjhlPlmWLKvxkHaWUkDI4Irg/wBkb9sTxB8dfiTPo+qWul29tHZyXCvbRur7leNQPmdhjDn8hX6n/rjgPbUMO2+atFSjZaNPu+h+f/6t432VWuorlpNxlrqmvI+nDyx/lR2rh/jT8cdF+B3hWTUtWmbc2VggTHmTt/dUH9Se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G/tKfDXw/wDEK58Q6P4gs/iT8S08YadrsMWkvew+TC2uao1vcQzWysJFWElJHUs4YqPq3x3/AME1Ph78SfAfxu8N6xceIrrT/jxrEOu60RdxpJpl5BbWcFvLZMsY2GI2NvMolEo8xTu3IdlZul/8E0NFvf2gfh/8UvGXxO+LXxG8cfDW7up9EvNe1KxhtYYbmymtJbc2NjaW1ntKzNIZlgW5ZkjDTNGgjpxlZprdJJ32bsk9ut7ldGvW3lfb7j4S/bI/aLtbn9gfxp8fPgX4V/bB0230uVtY8NeP774sT3HhuU22pqjTSaRfeIpJZLKVo5I/Il00kxyY8pRgj6QtvDHiT9pv/grD8W/BOtfFD4oaL8O/D3gjwrqz+GPDniCXR7e+ubg6iGf7Vb7b21AMKMRZ3Fv5pVRKZUGw9N4o/wCCJHgPxn+z3qnwfvviV8Zv+FP3QvP7M8GWmr2Njp/h9p7h7hfJmgs0u7lIZJGMcN/cXUP3S8chRCvv3gT9k7w78P8A9prxl8VrO81qbxF420TS9Avra4miayhg083BhaJRGHEjfaX3lnYHC4C4OZdrWXdtJ+n+ZTeluvf5r9Lnin/BH74jeIPFnwt+LOg65r2ueIrX4d/FrxP4T0W61rUZtS1BNOtrz/R4prqdnmnZA5UPK7OVCgscCvr7bxXln7Mv7Kvh39lC18bQ+HbzWrxfHni/UvGuoHUZY5DDeX8gkmji8uNNsKlRtVtzAdXavVFNEdk3vZJ+qIjGzfq2vR7Eg4oooqiwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACjFFFABRRRQAUYoooAKKKKACiiigAooooAKKKKACjFFFABRRRQAUUUUAFFFFABRiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACjpRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAGKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKK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bvw14U1kaINNsZLSFobLdNbabDfTfZ1YFPOunLMitIZCMn6e6ClydtBXFH9epKik7pD6KKKooMUUUUAee6B+z7o+i/tB+IPiU11qV94i17R7PQVW4aP7PptnbSTSiK3VUVh5kk7vIzs5YqgBVUVR3+z1FKw2rQvHNT5Lb/MN9XueffFn4A6P8afGvgXVtauNSaP4faw+vWFhE0a2l1efZpreKScFC7eUs8jIqug3lWYNtXHfBFBpWj5oC8/hRy2++4t9X6fIk60UDiiqGFGKKKADFGKKKACjGaKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACijNGaACijNFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBGTXn97+0r4H0/XvHmnXXiK1sbj4X2MGpeKHuY5IINHtpoZJ45nmdRGU8qKRyUZtoQ7tvQ+gM20+lflv+2RoOsX37X37Q2s31qviD4R+FdQ8Eaz8SvDNlYS/2trOkw2s8nmJOszJLbWzJ9onsvs2+5iidBMMmJs5yasl1aXoHn/T8kfpJ8MPiPpPxi+Hui+KtBkvptF8Q2cV/YSXen3GnzPDIu5GaC4RJY8gg7XRWweRXSDgV8y6J8drX/hvjXpm8XQ/8IAvw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viT4H6x4KtNQnu444hqlzdBoomTcZQuz5i4QqAMZzxWb8JfB/wAVPip8dvgrrXib4O6t4E8M/D3wjrGhasmua9pN3fXV3cW9goEcFlcXETWreQ6rI04kLBg8Ma7Xf7OZcLTaUKajfrdW19W/1Hy6387/AIJfofAv7H37P/xE+B37TXhe0+H/AIN/aM+GvwXjhe313wv8Q/GegeIvDunWlvYSQ2cGkLHqGo6lbSG4aFjGJ47YRxsCoxGo+4PAfia88XeE7PUNQ8P6t4VvLqPfJpWpyW0l3ZnJGyRrWaaAtxn93K4wRznIG2Dn86UJW3NdWEt7jqKKKCgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopnU9m/GgB9FFGaACijNR4OO3pnNAEhGRQBgVGQxP9M1ITgUAFFRgZP6HnrUlABRRRQAEZFAGBUe7Pp165qSgAoqNjt/rk4qSgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAxzX5i/tzceLP21v8Art8Mv/SuOv05z82K8E+LX/BP3wb8Y3+LUmpal4ntbj4xW+kxanLaXECtpsmmZNpPaB4WCyK+1yJhKjFAChUsrYzi3a3dMDx39pf9tv40eEtc/aUbwTD8L9P0P9nnSrfXvO1zT7/UbvxBG2kC/ex8uG4t0t2LK4F35koAZVNsSpdofHX/AAUJ+KX7NHjnWLj4kab8P9Y8PzfCTXvijY6X4cgvLe70iTS3st2my300rreiQXqqLhbS1IMZJhwcD2Nf+Cf/AIfvPAvxf0XWvF3jbxJdfG7RYtF8TatetYRXjomnnT/OhW3tIoI5WiO4/uim/kIF+WtX4i/sQeCfix46sda8QLqmpRWvgfVfh7Npjzqllf6XqLWZuRKFUSeYRZxqrJIgAeTgkqV0jo/l+Nv8xytZPzV/TQ86+F37Q3xi8D/Hj4U+G/ilqXw01zT/AIxaTqFxZJ4a0K+0i58PX1pbRXZt3ee+u1vY2iaVfMVbYhogdhEm1PmK/wDGHxE+OuhfsE+JfBdx8J/hu2reKNZNppcHgm5utM027XQ9dDOkMWpW48hoEkXygyt5sgk80hTE32Z8FP2DbP4T/Efw74k1j4lfE74jTeCdKm0bwzaeJptNW10CCZYkkMYsrK2eeVo4Y4/NumnkChsMC7ls+b/gm34Xs/gb8M/BOgeLvHXhe6+EWpSar4Y8SafJp8usWc0kV1DLuFzaTWsivFeTxsr25GGBGGAajrdd/wDhxR6p9n99jyf4H6N8TrX/AILLfGq6uvGngH+w7fwT4Ql1W3Xwhdx3FzZ+dr4hjinOplIJUcSs8rxSq6uiiKIoXkxvhN/wU68XeIP2lfhTov8AwlGg/EDwP8VNZutJt72x+CnirwdDDGunXl5BdW2rahdz2N8jG1CbYQC6yGRDtQg/TV9+yBZN+0jH8TrPxl400nVr3RLXQPENhajTmsPFlratctb/AGtZLR5UdGu5yGtJLcnfg5ACjzjwh/wTF8P/AApPw91BfG3xd8ZWfwRuHvfAvhy61TT47PTIlsLizWwVI7e3W5XyZgiS30kk6GNMXCK8wkL6XfTp5XCUb372VvVJL8zy34f/ALceraZ+xn8Er7w3q3gP4a+IPGllqN4nhrQ/g1r/AI2ikt7e42O9pp2jXcc1rDG0kZeSQuhedRlSRl3wY/4KS/F79oPSPg3o/hvS/h/a+JPiFqXjPRNY1LWtI1TT7bT20O7+zx38WmySC6Uso3vp9xLHIGbyzcxFC7dp+zZ/wTf1Tw9+zZ8FE1Txl4w+GvxM+Hvh67026vvC02nTskOoSxXV5p0gvLW6t5EEsMA82NFk3QZSRVYg+hfA/wD4JweBvgD4i8GahoeqeMrhvAWo+I9R01dU1X+0Hmk1ubzrsTzSo082xuI2eQyYyZHlJzVctr389vw/4IdF8vutqX/2F/2g/Fnx18GeNrPxsvh+bxP8P/GOp+E72+0SxmsLDU/szI8VxHbTT3EkG6KWMMhmlw6sQ2CAPn/4Nf8ABQH44eJvhb8C/if4ntfhTZ+D/il4qtfCV3oGlaffz6kftMlzBFqEd9JcpFBiZIi1obWfCK+LlmcBPrP4Hfs76L+z/c+NJNHutWum8deJrvxTfi8lR/KubhI1dItiLiICJcBtzAk5Y8Y4fRf+Ce/g7Q/gb8Mvh/DqXihtF+FPiCz8RaRO9zAbq4uLaeSeNZ2EO1oy0rBgio2AMMDk1g+bS3lft0uTG/K111t+h4fa/treMPAvhS6/4Qvwb8N7fVvEHx/1P4fNC0M2m2twh+0E6hO0PmM92zRLJI23EuCuI9wdcX4u/tvftKfB/wCF/wC0NrlxdfA/Uv8Ahm2Zbi9uovDeqQf8JlC2lWmpm2jtTqDf2a6R3OwXDXF4JGOfIiCZk+jrf/gnx4NtzZ7dS8T/AOh/Emb4pJm4g51OXzd0J/c/8ew85sKP3nAzIec2Pif+wZ4P+K/gL45eHdS1LxJDY/H9dviF7e4hWWz/AOJZb6b/AKIWiIT9zbI37wSfOzH7uFGtG6Xvauy+/T/JlR+K8tv6/wCAc58JPjDr3in9pP8AaA0vw34N8BtrHhm+8NpHPJJJpNxrKXOnwyyvfXkcVw0rwRs4hAhAwiRkoGMi/SucjFeS6T+ylY+F/GnxB8ReH/FXirw7rnxGudKuNQvLQ2UzWv2CGOBI4EuLaWMLLDHsk3q7YkYoY22svrWNo96omne2u46iiigoKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiijNABRRRQAUUUUAFFGaKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAaPkrw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P0CCqfzoWJQf/rUR0tbp/l/wS+bZdr/jY+Tf+Cf3wr8G/Df4feEvtVnrHiXxlrWr+KPEFlr9/wDC3VvDH9mS3+oPd38UUF9C0ulQu0kapHPMpuVhDKZQCR9abSabTwck1o2QtBaKKKkYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFc18U9R8VaT4FvrjwTo+g+IPE0fl/Y7DW9Zm0ewuMyKJPMuobW6kj2xl2G2B9zKqnaGLr5J/wsf9qb/ojn7P8A/wCHj1f/AOZigD6Aor5//wCFj/tTf9Ec/Z//APDx6v8A/MxR/wALH/am/wCiOfs//wDh49X/APmYoA+gKK+f/wDhY/7U3/RHP2f/APw8er//ADMUf8LH/am/6I5+z/8A+Hj1f/5mKAPoCivn/wD4WP8AtTf9Ec/Z/wD/AA8er/8AzMUf8LH/AGpv+iOfs/8A/h49X/8AmYoA+gKK+f8A/hY/7U3/AERz9n//AMPHq/8A8zFH/Cx/2pv+iOfs/wD/AIePV/8A5mKAPoCivn//AIWP+1N/0Rz9n/8A8PHq/wD8zFH/AAsf9qb/AKI5+z//AOHj1f8A+ZigD6Aor5//AOFj/tTf9Ec/Z/8A/Dx6v/8AMxR/wsf9qb/ojn7P/wD4ePV//mYoA+gKK+f/APhY/wC1N/0Rz9n/AP8ADx6v/wDMxR/wsf8Aam/6I5+z/wD+Hj1f/wCZigD6Aor5/wD+Fj/tTf8ARHP2f/8Aw8er/wDzMUf8LH/am/6I5+z/AP8Ah49X/wDmYoA+gKK+f/8AhY/7U3/RHP2f/wDw8er/APzMUf8ACx/2pv8Aojn7P/8A4ePV/wD5mKAPoCivn/8A4WP+1N/0Rz9n/wD8PHq//wAzFH/Cx/2pv+iOfs//APh49X/+ZigD6Aor5/8A+Fj/ALU3/RHP2f8A/wAPHq//AMzFH/Cx/wBqb/ojn7P/AP4ePV//AJmKAPoCivn/AP4WP+1N/wBEc/Z//wDDx6v/APMxR/wsf9qb/ojn7P8A/wCHj1f/AOZigD6Aor5//wCFj/tTf9Ec/Z//APDx6v8A/MxR/wALH/am/wCiOfs//wDh49X/APmYoA+gKK+f/wDhY/7U3/RHP2f/APw8er//ADMUf8LH/am/6I5+z/8A+Hj1f/5mKAPoCivn/wD4WP8AtTf9Ec/Z/wD/AA8er/8AzMUf8LH/AGpv+iOfs/8A/h49X/8AmYoA+gKK+f8A/hY/7U3/AERz9n//AMPHq/8A8zFH/Cx/2pv+iOfs/wD/AIePV/8A5mKAPoCivn//AIWP+1N/0Rz9n/8A8PHq/wD8zFH/AAsf9qb/AKI5+z//AOHj1f8A+ZigD6Aor5//AOFj/tTf9Ec/Z/8A/Dx6v/8AMxR/wsf9qb/ojn7P/wD4ePV//mYoA+gKK+f/APhY/wC1N/0Rz9n/AP8ADx6v/wDMxR/wsf8Aam/6I5+z/wD+Hj1f/wCZigD6Aor5/wD+Fj/tTf8ARHP2f/8Aw8er/wDzMUf8LH/am/6I5+z/AP8Ah49X/wDmYoA+gKK+f/8AhY/7U3/RHP2f/wDw8er/APzMUf8ACx/2pv8Aojn7P/8A4ePV/wD5mKAPoCivn/8A4WP+1N/0Rz9n/wD8PHq//wAzFH/Cx/2pv+iOfs//APh49X/+ZigD6Aor5/8A+Fj/ALU3/RHP2f8A/wAPHq//AMzFH/Cx/wBqb/ojn7P/AP4ePV//AJmKAPoCivn/AP4WP+1N/wBEc/Z//wDDx6v/APMxR/wsf9qb/ojn7P8A/wCHj1f/AOZigD6Aor5//wCFj/tTf9Ec/Z//APDx6v8A/MxR/wALH/am/wCiOfs//wDh49X/APmYoA+gKK+f/wDhY/7U3/RHP2f/APw8er//ADMUf8LH/am/6I5+z/8A+Hj1f/5mKAPoCivn/wD4WP8AtTf9Ec/Z/wD/AA8er/8AzMUf8LH/AGpv+iOfs/8A/h49X/8AmYoA+gKK+f8A/hY/7U3/AERz9n//AMPHq/8A8zFH/Cx/2pv+iOfs/wD/AIePV/8A5mKAPoCivn//AIWP+1N/0Rz9n/8A8PHq/wD8zFH/AAsf9qb/AKI5+z//AOHj1f8A+ZigD6Aor5//AOFj/tTf9Ec/Z/8A/Dx6v/8AMxR/wsf9qb/ojn7P/wD4ePV//mYoA+gKK+f/APhY/wC1N/0Rz9n/AP8ADx6v/wDMxR/wsf8Aam/6I5+z/wD+Hj1f/wCZigD6Aor5/wD+Fj/tTf8ARHP2f/8Aw8er/wDzMUf8LH/am/6I5+z/AP8Ah49X/wDmYoA+gKK+f/8AhY/7U3/RHP2f/wDw8er/APzMUf8ACx/2pv8Aojn7P/8A4ePV/wD5mKAPoCivn/8A4WP+1N/0Rz9n/wD8PHq//wAzFH/Cx/2pv+iOfs//APh49X/+ZigD6Aor5/8A+Fj/ALU3/RHP2f8A/wAPHq//AMzFH/Cx/wBqb/ojn7P/AP4ePV//AJmKAPoCivn/AP4WP+1N/wBEc/Z//wDDx6v/APMxR/wsf9qb/ojn7P8A/wCHj1f/AOZigD6Aor5//wCFj/tTf9Ec/Z//APDx6v8A/MxR/wALH/am/wCiOfs//wDh49X/APmYoA+gKK+f/wDhY/7U3/RHP2f/APw8er//ADMUf8LH/am/6I5+z/8A+Hj1f/5mKAPoCivn/wD4WP8AtTf9Ec/Z/wD/AA8er/8AzMUf8LH/AGpv+iOfs/8A/h49X/8AmYoA+gKK+f8A/hY/7U3/AERz9n//AMPHq/8A8zFH/Cx/2pv+iOfs/wD/AIePV/8A5mKAPoCivn//AIWP+1N/0Rz9n/8A8PHq/wD8zFH/AAsf9qb/AKI5+z//AOHj1f8A+ZigD6Aor5//AOFj/tTf9Ec/Z/8A/Dx6v/8AMxR/wsf9qb/ojn7P/wD4ePV//mYoA+gKK+f/APhY/wC1N/0Rz9n/AP8ADx6v/wDMxR/wsf8Aam/6I5+z/wD+Hj1f/wCZigD6Aor5/wD+Fj/tTf8ARHP2f/8Aw8er/wDzMUf8LH/am/6I5+z/AP8Ah49X/wDmYoA+gKK4n4Ja74+13wrcTfETwz4R8K61HdskFp4c8SXOvWslvsQrI089hZOshcyAxiJgAqneSxVe2oAKKKKACiiigAooooAKKKKACiiigAoozRnNABRRRmgAooozQAUUZooAKKKKACijNGaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDH8S6Zda1oGoWdnqVxo91dW8kMF9bxxyTWTspCyosqvGzISGAdWUkDKkZB/O34if8FAfiF4h+B+vaxH42m8FXXwttdJ8F+MdQ+1aZodhB4rutXjs7q4u72/0y/js7W3hhWbcLZ0aLVIztP7t0/SYHFZXhbxHb+MfDmn6tZrfRWuo26XMSXtlNY3CI6hgJIJkSWJwDykiK6nIIBBFZ8rcrryuV02PgD9nH9uP4g+Gv2eF+JvxC8fR694N8A/EG50LxPqkTWd9Z6noVzYwNa6it7FpenCaKG6uYHS5gtbeGS2kZ/3y7J2qp+0N4g+A3i/4weJPH3iaax+KWsfArS/FdjpwudNsdStjFe+Jrp7a1V7eWJ00+Oe3jkme3uAiqskqy7sN9b/ABJ8b/Dn43fGCP4R60vi3Vta0qSDWLu1sNN1qPR4iEaWKC/v7aNbEq6DcbO6mIlBTdE4ZM+m+MfGei/DbwnqHiDxJq2l6Doej273V/qWo3SWtnYwoMvLLLIQkaKASWYgAdTWjlo7advS1vzJjouXe7u/vTt9x8Z/8Ewv2vvE3jjVPiZZ/Ej4qeFvGnh/R59BTQPEtv4j0/VtNvptQe5t/s9tqdro+j211uuIY4VWK3kKzmSLznkBii818BfACH4O6L8Wvim2rf8ACVeM/Enxr0Xw5d3+veGfD89x9kXxhpkAH2iLT47hyI9gQSyusBhieFYnRWH3N8Ef2v8A4T/tL399a/Df4o/Dv4g3Wkokt7F4a8SWerSWaOSEaVbeRygYggFsAkHHStK/+PfhXTviLrHhT7ZfXHiHQbbS72+sbTS7u6kt4NRuZrW0lPlRMCjS28+9gSIUiaSXy4xvpf8AL1VEtla3fb89SYro9Ve7/RHgX7UXxA17V/Bfxc+KHhtVm/4UroOp23g1ms/tif22lrIL/UFiGfO+zqfsqKPmDx36EEOK+avDXxM0+/8AjX8TvEHhX4vf8L80u6b4R2Mfi3UrXQ9StZy/jK8imgiaxsobJmhWXIdYzNDI4bzFkRCv6Z+FvB+k+A/D1vpeh6Xp+j6Xa7vIs7C2S3t4gzFm2xoAoyzEnA5JJ6ml8MeIbbxj4c0/VrVL6O11K3S5ijvbKaxuER1DASQTIksTgHlJEV1OQQCCKUdHd+TfyZopOzXn+F07fgfnr+z5+0F8aPiT+3vDpetfFrxJY+AZvFOtxWltPoccekeKbeA3httPsJ28MJbEiOJZCYteu52itZiUV/MWDqP2GPiX8SPi3YfDuxtfGDeH/Dvhf4J+CvF76BoWgaXax61f3g1RJLdibdlt7N1s4lMNqkTKVj8qSFQ6SfRXg/8AYD+GHgb4pWPi7T9O8VNqWk6lc6xptjeeMtavtD0q7uFmWWa10ua7ewt223M4UxQJsErhNoJr2ry8H7oC1XMlC3Vrfs+4SktdN2reSTPzD+GP/BQ7xd/wrK81y1+NWofFLVJPg9rPjHx1o9iNAguPhRrtsli0Nmpg09msfnuL6MxapHdyKLEsVcxTB4fhL+3X8UJPgh8VpNa+M2kalouh634Qii+I2lappXiSx0TTNS1B7bUruDUI9D0zT544EicGR7OeK3kE3mSv5TxRfo94H+K/h/4h6/4q0vRdQ+2X3gnU10bWovIkj+xXbWsF2I8uoD5guoH3IWX58Z3BgOW+Ev7Wvgz43TP/AMIz/wAJdfWv9pNpUd9L4P1i00+4lVJ3MkN1NapBNbYt5ALmN2gLGNBIWliVyWqt3S/O9/midkvJ7/LqeG/8En9RtfEGr/tCahpvjrUPiZpeofEaGay8W3X2Jj4gi/4RzRFFwj2UEFpJHlSivBEqMEyMnLH7DAwWpWHNLvyaJSvr2SX3JImMbfff7xw6UUUUFBRRRQAUUUUAFFFFABRRRQAUUUGgBsP+qFOpEG1aWgD4n8C/sR/BLwL/AMFNviVrel/Bn4Z2Wp+HfAXhvxFp1xpvhDT0vLLUZNR8Q+beW7CHKXUnkxAyDDMYo8k7Rj5V/ZE/bO8caH4C+M/ijw74w8H65F/wpLWPG2nXuk32ia+2iarat9pitLufTvDukQJdRSahLJPZSPdsjz728oShp/1U8J/HPw3470+3utGutQ1O1udcv/DglttKu5EhvbGW5huklIjxCiS2k8fnSbYmcIquxkjDu8J/Gzw7408T2uiWdzfR6zeaJD4iWwvdMurG5jspnaNHkjnjRon3qymKQLIpB3IKdK0ZqL1VmlHbeM9V52tLyUL36rapJOo6k4/ag5f9uOEXFv8AvSi0/OTWr3+JPjf44+O/wlb4xSR/HzXryP4Z+EdG8e2yf8Irokf226u5b9Z9Nc/ZW26XtshsQZvFMhLXr7cHivjd+0j4gsP+CskNvofiPw2W0f4haB4bv/Dl5qOi3WuR2dxawRNfjT4/DrajBZBdUnjjvJtaRBJcMgyJltpP0O8M/HHw340+HGj+LdHuNR1bQdekjjsriz0q7neTzJPKDNEsRkRA33ndVVACzFVBNS6v8YNJ0XwppuszWfil7PVrZruCO38M6lcXaIsDTkS28cDTQvsUgRyormQiMKZGCGqc17WNW14xd2uj1jKzfomrdpN+vH7N+ylSb96UbJ9Vo43Xm276drXPmr9vBYPD37cv7OOtat8Xta+FukXU2r6NAY20eGy1K+lS2eKyMl9aTHzbpUeMIjq7CP8AdbXyx8v+Fv7a/jLxJ+0poGl/8Lot9S8a6x458S6B4n+FU8OjrF4G0SzTVTZ6q8UdsupwL/ommuZ7q4eCUX/yqBLDs/Q5W3KD688jFFYKnZNd7/jb/J+aT91xtd9HMrfd+Ul+qfZte8pdPyx+CX7a+s/ED4b6l4d1r4xw/GzxlofiHwI+qajp+peDfFngmP7T4p0+3d7CXTtPtrqGZlZiE1C3SSJ03W7yGEXJ0o/jjr37KvwQ/aSudB+MnizxJ4r8O/E/y9f0Vv8AhFk1HwVpd7q0Xm6ukc9vawwtJaSvIk+oytZqEEhXYjg/p5WD4R+J2h+OvEfijSdKvvtWoeDdRj0rWIvJkj+x3L2lveLHllAfMF1A+5CyjfjO4MBrvLmW9pXt2lKk/uXIo/8Ab2jTSDeHJ05lJeVoyj185Nr7mmr3/Pf9i/8Aa2/4Wp+1J8J9f8W/EXS9f07VtN8b+HPCWqavr/hm71TVSZvC8yWdzLoMz6XJe71uykVsQ5gijZ03hyfP/FHjHVviP+w5dz3XiKHwPa6b8Dvhb4ov9U8P+H9Hsntozqmpvcli1m8cdpEkIlWIKIoPLcoqK8of9V/EniS38K6ct1dR38sb3EFqFs7Ge8k3zSpEhKQo7hAzgu5GyNAzuyorML9VKV6Ps7dEk/Tnbv3bc7va9lfcqM7U5QevN17e+pafJcq7b+R+Yv7Yf/BQPxh8HPi74f8ADvhr4z6tc6TeeENI1PwR4mm1n4f2Oh/EG9nuLlZptSn1GS2kubfEdqGXQoo3RJnbO6SED6C/4KC/tFXHwo+NfgPw/wCIPjcv7O3gHWPD+r6lc+Lg2jQC+1W3lsUttO8/V7a4thuhnupvKVBNJ5GVYLHID9NeEfidofjrxH4o0nSr77VqHg3UY9K1iLyZI/sdy9pb3ix5ZQHzBdQPuQso34zuDAX/ABJ4kt/CunLdXUd/LG9xBahbOxnvJN80qRISkKO4QM4LuRsjQM7sqKzDOpFyiorq5NPupp8u1trpxto2lpbQiKald9or7rXet1raz0vZt35tT86vFv7U/wAffiH+z34o8VSePtQ+GOreB/2etF+J11pum+HNPa5u9dmj1p5I5TfQT+VaP9hj8yARiUEJsmh2yCX6P/bj+IGj+AfG37MviHxNrGlaDpEHxKC3OoajdR2lrA8/hvXIYlaSQhVMk0scagn5nkRRksAfefAnxK0X4lwapJol79uTRdTudGvT5Mkfk3du+yaP51G7a3G5cqexIq7c+JLe08TWektHftdX1vNdRuljO9qqRNErB51QxRuTKu1HdXkAkKKwjkK9E60Zz56cbKT5l6P3tH25dnslqlbQcnfmilZ8s4P1cFB381JSk763k03pc/OT4Aft2/E7xp/wUEj0Oy8fQeKvCuoa94q0e68ISeINL1XUPDr2CX7Wkd7a2fh+zl0ySV7PMKXOp3MksXmYWYo8sXnHgX9rS61TxRo/xWj+N2v/ABa8V6N+z94s1jX0sU0K0HgLVjJoM8unp5GnMlnJHIH3R6il3LEsG50cBg/6q+NviVovw6n0OPWb37G/iPU49G04eTJJ9ou5Ed0j+RTtysbnc2FG3k5Izd0jxJb63qOqWsMd+kmkXC2s7XFjPbxyO0UcoMLyIqTptkUF4i6Bw6Fg6Oq89LTWOrjFxv2bjJN+tqkW+ukdUm7nNabb6vmt5XVl6Xi0ul3K6bSt+U03x++Ifx//AGMP2grHxZ8ahrmg+B7jwtr1l4y8M6vo3iKzNm967Xhj1FPD+nWdxbQ/ZS7tHaP5UkEqNcNtkij940fVrHS/+CjHgvVIf2kte1yHxd8LIZPC6yzeGmtviK0FxcPIsLw6ehuDtkjuWFk8ZG4EYi+SvvCiorU1Koqkfdtfbu6c4Xv/ANvc1trp3TvdTG6puD1v+k4zX/pNu9no1bX4l/4J3f8ABQG7/aq134I6Svj3SPGGpXnwnuNW8exaclrILTxDG+jo0Vw0CBba6jNzc77UFCnmKWjA8s1zP7SfhyDw78d/HX7OlvJ9ls/2nPEWk+IrO2Cjy5dPdSvimKNRgqPs2mF3c5Hm6xH3fn9AKK6JTUqkZ2S1d7dU5ufL5RvyprW8Y2TTs0a8skutuV/ytLl5vN25tdNZN6q6f5Zfs0/HTxL43/4KRtpPh/xhoNtpvifW/F/hu9s7G80DU9f8GtBFcLA93b23hq1fTpnbS7Zoor3UbszxWqgxziFpIul+Mf7VHif4yfA1dW8WeIrXQ/D/AMGNb8GaV8Q3mS1trFvEkPi7TGv5p5HTdbw2ttarcAq8cZi1JXbcFUr+i3jLxbp/gHwhquu6vcfZNJ0Wzmv72fY0nkwRIXkfaoLNhVJwoJOOATWD8DfAPhjwB8PLVPCS3r6TrDHVhdX19dX95fvOA/nTXF073EjFSoBlYlUVEGFRVEUZOMoNaunyPvqpNxuuia5vNuKf2FZ6Rk5fzSv20XK5Jed1HpopS/m1/Ov4s/tT6tqH/BU7T5/Cvi3wnfWlp488O6HNokmq6JfaxJp91aW6f2lHYw+HWv4rAx6pMkV7LrSR77hlXImW2k6v9o79qj4hal8KvjL8MpPERu/E3wX8JeMda8YXV/oOn3Eeu2H2GRtBjuLea2Ns8VzDdCR/LjVHk0yeM/KZEP6M1g/Dn4naH8WdDutS8P339oWVlqd9o80nkyRbLqyupbS5jw6qTsnhlTcBtbblSykEulaMIwetr3b3d4xSfycW7bPmat1Lpz5KyrtaXjp00cm1/wBvRbXdcqld2afyP4++N/xC0fTv2oPGs3xA8Q2Phv4Kwva6J4d0Sw0m1DlvC+m37z3F3dWV0w8qe5aSNggSP94ZUuU2RJ4d8LP2zPi94o/Z5+NX2j9or4a2i+FbzwzdaL8QdR8baLJoTW11czJewW+ujw1a6e5cWzQo/wDZl0sc5kjMjOrJD+lfxM+I+i/B34ca/wCLvEd5/Z3h/wAL6dcatqd35LzfZraCNpZZNkas7bUVjtVSxxgAnitq3nW6gSSM7o5FDKcdQeRSeq07QXzi02/Pms736OzutDGEeSEE+l/+3rRUX9109Nm09G7n5k+C/j7pnxz+I/7M/j24/aE+Jvh7Q7jWfEfhiLWPENx4HdNd1ANbmOzS7sLKXTpxchHhT7LIHdYiqlZlc12XwV/bT8XeKf2q/CukSfGD+3vGOteP/Efh/wAVfCLyNHH/AAhmhWi6p9k1LyorZdUhyLTTm8+6uJIZvt/yKBLDs/QaiolG6fLpo/vaSv8Aem+6TtFpq7r7LXf8PiS+668m43aeiXxH+wT8Zvix4v8AGvwE1Txx8TNQ8XW/xk+E9/4t1HR/7E07T9N0u7t30MQva+TALoM0eoTeb5txIjyEtHHAu2Jen8WfHP4gWn7VF78E4fE14mt6x4itvFen6l9is/PtPB4gMl3EqtD5cgW+gNiXKNKkd/AxfzMSV9a157ouneB9K/aZ1swTXs3xE1LQ7e8uY7m7vLmO204StEn2dJGa3tleWMl0gCGRkV5AxCtVYnlqtQirX51be+sprTrypJPq4RktE2ipyXLKSXb5X935aP3enPyu1z83f2b/ANpf4jeG/wDgn3oem3vxk8F/AnxB4d8BeD5fDdlrutaXpWh3ugOLMSasmq3+nXbfbJyZbRka2eG1kMSeTKZIruXrYfj5eftefCK1g8N+MvHOvf2x8LviTbL4i1ex8J6jr1xPaXOhoEtLzSLeXT5LZvNePFtlZPl8zM0KGP8ATeuH+PH7RXhX9m3w5p2p+KptaEesX66Xp9ro+g3+uahf3Jilm8qG0sYZriQiKGaQ7IyFSN2OACanGWrKqp/bU1rrZzi4p67vW9tE5bKKdlvSrONeNaK+F81vJJtr5b3tstbvU+OPBv7Wuo/s+fsy/Cnxj4b+LF18bvBfjLwvc+GtKuJzo8scnikoj6XarPp9rAil5EuLEo+SHWBW/eF2bkvjD8avH/wD8O+Pl1L46eE/At14Y+JOmad4k16+v/C3hLWPGEQ8GaVNNFaT6hp0unz373D+YiXCRBo41i+028SAr9jWHxF+Gf7SHjv4dzXKeMIdc8rUtf8ADuk65pWueHmkWyltre4uLjTrqOBWaGS6tjEbuIspkEkPQuNzWf2vPh74f0DxNqF5r0kMfg/XYfDOq25027N7DqUzQrBbJaiLz5mm+0QGIxI4lWVGQspBrorVHOpOdrOd7LfT2kXe+7fM5Qb84xv7qRyYeKo00nqoxtfbW1vSyUU1trzvqfHn7OvxU0/4lftx/C3xlcfHD4gafb/ET4V282g6L4mXwvbz+NGt7u58+Em2sik7BWS5b+z5gpDq6N5JArxPVv8Agon8Rfhl8Ovgtotv4vl+HsmqfCfwrq/haK2m8C+HfDPiHVLhJRcxXyavNBcNaR+XbIYNFRHhSZv4ngUfq38SPidofwj8OQ6t4hvv7P0+fUbHSkl8mSbdc3t3FZ20eEVj8888SbsbV3ZYqoJG9WdFqEUktFNvy+KpNx/8qrTbRO2pUk3GfeSir9nGMY3+fLfo9bNtH5rfD3xC/wAN/B3xk0lvi1deN/FOlfHbQodS8J67Z6DctoEN74t07y737NHYxzo1xDKWimlLKpRJIPLdN44PxN+2T8Tv2jviH8Vvhm3xD8T6H4gmtvGmnat4TnvvAwj0/T7WG+FidK0+OSbxA1zIsVoWe9geKSK4uJEWMNbsv6yO4RCzdFGTWF8L/iXonxn+G2g+LvDV7/aXh3xPp8GqaZd+TJD9ptpoxJE+yRVddysDhlDDOCAeK5pYfmwf1ToocjfrTjBO3/bjklfq0mrG9Os41HVS/wCXnP8A+TOTjf52vt1abPz6tP2r9P8AC3wl+Bent+15L4T+FviDwbqepP8AE+S58Jg6hq1s9hFBov2mfT205fLjmuz5KwLdObU5kPlS7s3xn+278VPDnwb1Px9f2LeHfFl58KfhrqniO70zR9JtNU0SPUNX1aLUrlZdSMcEflQhnRb+U2tqxd3UAy7/ANF/GPxO0PwBrnhnTdWvvsl74y1NtH0ePyZJPtl0trcXZjyqkJ+4tZ33OVX93jO5lBi0T4T6D4d+Juv+MrWzkXxJ4mtLOw1C8kuppvMt7TzjbxIjuUiRGuJ22xqoZpWZssc121qvtHOTXxST+5ybXzUlF2tpFN3lqc1GPsqXsf7qS8rSjqv/AACW91dtK0VynwJ+yr+0x8WP2tvFXhHwzovxu1Cz8J69b+LL5PEdqPB2v+J57bT38Pi3Sa40sXWiw3Kz392p8uGQG2ZA8SzMsyeu3vxx8ReP/wDglb8EfHWtXGn6r4m8VXXw6u9UuLvS7WaK4mvNa0dZ5RC0ZiRz5rsjIimJ9rxlGRGX7BoojUUeXT4XB+vJKTf/AIEmk+nu3s9lcNNX3f4u9vlsuy2Pz7+Fnxm1i78I+H/h78PviJY+F/EGuftCeNvDniqWwgstS1TRLWW48T6nGvkTrIlvcOtvbzQvNGy4KOY5YyyPrfAD4wfGbTfFfwy1TXvijqnji38S+I/F/g6fQptB0uztbtNIGqfZL1ngt1n+3SNp6eaY5EtmErBLaLANfaXgT4laL8S4NUk0S9+3Joup3OjXp8mSPybu3fZNH86jdtbjcuVPYkVd1jxJb6FfaZbzR38kmrXJtIDb2M9xHG4iklzK8aMsEe2Jh5kpRC5RN2+RFbCXv0/desoqz9YqzXS3Vet7vcqtLnrOpa1pNtf9vzlJPbuov/D52X5baX+3L4s8f/s4eMHt/jFY/GDUdW+A3ibxT478O3umaDeW3wx12C0tTDp0ltb2iPEjyXF9C1nqhuJHFkQSfLm39p8VfiPr37P/AMV/2ydZ8P8Axm163+Ilh4DTxb4c8GT22husscejKI9QhtzYi6mitpojED5jRZysodsGv0GsPidoep/E7VPBsF95niTRdMtNYvLPyZB5NrdS3MUEm8rsbe9ncDarFh5eSAGUneq6kuZR5VZrm9NXJrftdJXbdo2ur6VCahKCmr8ru77u6pvWytqot6JJ817d/gP42/t9X3xc0H4rX3wr+Pvw08OeFvDejeELqx8X32vaZp+gRTXOo36ajHFq09le2vmyxW8cCs0Fykcy7NivvxxOif8ABRmx8YaL8J4bz9qDWvhb4F8VWXi0al418Y3Xgf8AtLVL3TrzSUt4bK+topNEdcXNwA0UU2+JZVYLMvmRfplWDqXwx0PWPiXo/jC4sfM8RaDp15pVhd+dIvkW13JbSXEewNsbe9nbHcyll8vCkBmBn7T7O/ybjZW22ettLb6u6eVPRRT1tp66Na+d7Nv/AIFvzL8X/wDBRb4lJ8FbDXPFPxm/4VX4xt/hDo/izwZoP9n6Pb/8Lc16cXxktvs97ay3E/mNb2CfZtOeCVPt/XMkJX3b4oD4n/tH+HP2qrW4+I3ibw3pHguzn0LSPDWg6PpbtI9x4V069lE81xazyzET3UgjWIxkb5AxlBiEX25Wb4x8W6f4A8I6pr2rXH2TSdFs5r+9n8tpPJgiQvI+1QWbCqThQSccAmsscoVKNaM/dUozV3a0eZ3v0WiuuiW8eXZ74abjWhOKu046Ldtcv6xfm+Z8zkfmD8Y/2ydd+H/7M3wN0/4XftJNrDeIvCmo6lbeI77xX4Z05PENxamyiXSLRIvDGpfb76OSYxpZ20MM52MrtNIRtq/tb/8ABR/4seG7PwTqHhz4jWfhnxEPhl4c8Y3nhu41zSrWTxRcXgmkuWsdIfw/fX17FGsDm4aK/tEhj5LQqjz1+p+ga7a+J9CstSsZfPsdQgS5t5NpXzI3UMrYYAjIIOCAazL/AOI2n6b4xt9Dkt9ea9uXjRJItEvZbMGSO4kXddLEYEAW2kDFnARmhVtrTwrJ3zqP20pVI6ufM0/Jz93/AMmSfflTeu3BTpr2MY05aKDV158tpfLldu3M7WR8S/EX4uab4U+JX7RmhWuqeG5PFX/C7Ph7evo95Ha3l0un3P8AwiNp9r+yzByELiZI5wnySxbo3WSMFfN9U/aS8SfFPxh8cvhLqf7QGr+OPFWqeHvF0ul2Pw/1vwbrmjaJawmXybW6tV05NYsr6OPbbsk4uYCW/wCPlpnCR/qBWH8NPiVovxg8C6b4l8O3v9o6Jq0ZmtLnyZIfNUMVztkVWHII5A6V59en7XDPDSe8XG/rCEE7eXLf1b2PRhiOWcZpfDKL+5ptfP8ALufmX8Y/2ydd+H/7M3wN0/4XftJNrDeIvCmo6lbeI77xX4Z05PENxamyiXSLRIvDGpfb76OSYxpZ20MM52MrtNIRt+q/ix8Ydb8V/wDBOv4T+MtQTS5td8T6n8PLvUBcabBcQebe63o4nKwzI6Iw85yjAb4mCujK6Kw+h7D4naHqfxO1TwbBfeZ4k0XTLTWLyz8mQeTa3UtzFBJvK7G3vZ3A2qxYeXkgBlJ5jx5b+DvjlDpek69pPia+t9N1RtctopNK1Wzg+1aReRlHkKoiSAXAjlhjkLJciMSxLMib17pYhe09rNbzjN36RjOUpJd/ddntflTe7a4qNGVPkivsK1u7ai43+6630k7K2h8TfswftxfEb4i/8FI9N8OD4jQeIPBer+JvE2h6h4Wk8QaVquoeGPsQvjbLe2tn4fs5dMkdrMtClzqdy8sQkwsxR5YvVvio/wDwiP8AwV0064u/i9rnhW68SfDsLoHhZ/7HjtfFE1tdXDTWkPn2bXUxQOk7JBOJBuBJEfy19Jal+0L4X0L4f3vijU5ta0fRdPmtYJ5tS0K/spFe58jyQIpYVkbLXMSEqpCPvRirRyKvbVx1KT/dq7Tgnr1fNCcb/wDk1+t7W6mikmqltVNprsrSjK3p7vlvdH5c6z+31fftafsD3eiweOtL8Z6tqH7MnibVPHcGmRW0ptvEUdjpyNDcGBNtvdIbm5D2qlCnmqWjA8s1pftrf8FL/EHhT426LY+Bficmi+G9W8J6TqfgTUNP1/wPb+FvF99NcXUdwL651q5S6urVDFbIy6P+9jWVyWLyQgfppVCDxJb3Pie60hY78XVnbQ3ckjWM62rJK0qqEuCghkkBibdGjl0BjLKokjLdTqXnGVlo22ls7ym7eiUklvZR9LFS8qfKul7PtzezX5w1ta7l8n+fP7If7eHxA+Lf/BQdvA+teM9Qt9Sg8QeIbLX/AAXrGp+DIbCw061e6FjJptlbXB8R/aCsVpI0l6hheKW4kCorQEforRWHH8StFl+Jcvg9b3PiKHTE1l7TyZPltHleFZN+3ZzIjDbu3cZxjBrFS92FPra3m2k239yb66JsTXvSqdL39LtJeW7t0V2kkblFFFAwooooAKKKKACiiigAooooAr3KM0DKvVgcV+aN1/wS48SfEL9lzWtJ8YfDnT9e8TaR+znoHhLwtY6lfWl3bWHiq1g1gSNFG0pt47uF57QR3pA2CVxHMFaWv0rvbxLG0muJm2xwoXc46ADJr5g+Dn/BQXXPFGreG9U8c+BdF8C/D3x94dvvFHhjxDF4qOozGzto47jGo2zWkC2cz2knnhYZrpQIpVZwVBYp1FG/ybb6W2LjUlGNl3X4M4f4jf8ABOqbULv9qTxJ4V8C+EfDvxJ+JWgrp3hnxTDbWtrqU8sulJFcD7ZEDcQiS5XDsSCzfP8ANgGvO5P2VNU8H+F/iF4k8L/AG++Cvw9juvAt+/gCw0/S5rvVrjSNfN/qepRWOhz3cTyG0NuihCbm4NmEMeBHu+hP+Hht3F8LdRvrr4f31l44jstEvNO8PXGpCOG6Ou6hPZaRDPcmINbysYke5UwOLfeyobgplvQf2aPj74k+KGq+NPD3jjwjpng3xh4EvoLe9tNK1xta068guLdLiC5t7l7a1kZWDOjCS3jKyQyAblwxnZuXb7tNfmRHRWX5662Z+enwA/Z++JXxu8P/ABChtbn4gN4uk+E2t+Ez/wAJLdfEKJfEN/cvZMl7DceJLK2tdPNwYZVa0sgfI3K3mTJjyfT/AAV+w1ryeKvHWreB/wBn2w+B/hfxBd/DZrLwzC+h2Uzvo/ima/1O5li024ltlK2zo4IlZ5VQDG/92PQ/gL/wVd1T44fs/al4+0/w/wDB/Wlf+ybHSdF8K/FP+3dTh1XVLiK3s7DVlGmxR6Y2+VfNYPcFNku1JNo3d/4f/aj+M3iiy8WaPb/Cz4aWPjzwHqcVvrdjqXxIu4NFNhNarcwXtrfR6NJNKGy8bJLaQbGhkwzAAtXtHpL0eu29/wAw1u092/xVv8j4Q/ZK8B/CS/8A+Cp2l65dQ/DHXPFGqeO/Ekml6PpmraDc+MvDd+f7SlNzrGnpoq6rEkaxzIZbjWLlUmltmESBo1g+nv2Pv+CfmsaJqngvUPiJ4P0/+1PBPwc8HaBoc+oT2+oRaF4hsf7V+1TQxK7olzAJ7YLdKuQsrrFJhpQfevhL8efiJ8b/ANjjwz8QtD8B+EYPGHiiyi1K10DUvFt1a6Z9mlfMchv1015xvtykqq1krAuEYIQWHntz/wAFAPFmnfs9eJvGOqeHfgv4TvvBPi2bwvrVz4o+KculeEwY9qtLbaw2lM0rCeRbZo5LWHbPHPHuJjG8U2k4PeyT/wA1943Uvd20bX4anzb8MP2EfiF4X+F95aeGfgTp/gDxVp/we1nwp4uv75PDt1B8XPEM6WIgumVLidb795b30gm1iOIk3wDoRLOFb8Jv+CcnjT4efBX4qaTZ/CnWH8F+KNb8IaxF4F1UeD9MvvEVpYag76taT2uiR2ujJJNCiYWR3S4j8lJrgZaGD6g0b9uHx58RvAnwzHg34W6DfePviFpGoa/LpOs+MJdN0iwsLOWKF549QjsJ5LhZpLm2a3xaoJIpvMYxYCta+En7fmsfFX4nfCHTf+Fctovh34raPe3Y1G916Nr7Tb+zgWW5tPssUTrJHG7NCZWnjbzI3xEU2uw5O1nbt9zI3Sttuu+qS1Oe/YM/Z/vPglafFDS7r4Ix+A/BPxQ8am807wvarows9A0s+H7C3f7Zb21w1uqvcWk0TRW3n5eZThoy8i89+zd/wT+m/Z8+Fn7N2m+G/hz4Z8IX3hXxlca94zj0e3sbP72h61ZLcTGEgXD77q1jypdwGH8KsV+3sZ/z1pop8z5ubrZL5JJFdLeTX3kg6UUUUgCiiigAooooAKKKKACiiigAooooAKKKKAEX7tLTYQRHzz1p1AHxj8M/gB8RIfEHgfTr7wPqmmWvgf45+K/Fs+pT6hpz2uoaTqcPiWS3uoBHcvNgNqVpE8csccod2IQopeuL/Zg/4J6R/Dn4q/AvVPHn7P8A4c8Uaha/CDTPB+t+IJLPQ72bwpqlpCY5RcPNKJpEkhka3WS0E+QpVgsZDV7x8HP+Ck3hP4qeHviFqUvhf4o6fF8PNfudFuUh+HniO9lvUjuTbpLAiaeHndiNzwwLK8K/M+F+at2T/gol8Jbb4a2fiq61zXdPsL/XZPC9vZXvhTV7TWZNVS3e5+wDTZLVb37S8MZeOIw75d0YjDmRAypyUlCqtVaMl5pwlBN9rqr5Wk0tNjXEVJSdSMtG24vycakqrS9HfuuVddz4qvP+CdGoab+w74J+G1p+zRHosGg+NJ5PFtr4d8O/D/UL/wARxx2l5HbavZrrBmsCjO9sjPcpFerHuVUC5zk/E7/gmN8SfF/7LfwV+HfiL4Zx+Jm8JaR4l0/dp2neBdUXQ76fU0OnGe41rT3S3037LksdJslmQIoFsuyOFfuTwR+3r4V8TfE7XPC9/a6npWoW/iW28O6JbDT724vtX83RtP1Vrma0W386xihXUEjledQkJVPMeNpFQUvA3/BSH4feKrfwbaN/wlOqa94u0HStf8rwr4L8ReItNsoNRDfZ3lvYdNCQRuUkIa6W3fYhd0jGcJ0OaHI9b8vq26bUV6uN5W3TWySsTGThJVV0Tt2s5c1/S6tf16nKfG/9nbxv41/4JmeAfA9xoMnirxDodp4UbxV4akvbdn8S21jNZSanppkmkW2mM8UM8ZWaVYZd213COzV87+Nf+Ce914o+COuL/wAM8+JNJ8O/8LIHinwP8LrDS/BWqaf4djXRIrKQ6lpl7frpbWdxdLdTNDY3a3ANwJElgleR0+qvg5/wUm8J/FTw98QtSl8L/FHT4vh5r9zotykPw88R3st6kdybdJYETTw87sRueGBZXhX5nwvzV0tr+3p8PdR+FreMLOH4kalpcWrPodzaWPw38R3WsWF4iCRo7nTI7Fr63Gwq2+aBEIkjIYh03aSre2c8Qv8Al6lP5SdOSfdK8Yqz2baspNmdGn7CMaK+xeGveKkmu10ru61aW7ij8+v2kf8AgnP8W/j5pHhaWT4HaB4c8UaL4F0q28PHwjoHgbTdF8M31vc3k09tNcXiXuq2bKn2c28elTtCkrlftUeXuV+iPEn7GvjYft0eMPiHrHha68eeAdZ8aw3Nj4de709f7IY+HdKs4/E1mJJIx9pgntrm2ZZ3MiRt5tsqNvFz9Kar+1V4Zuf2UNc+Luh3sF34b0nQ7/Wll1SC901UFokplS5jNs93blHhdJE+zPNGUYeUzDYcP/huLwr4Wg+Kmo+NJrTwj4b+F/ibTfDc+rT3DzQ3b31jpdzDIVEYMQMupxw4O4DZvLKCQpKPM5Ra/muv8U4X3/vcqXVXuveSauinFKcPtRUU/KKW3/gSv0d7NWbR8V/s3fsDeNPhl4J1Twj4V+Atr4H8M2Ws+Cry01jXNB8JaR4y1lLDxJY3l0L680K/ltb9IbaGaRXkt7WXhVxdSu8h+hv+Ci9nqnhP4q+AtW8B3Gmw/Ef4hWeofDlYFuYY9QlsbxVkGoxxOyvcJpk6JcOq5McU1wwHzYPdeDf+CnXwZ8d+LdL0Gx17xJHrGqasugta3/gvW9PfStQcAw2mofaLRBp00wZTCl55LThlMYcEE73hb9vH4Y+NfjB/wg2m6zrEmtS315pdrczeG9Ut9G1G9tBIbm0tdUkt1sbm4i8mffFDO7r9nmBXMUgVVJc1NKesU5Sb7pxXOr9nBpO3SV+ooycHLl0f4J7RdvKUL2fWL7afL/hH/gnXrvwa/af1LVrXwS3ir4S2fiazttB8Jx3GnRR6DHH4a0iwg8SWSvJGPtME1pcWzrOxkWNvNtlRvMFzwP7N37A3jT4ZeCdU8I+FfgLa+B/DNlrPgq8tNY1zQfCWkeMtZSw8SWN5dC+vNCv5bW/SG2hmkV5Le1l4VcXUrvIfqb4P/wDBTLw38UvjN4Q8F/2Hr7SeL/BGn+MbfWtL0LW77RALsOwj+2Pp0UUcARNwuLgwZZtjJHIClZPxR/4LD/Cfwd8LNT8R6AvjLxRNZrZ3NpZp4L161/tuzuLyG2N9YSNYEXtqpmRvPtRLETJAu8efEWunVlTnGru4vr1dNuLv1bUovfXt7vKk6kWv3bVuXl+WzWvmrXtv/iuzxvVP2Q/DP7Mnwt+P2vP8J/A/wr1rw74z/wCE98MePZV0TTdP15kvBd2Nt9ojlFzDh2ktHW5iiXF24jMgc1e1D9iLXvi/o7eLvEngfxRM3xY8BeNrjxlZaVLplr4gt7rWZtDOn6WBeSi3a5hsLL7NulY24a0IdgrgN9YJ+2p8OV0PxHf3WratpcfhHw1beL9ag1Pw9qOn3mmaZcG6EM0ttPAkyuTZ3OYSnmr5fzINy5yfhH+25onxa/am+IPwrg0DxhZ6l4FlgQajP4b1WPTb9ZLeOZz9rktEtYyDJtRfPYyqC6ZXOMadP2UY0V0jyL05OSTfm0otvRXivNFOo1U9t3k5O/eXvR+S5pNK+qn6HxPof/BPjUtW+A9lZ69+yL4D1DRfBPxE0/V9O8MDwb4N0bX/ABNpn2R7e6nvIrXUJdHmuvniLOstmkwhYLbQhY1bsP2xP2JPid41fxne+Hfh34b8UeHbr4o2PiNfB+taNp+vWGvaWnhCx0xd2mzarp1rL9nvoiRHcXcQU24lRZCkQb691b9tP4e6X8TvEng2K+8Rax4m8HxPLrdjonhXVdYbSsWkd4qzNa20ipJLBKrQxk752DpEJHR1XCsf2/PA/izwhqWpaHJrFrc6LreiaNf2Hi3w3rfha6tzql9DaW7/AGe7sBcMJGkYROIfJeSMo0sSiSSO4K91H/l44v7/AGcY28m6cUn3crb6TGTjJd7OH3uUn8/efqrXTPjS3/4JS654+/Z3+Ilj4m+G/wDbGq/8KdXSPBGla4unwW2i+Ift3iO4SK0sY9QvbSya1W8sY7WYXEht4HEcdwv75R9F/wDBUv8AZy1z9o34O/D/AEG38C33j3RrHX1utfsdM0fwnq2rQRLYXSRy20fiZH04YuGiEjY87YxCcF69S8Lft4/DHxr8YP8AhBtN1nWJNalvrzS7W5m8N6pb6NqN7aCQ3Npa6pJbrY3NxF5M++KGd3X7PMCuYpAvC/CX/gpv4Z+Jfxh8J+D20PxCz+LPA+n+M4NZ0nQNc1DRQLoOwj+1tp0UaQhEyJ5zDlm8to0kylFaoqtlLaTuu1/en6aqEn52tvYdpR963wKz76qFPVb7xXo3J7beF+C/2K/jT8AP2UPhnH4P8N2LfE6w0rXvh5ra2+p2EY0zR7+9uJbG+SRI7aCWOwdbeRIYoodsU86xQI2Iat6L+yF48+DHivxZ8N/Bvwnvh4D1D4oeD/Fuk+IIdV0u30iz0fTINAgmhEJuPthukOmzNs+zLGyAkSlysbfU97+3V8K9P+GWl+MJPFDf8I7rfg+fx7Y3K6XeO1zosK27SXIiWIyZAurfEJXzWMgCoSCB03wR+P2hftA6JeahoNh42sLexnFvIniXwdq/hmdm2hspFqVtbySJg/fRWXORnIIrWMpwrOqlZ3u100qc1muyqRfndyTfRZWSpqn0tZd9Y2v5tw5V2sk0lq38DaH/AME5r64+L3xe0HS/2e9IXwp8Q9K8UG+8WfEDwv4Sk1m5v72R5YIrXU9MvZLuaxedkkWLULIzoF3Pc5SOBez+HfwG8Y/BLUPgj4g8D/s1al4XsdH8A+IfCGr+E9Ku/DemnRNTvrnSJFvrjyb37O1rK1lPI8ls09xhlJgLkqPsz4n/ABbtfhn4l8EadcGy3eNNbfRoRNJOsrOun3l6RCsUEokk22jfLI0Kbd5EhcJFLznwV/bJ8D/HvxxeeG9EXxtpuvWdkdRNl4m8Ea34YluLYSLG0sA1K0t/PVXdFYxb9hkTdjcueWNFWdOO7jy+fKo1E/8AyWpK/onpa5tUm4yVSWmrl5e84pf+TQSXW91qnY+GPEX7A/i7wxr/AMD9ds/gHH4++InhvwT4U8N6tdeK9D8JeIPCmh/YiTM1vPPf2+r2d7Czu32i1E9uV2kW08m1o/TfAn/BOjUPBvxD8FePLXwBoi/EO2+L/jPXNV129ngubyDQL9fEf2OITGRnWzkku9PkazgIAkmaRohJ5rD6F0b9tzw23xq8VeBdXhuNP1jR/FsXhTSYbSG41K41lm0iw1OS6aKCFmtreIX6xyTSfuY8IXkQyqlYFr/wU4+FekeCfB2p+INauIJ/FXhzT/E88miaFrOtaXotleA+TdXl5HYqtjauyy7J79LUMsMjFUEbheipKVZSa+227rf96uay9Urpb23CzhBxa0SV79lGUE3/AOBPX+ZLtY+Hv2eP+CY/xQ8F/C74wCx+GeoeEdQ8f/BLWvCl3p9zaeB9E/tLxLNHF5Ygh8PQQwm0YvMsE99NJKv70OtuCGn7j49/sDfFb/hXs2lwfDrw/wDFLVNM8dpr2v6t4i0XStfHxW0+TT7uG0+3afNqmmQS3GnSTRR+TLNb2sYgimtY8gW8f0f4z/4KeaP8O/h54a8Rat4P8VXEHiL4j6x4AEOhaTqXiCWBdPv7+0N5ssbOZ2aT7EHWDaGPmsFZ/LYnvdZ/b7+Fvh74rw+DLzWNeh1h72z0ua4/4RXVm0nTr27WNrazu9RFsbK0upBPBtgnmjlJuIRtzIgaeb2q5IrZ8llvdyVW3zc1to9Fq46TUvCTjPdOUn93spa7WXs2vW7ejR8T6f8A8EqvEPjT4E+NINf+Htxea5a/Cy0sPAtrqT2NgfDfiBNU8QXSpp9vBqN5Bpz2iXdjHazR3TtbwMscdwMSqPR/jD+wBrHwwHxI/wCFV/DW2j0O81/4e+LLbR9GubK0l8Q3ulaybvVZB580cZvZIIoN01zJH57hd0rEEj174bf8FL/DvxP0HxddW+g+INBl8I+N7fwfI/iHQdb0qxu/P1aHTYpIrmTTtjzM0oIgQNsYoJZIY2My9FqP/BSj4M6N4m1zTb/xVfadH4eXUjc6reeHdTttEnfTkke+httTe3FldzQLDOXht5pJF8iYbcxOFftnNRxENE7TTXk41L+ivFu+3XUn2T59VrF8nzUVC3q1F2tu22tGfL/x+/ZB8UftB+APFmveMfgf4w1bVNU+J6+MvD/hWOLwh4jhjjHh60sUOsWeqXsdlNDvjlSWK1uVnVuYLhBi4rd+Bv7GGoeGf2hfhf488RfszfDax8RyfDpNEfUNB0PRLSy8AapbyztEGha6eaGJ7eVYQLGS78vDR7zHiQ+veEf+Cp3gPxH44+IFve6b4u8O+GPAmi6HqZ1HWvC+s6ZqeqT6pd3trFaQaTc2UV7K5ktY1iMKSGd7gIi7k+ZPiV/wVU+Hvgvwn4V1rS9L8feIbXXvF6+ENQs4PA+vrq+gz/Zjct9o04WDXkcnlmF0ikhjaVJldCyjJxnTXuweluVLyvD2EfTSa1dkpNO6RUm2pX10bfpdVn66LbXS6tc+dv8Agl7+xR8QP2Rfi9qXjy6+E/iDw/BdfD6Wx1nR4rLwJo9zrOvR3FrNstINBjtrZrdh56281/ctKP3quLYEPP8AR/8AwUm+CWtfGfwz8LbzTPCvjrxda+DvGi63quk+DvFC+G9fktm0nU7QG1vft1jsZZruEuBdxloxIPnBKN1f7WP7bOi/smaR4Bv9T8P+MNatfHWvQ6Mi6R4b1XUrmyR4ZJTK1vaWk8u8bABCyo7ZbHKMBoa1+234D8NfFbTvBupx+PtL1TVrq2sbW8vPAGvW+iy3FyqtBD/ab2YsVdy6oFacHzD5ZxJ8lbSm6qVOK+GXLZLXmvz2s/8AGrWXktUyItU3Oo/txbb6crj7Nu/Syi/R6vRo8Vl0vx18N/iB8GPHnh34G/GXWtK8M+GvE3hrUPDup+L9G1XxVpzXt5pU9vPPd3+tPFcxsLCbkX0sih4gVABC9N4h/ZcvPiT/AMFBvhp8Vrjwrqmk6FF4SurvXrW71C3/ANG12BoY9J+0QQzOktxBbX+soJIjJGCRl2KQEdxpn/BQH4U614xuNEs9e1a7ns9e/wCEXub2Hw3qkmlWmq/bGsvsMt+Lf7JHcfaFCeW8ob95C2NssbPhfG3/AIKJeEfhLqPjC1s0m8QXXgfQtb1TUbK1sNUa7luNNj06R4LdYrKWOdANSgEsqSkwswGyTbOYIliFBKs9VBTl1dlaUpPztz899WnytdE9IUpTf1aK1do20XXReXwtW2smn1Oe/a9/Y/8AiJ8R/hR4g0/Rfiv8SPEd5r3ivw5qFjY3UHhyCLwlBbeIbG8nuLJhp0Rka3t4pGVbx7neIgCsjHDfKvx6/wCCf3xTv/BXgWxh+B/gfxrB4ZGv6b4jsdT8M6V4stvE+q3M1m8fiyO2v/EGmqLm5ihlDz3NxJdwvJJGEeNvPP1dY/8ABUzwpf8Ain4P6evg/wCKCx/FqyurmOVvAPiNZNLeHyQFeI6cHMbPKczP5caxqJSfLcNXpPh/9tTwH4g+Mv8AwgR/4TbSfETS3UNu2t+B9c0bTr97ZWeZba/u7SK0uSER5B5Mz740Z13KCwUqXJek+jlf5RSevVJbu+9m23GDioYjmgpR2bT7b7el+i0e62ck/jT4L/sK+Ivgz+2N4N8RaP8ABbWPE17cnTF8T+O/iRoXhHUrvTxb6PDaNcaXqdrqZ1i2nPlbJY54r2J5N3lNBGXmk5v4af8ABPn4ufB/9mjw9peqfD28+IHjfR7PwBq9vrI1HSF1awtdH1LTbi+8KI7zwwhITbTTW7xlIJt7efKZ18+4+vbb/gqv8EbvR7i+j1/xU1usdtPYj/hBde83xDDcXMdrDNpUf2LfqkLTTQqJLFZ0xPExYLIhOprf/BRn4a+HrPQXubT4sG88SQXV1Y6XD8KPFU+reRbSRxTTS2MenNdQRB5olEk0SK+8bC1bRqyUlOO/Mmn5w1SXTTfTW2nwtpzFKCdPySa+/f1v18mveSZ85fEr9kP40ftGQXmo2On658HdX8QfFyfxbb3Q1PT7q/0LTm8Ey6ZHJP5Msi7muykEqWsplQSO0My7UuV4zxz+w9qkHxN+Gfi3wj+yXp9t4o0vSdI0a40nxBoPgzXvBfheO2vp5JZLKdtRg1a0uVaWSdbm3EyMkitJZyXGRF9t61+234D8NfFbTvBupx+PtL1TVrq2sbW8vPAGvW+iy3FyqtBD/ab2YsVdy6oFacHzD5ZxJ8lY37TH7THjr4a/Hb4f/Dv4e+BfCXjDXfHGlaxrDzeIvFtx4ftLCHTnsEYBoNOvnkdzfLgbEAEZ5OQKinJxcOVbcqXm6cLWfpHV9r3Vr6ud6r5W9eVrptKTlf77peltWfBvij/gnJ8aNV8d/F9Zvh3Yf29rGneOf7N8baHoGk6fqHi86na6gmn2Woa3J4ha+uLdRcWyrDJpcMcMtrbgMkcCyN9r/st/sc6f+zH+1f4+1fwv4P03wz4S8UeDvDsE13atGZta1m3u9Ya8uLttxnuLox3FoZLqfc8pYZkdlbDPAP8AwUb0O98GWereNrCz8CzWOk+J73xLYSXV1qFxpU2gXtvZXy23k2m28g8ybKybopZA0HlwSGSQQ3bL/gpP8PfFT6lZ6KPFVnrGj3uh299aeLvBXiPwqIY9V1OPT7dw15pqs7PI7iNVXa7xkO8UYeWOqfMowpQ1ulFW6q7S23V726aXQ6l5qXOt5N+kuaDa16pwS1196Se+nzP4v/4J+3Hhj4OfHzwn4Z/Zv0S0vPFfjy21R9X0nQfBt1J4x0GbVIbqSG0i1JngNzaxGbampwJCr/NEXYgje/Yr/YX8ffA/w18NdNm8K3Gi6L4a+M2oeLorG4m0OCbSdEuPC97axtJBpUVvYRy/bLkJJBZwlVleRg0yZuZPpK7/AOCiHwjtbfxVOviHVrq18FXkmmatdWnhrVLq2i1BL77AdOiljtmS4vzclUWzhZ7hxJGyxskiM0ln+358OdU+Gs3iqxT4ialY2erHQ72wsPhx4iu9b0y8EQm8u60uOxa+tgYmjkDzQIjLLEQxEiFs8I1Qp8tPVKMY3/ur2aT+bjHybk+rCtepKXNu5Tv6yjNSXyU5b7WV9EeJfth/sgeOPiX+2ZffEC38Nt46+H9joXhe11DwRcXFitj42NrqGtSTIyzOh+0WX2y0uoVuHW1lcFXDSCOW3y/gB8Cvit4e+JPgPw3qfwz1bS9C8CfFTxj4tvPE1zrOltY6jZ6qdeks2tIYbmS5Yj+0IFlE8UDIzDasi7mT3fxN/wAFFvhb4f8ABPhfWob/AMU61/wmlreXejafpHg3WtS1OWO0kWG5aeytrSS5tFhmdIpWuIoxFI4R8NxXZfst/HZf2kv2YPAPxKk01dBj8ceHLHxC1i119oXTxc26TmMy7U37N+N+1c4zgdKUoXpTg/hV1Lycv1XI/S1npyoK03Vd39rltbtGLgreqk/V7HwjpP8AwS48UfD79mXw/b+Gfh7Z2PxG1b9nXxN4N8Xaimo2rapqfiG5tdISxtbm9eYvOEeC7SFjI0FuiBEaOPYp6X9or/gm9eeFrf4q6f8ADn4U6Xd+F/HGgeCYdUtLGw8P6jqHiO7tNZ1GXVrgx63vs7rUhazW7/atSD+Y2D5jyJ8v0n4Q/wCClfwb8baVruoWviTV7PTfD/h+68Vy3uqeFtW0u01DSLYKZ9QsJrm2jj1C2RXjYy2bTLtmiOcSIWfpv/BSL4O6roHibUo/EesQ2/hWOymuUufC+rW9xqEV7O9vYy6fDJbLLqUVzMjRwSWSzpM2BGXJGdqtSVTVrTfTtzylb/DzNq3lbdM0nUk1yNdX63bg/vXLG3VKT7o+Wf2cv+CaXiXS/hF4G8D+KvBFxD4Fs/jHe+KLvQru60a1WHw9P4bu4Eiu7bSI7bTyr3syxXFnbQtC7STBvtMTPPL7h8Mv2KG0/wD4J0fEn4N33g3w5Y2OtX/jKDQ/D8sFs2lwWV3q2oT6WqxJuijiEUts6oAPKAUbVZcDsbX/AIKWfB29j0mOPXfEbatrlzd2dpoP/CHa0PEDT2hthcxPpZtPtsbxpeW0rK8KkQSib/UhpB0Ph/8AbT8C+IvjL/wgKp4603xJJLdQWw1fwJruk2OpSWys8yWt7dWcdrdMER3UQSuXRGdNygmssVH21B0J6RlHl06qMVG/qkld9L9jOlU9nOM47xlf589R2+cpyVv7qW6d/j7xF8Lbj9n34UfBWD4b/DHSfgl8SvGmkX3w1ufCEJ0W1v0iu0R5dXjisLh4bpLK6jF45jkZ1huZ3ZVdmWq2tf8ABOTVfAnxrutL8L/BOC41Sz8beGNR8E/FWF9GVPBHhrT49KS50sSSXC6nDujs9Qj+z21u8Ev2/LOBLMV+m/EP/BS74f2Xw+8d6tp+m/EaTVvA3hy58SvousfD7xFoN5qNvD8pa3jvLBJJ0EjRo7wJKIhIrOApBOLY/wDBUzwpf+Kfg/p6+D/igsfxasrq5jlbwD4jWTS3h8kBXiOnBzGzynMz+XGsaiUny3DVpHEN1/bR+K8XZbWc3KKS/wAcJ6p3XNJNpPXH2ap01SeyTWu90ldv/t2UNJJp2Ts3qvN/A3/BN82HxK8D+MtV+Hmj33iv/hb3jHU/EWr38ttfXi+F9QXxGttbCSR3YWUv2ywY2UR2B5md4g/mtXkOp/8ABO7xh4W/Ye8EeDvCH7OvgzSbvwT41mufFfhi+8NaBrOlfEWEWt3b2+pfYk1ewt7xUaa3kRdQureWMwhvKZoo1b7m8Kft4fDDxr8YR4G0/WtYk1qW+u9KtrqXw1qlvo2o3toJDc2lrqklutjc3EXkz74oZ3dTbzArmKTbm+Bv+CgXw/8AjGfBtx4I1Ntc0fxjrCaTZ6ndaXqmn2eoF9NvL8fYJ3szBeOq2brIBIiRFZVeRZkWCTCdnDm6JLbsmmtul46dNXbXbpqTlKrKctH71/K/PKX3JyX+GKT0Tv8AG/w+/wCCdPxL8O3/AId1rUfBepeIvB+h+HtAg1X4bammj2Nj4h8nWvEFzJYx2yX91DANMS/s5rO3kvpLMpGkTlpEjkttXx38EPG1l4v1HwPYaDpV/wCOtW8GfGXVLHRL37BqEc8GreKNPn05pYpy9qVuIm+RLoeUWDLKMLIo+gfDP/BUPRdQt/2ff7S8G+MLeb48+Gh4hjGkaHquuxaIWht5EheW0snRxunIeRzEI1QSOFVgR6f4Z/bO8DeKfjUvw+RfHGmeJZprm3tRrPgbXNH0/UZLcM0q2t9d2kVpckIjuBDM+9EZ13KCw6ajl7SUJd6l0u7i4y11+G6110VtrWXO6bu91yf+SxcY39U32u9Vpo/gj4e/8Er9d0z9mD49eHZPg2bvw/4ofw7rnhfwh4msfBlpeXt3YXEzXiSWuiwW+kW9zJGqokhZ98csXmXA+eKD7M+MvwCPjj9i3SNN8B/D+x8D+JPBkdj4j8GeFpo7GxTQtRsnWeCxzaPLawB9r2ztA7xiOeQBmUnP0BRWVR8zclo/denRx2a81pq77KxlTioWW610fVSd2vR66K25+c/jT9iTXvEHiXw38QPiV+zuvxsj8XReItV8UeBmfw/fT6NrF9cWP9mzyLqN3DZTNaabafYfPimkkTnywySuw2vCv7BfxW0v4dRzaxZ2eufEDwb8K/AiaBqdxqUci3nijQrvV7mW385iZVV1uIoHndQHju5OT84H39RThLkh7OGi92393lcnG3+Hm0bu0lFXsrF8zakp683xX66xk9rW5nH3lGyd3pd3X5dftRf8E4/Hn7Q+i+HdT1/4R/2t4g8dN4h17XRb6X4H1O78PaxeTWcem29/d65b3myyt7CFIJJNLSebNtuVZcRg+0/BX9i2fwH+1X8F/G/iz4K6T4o8QWvwu0vw7qnjIQ6PdX3hPWrKPDzTzTzLdP5kbtCs1oJ2+UhtqENX25RSo2p8vKvhd15WjUil6KNRpdVaOumudWPtE+d6tNN+soSb7Xbgm9LavTXQooopFBRRRQAUUUUAFFFFABRRRQBVvLKO/s5LeYbo5kMbDpkEYNfJ3hT/AIJkXWuaPpPhP4neOLXxx8NfB/h288LeGtC0zRp/D95HZXCxw77+/ivXkuLiO2hSFZbZLMfPMxRi4CfXJHHvRt2ip0vf+mB8iah/wSd0TS/FvjPXvDPjzx9Z6t4g0/Qk0iXxF4m1rxZHo9/pOoSahBcypqOoS/aY2mMIMOYyiJMI5EM7sPW/2df2f/E3wrvPGniLxd4w0vxZ458dXcNxeX+n6A2k6XZx29usFtb29o1zcSrGgVnbzLmRnklkIZFKovsDmk+61HRrow63Pkjxh/wT9+IXxr8VXnir4g/FDwjdeMtN0y2svCt34Z8D3GkWOkzwala6mk95b3GqXbXo+0WVqPLWWACPz1B3SCROiH7FHi7xN8GvivpfiX4kabfeNvjF5VnrGu6X4afT7HT9OWJLU2tlaNeSyxMbbz9ssl1KVnuGlwVAhr6UbvRgAe9V0t07dCeX3r9b3/Cx5h+0h8IPFPxM/Z51bwb8N/Glv8MdavIYrO01oaQ2oDTrdWTzI44Y7i3ZWeENGsiSo8e/ehDKpHHeBPgT8avhj8D9N8K+HfH3wT0fUNJuVjtJLb4W6kmlQacsW0W62f8Ab/med5nzmY3BUgkGLcd9fQRbEdGPkqbat9WV0sfK+gfsG+OPhd4U8C3Xgn4naFp/xE8Lxa3b6jrOt+Dn1LSdWj1i9GoXipp8N9bPb7btI2hxcv5calH87O8dX8Pv2H7X4eah8FZLXxNeXi/B+x1O1ka7tEa416a+hVJbiR0KLE5kDyEKhBLkDbjNe+suKbU9Led/xJ5USUUUVoUFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAABiiiigD5R+K3/BOfxD8T/ht8TvBtx418E3/AIT8a+MbXxnpWl674GfVLe0nW9hvLmz1KP7fHHqVnLJFgRqtsyBvmeXAp37N/wDwTAs/2ddL8JW1jr+gW8Phv4jXXxEex0LwlBoelCW50OfS5LG0tIZCltbq9w0qEmVwqhJGlkL3DfVlFOi/Yx5Keiso/JKKS+ShH7vUKnvtuXVyfzkpKX3qcvv06Hzhb/8ABPxfDP7W3iT4z+G/E9povjDxZr8NzqsjaL5q6loi6XY2MmkXBWdDLiSyF1BOSDbySuBG6PMs3nN//wAEpvElnonwn03w/wDEDwT4bm+GvhzRfDc3inT/AAbqFl4z1O3sCpkgXVLTWYFWzm27vsVzBdW4f53SYhdv2rRTpycElH7PLby5U0vzfq227ttlSk5Jp/aVn5r+uu9klskfKPxW/wCCc/iH4n/Db4neDbjxr4Jv/CfjXxja+M9K0vXfAz6pb2k63sN5c2epR/b449Ss5ZIsCNVtmQN8zy4FcJJ/wRasbD4E6f4OsdS+EN5BaePLjx0+i618Kre88FmS40v7DJax6HDeQIkcblpYGM7vHwJDPJvmf7poqKcVTh7OG1kvlHksvlyR+7Xd3mT5pc8t7uXzfNd/Pml9588eDP2ALPwF/wAE4te/Z30/xHtsdW0DW9At9YGkQQCzj1F7plcWkBjhAiFyB5cXlIfLwqxghVp+Jf2Dta8ReKviA3/CcaXD4a8ceLvC/jRbL/hHZGvrG90eTSN6G5+1hJIZ4tIjUL5CtE0zsXlACV9J0Vr7SSqe1v717/ipem6T9UEfdhGnHaN7eV+W/wD6Svu83fwvX/2LP7c1LxJcf8JL5X/CQ/ErR/iHt/s7d9n/ALPj05PsefNG7zP7Pz5vG3zvuNt+bjfh/wD8E8fEHhH4leF1vfiDo+ofDTwH4x1fxz4f0KLwxJb6zHqGoDUNyXWpG9eKe3iOqXRRI7OFyFhDSNscyfU1FZW9z2XTt/27GP3qMIpPdWutW2yXvNye7Vn6Xm2vR88r972eiVvmf4OfsC638E734Zw6Z470u60Twn8Orb4c+I7S78OO02v21uv7m5tZku1FjJvZywdLlWVgoCkbz5P8LP8AgjVrnw3+G/iTw3J8VLbV/M8PQaB4V1XULLxDql94fS3ura5g8xdQ1+6tWiLWdv5sNlb2KyeWu0xKqov3hRVczu31fNf/ALecm/vc5enM7WQVPflzT11T+5RS/CMb97K9z5K+PP8AwT1+IXxv13xdfD4seF9Dk+J3gKx8FeMzb+BpZWuTaNfulxp5k1IizR21CQPFMt0xRQFlRj5g9e8BfAHxD8Pv2ofGXjS18VaTN4T8bWVl9t0GbQ3N/Bf2sIt0nivhchBC0KqGha2Zt43CUDK16vRRe/3t/ff/ADdlsulgl7z5nvovuSS/CKV93bXqeEfEP9if/hPfhz+0PoH/AAk32X/hfU0k3nHTvMXRt2iWWl7HTzR9pQ/Y/MZcxbllaPIxvPg+i/8ABLPUv2fvA+uQ+E7HwLdan4/8Z+B9R1PTPBHg2y8F+HtDg0bW47ye6jtftMjlWtk+YNLcTtMPlPlsscH3fRTpycJRlH7PJ90GnFemiv1fe+o5ScrX6Xa8m1a/3fI+Wfh//wAE8fEHhH4leF1vfiDo+ofDTwH4x1fxz4f0KLwxJb6zHqGoDUNyXWpG9eKe3iOqXRRI7OFyFhDSNscyaHwU/YN174D6r8Lxo/jzS7jSfB/w8tvh54htrvw27za9b2y5gubWVbtRZSCQuWEiXKsrBQFI3n6WorPlXLyvb/7WUNe/uzktej8lZym3fzt+EudW7WlqrW1Pjz4M/wDBM7xh8OvBGi6H4g+IngPxpY+D/hxefDTQNN1D4eOdJexm+whJdStn1F2vX22QWVElgilVwFSEhi+78A/+CYegaD8Otd8MfGG3+Hvxg8PX2rQ6no3hu68KTnwx4TEUHkrFp2n6nfakLRArOBHbyRwRoQkcMY3bvqaitJSbvza3/wDknP7+Zt33J/zv+HL+StbY8P8A2kfglqnjnx/8CbDw3o72fh/wb4mutS1C7spYLWHRbMeH9U0+JY03B95lvYVRYo2VQjFigAz5d/wT7/4JQWf7DfxOtfFaal8OX1C38JnwjNH4Q+HkHhWPVYhLbSpfXrrc3E11fEwOJJXk2N5ilI4SJDN9g0UQk4zdRbvd/Jr8pP7/AEColUioS2SSS9Jcy/HU+cLf/gn4vhn9rbxJ8Z/Dfie00Xxh4s1+G51WRtF81dS0RdLsbGTSLgrOhlxJZC6gnJBt5JXAjdHmWbxzxB/wRavmsPA9ro/xNRbXQvBWi+CvEVhqUHiFNN8SwaYsiRyNaaZr2nwkSrNKrx3a3iEFQMDeJPvKiinJwSUdo8tvLlTS+679W23du45yc01LqrP5f1a+9rLZI+Xbr9gzxtp/w+vNH0P4keGLC70v4lXXxF8KXV14Nmuo9Na6vru8uLO+iXUYzeKTezokkL2pVRGSrFSWh8c/8E8/EvjD4i+Ilj+Ieh2vw48ceMtI8eeItDbwrLJq82o6f/Z7LHa6h9uWKC2kk0y1Zke0mkAaYCUbkMf1RRU0v3b5ob3T+a5N+/8ADho9G4pvXUVR88nKW+v4uTuuzvOVmtUpNKy0Pm67/YY8Q6jYeONDuPHmkv4T8SfEDS/iBpVqvht11DSp7bV7TU7m2lufthjuI5pLXZGywRNCJCW87AFeRX//AARZn1HxP40gm+JUl14O8RjX5dJsb1Nfvr3w1c6qLktPbrPrj6QjRSXUoBj0qNmiZkLBneRvu6iiHuQjTjooqy8lyxjvv8MYq++ne5Upc1+bW8uZ+bbu9Ozb1Wz6o+RfEP8AwTi8b/ErWfFnirxf8VPD9/8AEHXE8Lvp17pfguSw0fS7jw/qd1qFo7WT6hNNNHJJclZk+1IzANseLI2X5v8Agn942ufDesa1J8TPDP8AwtrWvHth49m1xPBkw0BJ7Oxh06O1GmHUTP5JtIcMft28yuXDBcRj6ropqTTuu6fzTjJP1vCF+/Kk7one7fVcr81yuNn5Wb06XutdTyv9qT4DeIfjp4I8Mx+HfFGk+FvFnhHX7PxFp+o3+hvqunvPAHR45bRbmCRo3jlkGFuEZSVO44IPg3jL/gkdb+Pf2xJPixqGtfD1rweL9K8ZwXy/DuCTxXHNZRWcTWB1qW5d1091tnKwxQxSI0q5lkRZI5vs2ilS/dz9pDR35vn7mv8A5JHy09bqpFThyT1XLy/L3tP/ACaWu+p4af2KoZ/2WPG3w1l8SXCy+LNc13xBaazBZKk2jXd/q1xqltLHGzMrvaTzRlSSA5gBwu7aOX8N/wDBOf7Jomhw6x4ybUtSh8JeLPD+vXsGlfZm1m98RXVndXd+imZ/ICSWz7ISZPllUb/3fzfTVFTUpxmmpdU0/RxcWvmm0/k90raxrTjU9qnrzOX/AG83dvtvt2u0rJu/zrpX7JPxIs7H4LahcfErwfceLvhSbiwvr1PBM8en6/pk8UcMkK2v9pGS2udkMRE/nyoHDHyCrBF82+EP/BHnTfhz+0/H8R7zWPAU1xaaz4g1FbjR/h/BpniHWodXF6JYtW1c3Es168P2pBE6LAm2Jg8UjGNoftOirqv2kpTnq5Xv58ySf3pfn3ZjTiqcVCGija3lyu6+5/p2R8G/C3/gjXrHwz8C6v4fvfGHw1+I1gdFt/D+iRfEXwn4i8YW9hZxXNvKEmtdQ8Sy2rbltoiRZw2SCWKJwoSNYhp+J/8AglX4+8Q/BXQPDsnxW8G6h4o0W41Oe38Y6z4W8Qah4g8Pi7dCsWi6n/wkaanp0aomx1a9uPNVihIi/cn7fook29/P8Xd/jqVH3fh01v8Ahb8tLbHxLe/8EdINZ/ahs/iPqXifwXql9p/ibRfFUOs3fw/t7jxpNPp8FlA1pLrklwzfYpVtXfyoYIXR5hmV4xJFL7P+0x+zP46+JXx2+H/xE+Hvjrwl4P13wPpWsaO8PiLwlceILS/h1F7B2IWDUbF43Q2K4O9wRIeBgGvc6KfO7KPSLbXq4qL/APJUkTGKjLnW9rfJXf5t+ep8aePv+Cdvifwd8ELy60XxE3jjxzD4R8ZafqELWi6f/wAJLf8AiK9s727kty1wEs9ptZI4InkZF82LfMBGzPwn7GP/AAT+17R/B3jLwTH4H1j4S+BZtc8J+KLCfxD4d8FWOtajqOm6st9dRGHwp5Vm9s0NpaRpJP8Av0eaY/vECqP0GoopzcJKS6Wt2VpOat6Sd7bdLW0NJSbST6Nu/W7318+vV3dz548R/sIzan+zdqHgmx8XR2etL4+uviHpGrzaSZ7eyvn8Qya5BFNbCdDPCkjiFws0TSIGKtExG3zL4nf8Eoda+M2gXV94t8WfC3xh4y1rxwvjPWY/Efw0fVPB9+yaMNHhgGjSanvUxQJHIsr3khEwdsbWVE+1KKlaXS67/wDkv/yEb9+VJ6BKbc3N7u936uTfyvKTtsm7pHyL8PP+CZviL9n7wd8PdN+GvxK0XQ5/Beka34aupdV8Fx3lvqGmalqUd8Vht7W5tIrS4haNUjdA0GC3+jbdqL3nwh/4Jt/Cv4ffC/4b6Xrvg7wb4y8XfDPwrZeFNN8Zah4ctDrkcFtb+SrxXDI0sGcuwVHwpkbHU59+ool70ZRltJ3f3yfy1nJ6dZPuTD3LculrL7kkr97KMVr0SXQ+EfH/APwTE+INh+zH4i0Gbxronj688G/B3xB8NPhxpWneHDoVwyX1nBCh1C5mv5orm4IsbRBIiWkQLSsUAZRH0XxB/wCCY/jb9ofSvE+p/Eb4p6LJ411TS9C0/Q77wn4c1Hw3aaH/AGXqEuoRtIseryXkryTSBXaC9tmEaARtGxL19mUVUpOTUpatO6fVNuTbv3bk7vfW17aDv+7VJaRV9Olny6W2suRWW3VpnzD+yX/wTz1D9nX4g+HvFGseL9N8QazpFnr1rezW1lqxk1h9TfSCs81xqmraldtJCmkpH887qyOgURiLD8X8Hf8Agj/Z/DD9qKH4lya94HTULHWtf1OC+0PwBBpfiTVY9XF7vTVNXNxNNeSQG6TynRYEAiO+KRjG0P2lRU1PfioS2UXH/t13uvx9V0FHRWXe/wA073+/U+IP2T/+CMel/s4DWnm1n4fwXGt/D+6+Hl23gv4d2/hYX8EvkbdRu2FxcS3V/wDu5PMkkk8t96lIoSJDN6rpX7JPxIs7H4LahcfErwfceLvhSbiwvr1PBM8en6/pk8UcMkK2v9pGS2udkMRE/nyoHDHyCrBF+iqKpzb38vwlKS/8mnJ+d7PTQnkTd/X8VGL/AAjH7k1rqfLPw/8A+CePiDwj8SvC63vxB0fUPhp4D8Y6v458P6FF4Ykt9Zj1DUBqG5LrUjevFPbxHVLookdnC5CwhpG2OZOt8C/sR/8ACF/CL9nfwr/wk32r/hQkttJ9q/s7Z/bvk6He6TjZ5p8jd9s83rJjy9nO7ePeaKn7Dp9Ha/na6V/Ozeu767I0cm233TT9He6XZe9La1r6Hy58K/2EPHnwn8EfAvT7L4meFZ9S+CUcuixXMvguf7PrOhvbw25t3hGpbo7wRwRn7Ushj3hj9m2naOW+Bn/BI61+Df7Wdl8Vf7a+Hz6po+va7rFtdaX8PINP17WE1X7YXj1fVTcyz3zQtcxiNkFum2Jg8TsY3h+zKKpybm5vd3u+uqSf3pffd7tky97SXdP5ptr8X+myRn+FbfVLPwzp8OuXmn6hrMdvGt9dWNm9na3M4Ub3iheWVokLZIRpZCoIBdsZOhRRSbu7gFFFFIAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9k=';

		doc.addImage(imgData, 'JPEG',0,0,210,297);
		doc.setFontSize(11);

		var tiekunta = $('#tiekunta').val();
		var kunta = $('#kunta').val();
		var kayttooikeustunnus = $('#kayttooikeustunnus').val();

		if (kayttooikeustunnus == "") {
			kayttooikeustunnus = 'Ei ilmoitettu';
		}

		var ilmoittaja = $('#ilmoittajanNimi').val();
		var puhelinnumero = $('#puhelinnumero').val();
		var sahkoposti = $('#sahkoposti').val();
		var date = moment().format('D.MM.YYYY');
		var pdfDate = moment().format('D_MM_YYYY');

		doc.text(15, 65, tiekunta);

		doc.text(29, 89, kunta);
		doc.text(55, 99, kayttooikeustunnus);
		doc.text(46, 109, ilmoittaja);
		doc.text(45, 119, puhelinnumero);
		doc.text(50, 129, sahkoposti);
		doc.text(16, 150, date);



		doc.save('Tosite yksityistietietojen ilmoituksesta Digiroad-järjestelmään - ' + pdfDate);
	}


	// handles the form data, saves pdf and then submits the form
	function formHandler(event) {
	 	event.preventDefault();
		//(document.querySelector('form')
		var formData = new FormData(event.target);

		sendData(formData, function(event) {
			createPDF();
		});

		 return false;
 }

	 //send data to backend
 function sendData(formData, callback) {
	 var XHR = new XMLHttpRequest();

	 // Define what happens on successful data submission
	XHR.addEventListener('load', function(event) {
		callback(event);
		console.log('Form send success!');
	});

	 // Define what happens in case of error
	 XHR.addEventListener('error', function(event) {
		 console.log('Oops! Something went wrong.');
	 });

	 // Set up our request
	 XHR.open('POST', 'sendmail/');

 	 //Send the proper header information along with the request
 	 //XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	 // Send our FormData object; HTTP headers are set automatically
	 XHR.send(formData);
	}


	function hideRajoitukset() {
		let tierajoitukset_container = document.getElementById('tierajoitukset_container_1');
		let checkbox = document.getElementById('tierajoitukset_checkbox_1');
		tierajoitukset_container.hidden = checkbox.checked;
		if (tierajoitukset_container.hidden) {
			resetFields(tierajoitukset_container);
		}
	};


	// resets all input & textarea fields of container
	function resetFields(container) {
	  $(container).find('input, textarea').each(function() {
	     $(this).val('');
	  });
	}

	// deletes all added divs of container
	function deleteRoads(container) {
	  $(container).find('div').each(function() {
	     $(this).remove();
	  });
	}


	function showIlmoitaTiedotRajoitukset() {
		$(".tierajoitukset_checkbox").prop("checked", false);
	  $('.tierajoitukset_container').show();

	}

	// resets the checkboxes
	function resetVakuutanCheckboxes() {
	  document.getElementById("tiedot_oikein_checkbox").checked = false;
	  document.getElementById("ilmoita_tiedot_checkbox").checked = false;
	}
