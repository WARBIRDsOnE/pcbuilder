var texture1 : Sprite;
var texture2 : Sprite;

function start(){

}

function OnMouseDown (){
	GetComponent(SpriteRenderer).sprite = texture2;
	GetComponent(BoxCollider2D).size.x = 0.15;
}

/*function OnMouseDrag () {
	GetComponent(SpriteRenderer).sprite = texture1;
}*/
