import
{
	request
}
from './request.js'

export function gethomemultidata()
{
	return request(
	{
		url: '/home/multidata'
	})
}
