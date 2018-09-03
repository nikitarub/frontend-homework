'use strict';


/**
  * Функция set 
  * 
  * Задаёт новое значение какого-либо параметра в объекте
  * set (объект, параметр, новое значение){}
  * проход по всем параметрам со спуском вглубь
  */
function set(object, path, value) {
  const pathList = path.slice(1).split('.');
  const key = pathList.pop();
  const pointer = pathList.reduce(
  	function(head, currentValue) 
  	{
  		if (head[currentValue] === undefined) 
  			head[currentValue] = {};
  		return head[currentValue];
  	}, 
  	object );

  pointer[key] = value;
  return object;
};
