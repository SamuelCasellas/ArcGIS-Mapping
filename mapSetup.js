const API_KEY = "AAPK321d61bd8cb64adcaf742d6cdb358ccdCXO2JrGUFiZl0PQvgiRgB1wGhZCRKBqE5xirtn9bSIMdlfdsRnmH33XiIBVB2JfN";

// const IF_PARKS = [{"ID":"1",
//                    "Name":"20th Street Park",
//                    "Latitude":"43.47998046752",
//                    "Longitude":"-112.036811995161",
//                    "Accuracy":"92",
//                    "Features": ["Picnic Areas", "Playground"]},
//                    {"ID":"2","Name":"Antares Park","Latitude":"43.5021088584354","Longitude":"-112.056641406867","Accuracy":"96"},{"ID":"3-96","Name":"1 of 2","Latitude":"43.4916085127223","Longitude":"-112.032396887802","Accuracy":"92"},{"ID":"4","Name":"Bel-Aire Park","Latitude":"43.5045510717721","Longitude":"-112.01330905256","Accuracy":"92"},{"ID":"5","Name":"South Capital Park \u0026 Shelter","Latitude":"43.4899854783426","Longitude":"-112.04438299896","Accuracy":"90"},{"ID":"7","Name":"Central Park","Latitude":"43.5005499426591","Longitude":"-112.022117553607","Accuracy":"100"},{"ID":"8","Name":"Civitan Park \u0026 Shelter","Latitude":"43.5040012397511","Longitude":"-112.043593455329","Accuracy":"90"},{"ID":"10","Name":"Civitan Plaza","Latitude":"43.493689856901","Longitude":"-112.039913964653","Accuracy":"96"},{"ID":"11","Name":"Community Park \u0026 Shelter","Latitude":"43.4752145122941","Longitude":"-112.021308290062","Accuracy":"100"},{"ID":"13","Name":"Esquire Acres Park \u0026 Shelter","Latitude":"43.502533645774","Longitude":"-112.079621620752","Accuracy":"100"},{"ID":"15-16-17-18-19","Name":"1 of 5","Latitude":"43.5152325031736","Longitude":"-112.048785816198","Accuracy":"90"},{"ID":"22","Name":"Highland Park \u0026 McDermott Shelter","Latitude":"43.5052367264348","Longitude":"-112.039074739452","Accuracy":"100"},{"ID":"24","Name":"John Hole Forebay Park","Latitude":"43.5037528389207","Longitude":"-112.049146698852","Accuracy":"100"},{"ID":"25","Name":"Kate Curley Park \u0026 Shelter","Latitude":"43.4895483295639","Longitude":"-112.026947787323","Accuracy":"100"},{"ID":"27","Name":"Liberty Park","Latitude":"43.4891451955826","Longitude":"-112.033882086612","Accuracy":"100"},{"ID":"28","Name":"Lincoln Park \u0026 Shelter","Latitude":"43.5105002838103","Longitude":"-111.987799030736","Accuracy":"100"},{"ID":"31","Name":"Poitevin Park","Latitude":"43.4862896712296","Longitude":"-112.0387301079","Accuracy":"100"},{"ID":"32","Name":"Reinhart Park","Latitude":"43.5061842572733","Longitude":"-112.069745391865","Accuracy":"100"},{"ID":"34","Name":"Rollandet Park","Latitude":"43.4776907863989","Longitude":"-112.043436894189","Accuracy":"100"},{"ID":"35","Name":"Ryder Park","Latitude":"43.4677051047065","Longitude":"-112.071330525779","Accuracy":"100"},{"ID":"36","Name":"Snake River Animal Park","Latitude":"43.5253672843723","Longitude":"-112.059846814574","Accuracy":"100"},{"ID":"37","Name":"Soccer Complex - Old Butte","Latitude":"43.5042670202541","Longitude":"-112.088179665868","Accuracy":"100"},{"ID":"38","Name":"South Tourist Park","Latitude":"43.4740474394368","Longitude":"-112.052024668797","Accuracy":"90"},{"ID":"39-40-42","Name":"1 of 3","Latitude":"43.4934086613754","Longitude":"-112.045427643352","Accuracy":"83"},{"ID":"44","Name":"SugarMill Substation Park","Latitude":"43.503209206135","Longitude":"-111.988083098735","Accuracy":"100"},{"ID":"45","Name":"Sunnyside Park \u0026 Shelter","Latitude":"43.4689820910159","Longitude":"-111.995225476687","Accuracy":"100"},{"ID":"48","Name":"Tautphaus Park","Latitude":"43.4734232314821","Longitude":"-112.035108223214","Accuracy":"100"},{"ID":"49","Name":"Tautphaus Park Shelter 1","Latitude":"43.4749672502475","Longitude":"-112.038477077731","Accuracy":"100"},{"ID":"50","Name":"Tautphaus Park Shelter 2","Latitude":"43.4738928211925","Longitude":"-112.040767684242","Accuracy":"100"},{"ID":"51","Name":"Tautphaus Park Shelter 3","Latitude":"43.4737215336293","Longitude":"-112.036846294646","Accuracy":"100"},{"ID":"52","Name":"Tautphaus Park Multi-Purpose Shelter","Latitude":"43.4720553475161","Longitude":"-112.040429725898","Accuracy":"100"},{"ID":"54","Name":"Tennis Courts at Idaho Falls High School","Latitude":"43.4916193819272","Longitude":"-112.021473480308","Accuracy":"92"},{"ID":"55","Name":"Idaho Falls Raceway / Noise Park","Latitude":"43.5108628313507","Longitude":"-112.194800575472","Accuracy":"100"},{"ID":"57","Name":"Recreation Center","Latitude":"43.4947489219172","Longitude":"-112.042144152904","Accuracy":"100"},{"ID":"58","Name":"Idaho Falls Raceway / Noise Park","Latitude":"43.5075369912686","Longitude":"-112.195518031804","Accuracy":"100"},{"ID":"59","Name":"Sandy Downs Rodeo Grounds","Latitude":"43.4395278961888","Longitude":"-112.070796150399","Accuracy":"80"},{"ID":"60-61-62-63-64-65-66","Name":"1 of 7","Latitude":"43.5098593066543","Longitude":"-112.063268929193","Accuracy":"100"},{"ID":"67","Name":"Rose Hill Cemetery","Latitude":"43.4779796279522","Longitude":"-112.04336277925","Accuracy":"90"},{"ID":"68","Name":"Fielding Cemetery","Latitude":"43.4866725045307","Longitude":"-112.042110066817","Accuracy":"100"},{"ID":"69","Name":"River Walk","Latitude":"43.4933416277059","Longitude":"-112.045338258827","Accuracy":"86"},{"ID":"70","Name":"The Pier","Latitude":"43.4847941605352","Longitude":"-112.04950542013","Accuracy":"100"},{"ID":"89","Name":"Idaho Falls Zoo at Tautphaus Park","Latitude":"43.4719517789504","Longitude":"-112.041008343354","Accuracy":"100"},{"ID":"97","Name":"City Hall","Latitude":"43.4941863744021","Longitude":"-112.038810204225","Accuracy":"100"},{"ID":"98","Name":"Education Center","Latitude":"43.472452445024","Longitude":"-112.041084298297","Accuracy":"100"},{"ID":"99","Name":"Sandy Downs","Latitude":"43.4379203860176","Longitude":"-112.000814050373","Accuracy":"100"},{"ID":"101","Name":"Archery Range","Latitude":"43.4381834777112","Longitude":"-111.997329536692","Accuracy":"100"},{"ID":"102","Name":"City Hall Annex","Latitude":"43.4943545100932","Longitude":"-112.039142256729","Accuracy":"100"},{"ID":"104","Name":"River Walk Eastside","Latitude":"43.4953580794605","Longitude":"-112.04212040985","Accuracy":"100"},{"ID":"105","Name":"River Walk Westside","Latitude":"43.4959970641277","Longitude":"-112.044136944541","Accuracy":"100"}]

// Rigby is the between Rexburg and Idaho so we will use that.
const RIGBY_LONGITUDE = -111.909829694;
const RIGBY_LATITUDE = 43.670997316;
const ZOOM_START = 10.9;

require([
    "esri/config", 
    "esri/Map", 
    "esri/views/MapView",

    "esri/layers/FeatureLayer"
    ], 
    function (esriConfig, Map, MapView, FeatureLayer) {
    // Basic config
    esriConfig.apiKey = API_KEY;

    const map = new Map({
        basemap: "arcgis-topographic" // Basemap layer service
    });

    const view = new MapView({
        map: map,
        center: [RIGBY_LONGITUDE, RIGBY_LATITUDE], // Longitude, latitude
        zoom: ZOOM_START, // Zoom level
        container: "viewDiv" // Div element
    });

    const popupPark = {
        "title": "Parks",
        "content": "<b>Park name:</b> {Park_Name}<br><b>Address:</b> {Directions}<br>"
    };

    const parks = new FeatureLayer({
        url: "https://services8.arcgis.com/YY0zev9RpFX809lW/arcgis/rest/services/Parks_in_IF/FeatureServer",
        outFields: ["Park_Name", "Directions"],
        popupTemplate: popupPark
    });

    map.add(parks);

});
