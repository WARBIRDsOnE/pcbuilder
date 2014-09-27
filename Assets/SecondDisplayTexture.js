var texture : Sprite;
var collideBoxX : float;
var collideBoxY : float;

function OnMouseDown (){
	GetComponent(SpriteRenderer).sprite = texture;
	transform.position.z = -3;
	GetComponent(BoxCollider2D).size.x = collideBoxX;
	GetComponent(BoxCollider2D).size.y = collideBoxY;
}
