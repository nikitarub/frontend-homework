'use strict';


/**
  * Функция set 
  * 
  * Задаёт новое значение какого-либо параметра в объекте
  * 
  * @param {object} object - целевой объект
  * @param {string} path - путь по которому произвести замену
  * @param {*} value - значение для вставки 
  */
function set(object, path, value) {
  const pathList = path.slice(1).split('.');
  const key = pathList.pop();
  const pointer = pathList.reduce(
  	(head, currentValue) =>
  	{
      if (head[currentValue] === undefined) 
      {
        head[currentValue] = {};
      }
  		return head[currentValue];
  	}, 
    object 
  );

  pointer[key] = value;
  return object;
};
