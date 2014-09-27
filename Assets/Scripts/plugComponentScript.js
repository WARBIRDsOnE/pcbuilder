var _isAttached = false;
var _obj : GameObject = null;
var _tag : String;

function OnTriggerStay2D(coll: Collider2D) {
	if (_obj == coll.gameObject)
	{
		coll.gameObject.transform.position = transform.position;
		coll.gameObject.transform.position.z = -3;
		//coll.gameObject.GetComponent("CPU_classes").setIsConnected();
		coll.gameObject.transform.parent = this.transform.parent;
		coll.gameObject.GetComponent(FollowMouse).enabled = false;
	}
	
	if (coll.gameObject.tag == _tag && !_isAttached && Input.GetMouseButtonUp(0))
	{
		_obj = coll.gameObject;
		_isAttached = true;
	}
	else
	{
		//Debug.Log("ko");
	}
}