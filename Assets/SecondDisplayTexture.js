var texture : Sprite;
var collideBoxX : float;
var collideBoxY : float;

function OnMouseDown (){
	GetComponent(SpriteRenderer).sprite = texture;
	GetComponent(BoxCollider2D).size.x = collideBoxX;
	GetComponent(BoxCollider2D).size.y = collideBoxY;
}
