```
y =  new Observable(document.querySelector('#test_2'), 'keyup');

y
    .map(function (event) {
        return event.target.value;
    })
    .filter(Boolean)
    .subscribe(function (x) {
        document.querySelector('#result_1').innerText = x;
    })
    .map(function (x) {
        return x + '__suffix';
    })
    .subscribe(function (x) {
        document.querySelector('#result_2').innerText = x;
    })
    .map(function (x) {
        return 'prefix__' + x;
    })
    .subscribe(function (x) {
        document.querySelector('#result_3').innerText = x;
    })
```
