var _quantity : int;

/*function Start () {

}

function Update () {

}*/

function onMouseClick(){

}

function OnMouseDown (){
	var prefab : GameObject = Resources.Load("Prefabs/Components/CPU component 1", GameObject);
	var instance : GameObject = Instantiate(prefab, Input.mousePosition, transform.rotation);
}

function OnTriggerStay2D(coll: Collider2D) {

}