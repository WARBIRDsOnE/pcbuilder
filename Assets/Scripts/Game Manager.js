var spawnCM : GameObject;
var spawnCPU : GameObject;
var spawnGPU : GameObject;
var spawnCASE : GameObject;
var spawnPOWER : GameObject;
var spawnRAM : GameObject;
var spawnDD : GameObject;
var spawnDVD : GameObject;
var spawnRAD : GameObject;

var prefabCM : GameObject;
var prefabCPU : GameObject;
var prefabGPU : GameObject;
var prefabCASE : GameObject;
var prefabPOWER : GameObject;
var prefabRAM : GameObject;
var prefabDD : GameObject;
var prefabDVD : GameObject;
var prefabRAD : GameObject;


var moveCamera = false;
// Transforms to act as start and end markers for the journey.
	var startMarker: Vector3;
	var endMarker: Vector3;
	
	// Movement speed in units/sec.
	var speed = 35.0;
	
	// Time when the movement started.
	private var startTime: float;
	
	// Total distance between the markers.
	private var journeyLength: float;
	
	var target : Transform;
	var smooth = 15.0;
	
	var endZoom = 20f;
	
	function Start() {
		
		var CM : GameObject;
		var CPU : GameObject;
		var GPU : GameObject;
		var CASE : GameObject;
		var POWER : GameObject;
		var RAM : GameObject;
		var DD : GameObject;
		var DVD : GameObject;
		var RAD : GameObject;
		
		startMarker = Vector3(0,0,-20);
		endMarker = Vector3(-12,0,-40);
		
		// Calculate the journey length.
		journeyLength = Vector3.Distance(startMarker, endMarker);
		
		CASE = Resources.Load("Prefabs/Components/Boitier component ATX", GameObject);
		CM = Resources.Load("Prefabs/Components/CM component", GameObject);
		CPU = Resources.Load("Prefabs/Components/CPU Intev", GameObject);
		GPU = Resources.Load("Prefabs/Components/CPU Intev", GameObject);
		POWER = Resources.Load("Prefabs/Components/CPU Intev", GameObject);
		RAM = Resources.Load("Prefabs/Components/CPU Intev", GameObject);
		DD = Resources.Load("Prefabs/Components/CPU Intev", GameObject);
		DVD = Resources.Load("Prefabs/Components/CPU Intev", GameObject);
		RAD = Resources.Load("Prefabs/Components/CPU Intev", GameObject);
		
		
		prefabCASE = Instantiate(CASE, spawnCASE.position, spawnCASE.rotation);
		prefabCM = Instantiate(CM, spawnCM.position, spawnCM.rotation);
		prefabCPU = Instantiate(CPU, spawnCPU.position, spawnCPU.rotation);
		prefabGPU = Instantiate(GPU, spawnGPU.position, spawnGPU.rotation);
		prefabPOWER = Instantiate(POWER, spawnPOWER.position, spawnPOWER.rotation);
		prefabRAM = Instantiate(RAM, spawnRAM.position, spawnRAM.rotation);
		prefabDD = Instantiate(DD, spawnDD.position, spawnDD.rotation);
		prefabDVD = Instantiate(DVD, spawnDVD.position, spawnDVD.rotation);
		prefabRAD = Instantiate(RAD, spawnRAD.position, spawnRAD.rotation);
		
	}
	
	// Follows the target position like with a spring
	function Update () {
	if (moveCamera)
	{
		// Distance moved = time * speed.
		var distCovered = (Time.time - startTime) * speed;
		
		// Fraction of journey completed = current distance divided by total distance.
		var fracJourney = distCovered / journeyLength;
		
		// Set our position as a fraction of the distance between the markers.
		Camera.main.transform.position = Vector3.Lerp(startMarker, endMarker, fracJourney);
		if (Camera.main.orthographicSize < endZoom)
		{
			Camera.main.orthographicSize += 7.8f * Time.deltaTime;
		}
	}

	}

function OnGUI() {
	if (GUI.Button(Rect(10,70,50,30),"Next Step"))
	{
		moveCamera = true;
		startTime = Time.time;
	//Camera.main.transform.position.z = 
		//Camera.main.orthographicSize = 15;
		//Camera.main.transform.Translate(Vector3(50.0,0,0) * Time.deltaTime);
		//Camera.main.transform.position.x -= 15 * Time.deltaTime; 
	}
}