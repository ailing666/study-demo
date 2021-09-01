const Task = execute => ({
  execute,
  map: fn => {
    return Task(resolve => execute(x => resolve(fn(x))))
  },
  flapMap: fn => {
    return Task(resolve => execute(x => fn(x).execute(resolve)))
  }
})
function get (url) {
  if (url == 'data') {
    return Promise.resolve({ code: '0', userId: '1' })
  } else if (url == '1') {
    return Promise.resolve({ userId: '1', name: 'loveZero' })
  }
}
const request = url => Task(resolve => get(url).then(resolve))
request('data')
  .map(x => x.userId)
  .flapMap(request)
  .map(x => x.name)
  .execute(data => console.log(data))
