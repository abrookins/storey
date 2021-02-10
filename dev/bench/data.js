window.BENCHMARK_DATA = {
  "lastUpdate": 1612950892221,
  "repoUrl": "https://github.com/mlrun/storey",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "657577628afa1fbb26af178ad4557ba2c7e5d509",
          "message": "Add more benchmarks. (#20)\n\n* Add more benchmarks.\r\n\r\n* Better benchmarks.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-10-14T16:00:13+03:00",
          "tree_id": "1ce441b7e0b1ab1c38e1c06c9bcb93dcf263fbd2",
          "url": "https://github.com/mlrun/storey/commit/657577628afa1fbb26af178ad4557ba2c7e5d509"
        },
        "date": 1602680618974,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1117.2901185166188,
            "unit": "iter/sec",
            "range": "stddev: 0.00007117692377137618",
            "extra": "mean: 895.0226833901115 usec\nrounds: 578"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 713.6972502353996,
            "unit": "iter/sec",
            "range": "stddev: 0.0003779808083959806",
            "extra": "mean: 1.4011543405416915 msec\nrounds: 555"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.157794824213928,
            "unit": "iter/sec",
            "range": "stddev: 0.00840123239815128",
            "extra": "mean: 316.6766859999939 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.6313227349913888,
            "unit": "iter/sec",
            "range": "stddev: 0.05700459447126654",
            "extra": "mean: 1.5839759041999968 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3434.319209179311,
            "unit": "iter/sec",
            "range": "stddev: 0.00005133746081838018",
            "extra": "mean: 291.1785245026676 usec\nrounds: 2061"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2385.665360984157,
            "unit": "iter/sec",
            "range": "stddev: 0.00010617017718138104",
            "extra": "mean: 419.1702727273832 usec\nrounds: 1881"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 11.123432145518352,
            "unit": "iter/sec",
            "range": "stddev: 0.002591235961475489",
            "extra": "mean: 89.90031016666933 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.230884358508166,
            "unit": "iter/sec",
            "range": "stddev: 0.0077510605921119755",
            "extra": "mean: 448.2527282000035 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 971.3106197089425,
            "unit": "iter/sec",
            "range": "stddev: 0.0005474349570327562",
            "extra": "mean: 1.0295367719748132 msec\nrounds: 785"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 669.6711152386642,
            "unit": "iter/sec",
            "range": "stddev: 0.0005873822650437438",
            "extra": "mean: 1.493270319182887 msec\nrounds: 636"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.6453414112437894,
            "unit": "iter/sec",
            "range": "stddev: 0.007098457905829306",
            "extra": "mean: 378.02303920000213 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.531932938479951,
            "unit": "iter/sec",
            "range": "stddev: 0.02034697801123083",
            "extra": "mean: 1.8799362244000064 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1066.435181794031,
            "unit": "iter/sec",
            "range": "stddev: 0.00009209482037622099",
            "extra": "mean: 937.7034976638064 usec\nrounds: 856"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 397.1533921201151,
            "unit": "iter/sec",
            "range": "stddev: 0.0008294443554020983",
            "extra": "mean: 2.5179188188768133 msec\nrounds: 392"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.7547258087468914,
            "unit": "iter/sec",
            "range": "stddev: 0.006846319925187341",
            "extra": "mean: 1.3249845022000102 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.1495195692642256,
            "unit": "iter/sec",
            "range": "stddev: 0.056703283088359195",
            "extra": "mean: 6.68808775280001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1082.2941566395525,
            "unit": "iter/sec",
            "range": "stddev: 0.00015006058621671876",
            "extra": "mean: 923.9632255845581 usec\nrounds: 727"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 676.9379112302706,
            "unit": "iter/sec",
            "range": "stddev: 0.0007799918985845292",
            "extra": "mean: 1.4772403545586545 msec\nrounds: 691"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.4226174221812546,
            "unit": "iter/sec",
            "range": "stddev: 0.003954064791707921",
            "extra": "mean: 292.17405180000924 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6838691505048222,
            "unit": "iter/sec",
            "range": "stddev: 0.014112728869019582",
            "extra": "mean: 1.4622680366000054 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8fe21463dba6e9a4d65d87e2e63d3aa986a197ce",
          "message": "Refactor persistence (#19)\n\n* refactor persistence to use v3io arrays\r\n\r\n* run conditional update after mtime cond evaluates to false\r\n\r\n* create a workaround for enging bug + fix lint + remove spaces in update expressions\r\n\r\n* break long lines\r\n\r\n* fix lint\r\n\r\n* code review fixes\r\n\r\n* replace double quates with single quates + make test parametarized\r\n\r\n* review fixes",
          "timestamp": "2020-10-15T14:39:54+03:00",
          "tree_id": "f05faa4b7f769690ab9e508b97917c512813f0ce",
          "url": "https://github.com/mlrun/storey/commit/8fe21463dba6e9a4d65d87e2e63d3aa986a197ce"
        },
        "date": 1602762219575,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1097.824634655155,
            "unit": "iter/sec",
            "range": "stddev: 0.00013389337192116078",
            "extra": "mean: 910.8922941177364 usec\nrounds: 340"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 665.4572155122935,
            "unit": "iter/sec",
            "range": "stddev: 0.0002529646679791538",
            "extra": "mean: 1.5027262109257664 msec\nrounds: 659"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 2.52200476394189,
            "unit": "iter/sec",
            "range": "stddev: 0.02260060560741257",
            "extra": "mean: 396.5099568000028 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.5049428380273163,
            "unit": "iter/sec",
            "range": "stddev: 0.04140622526138037",
            "extra": "mean: 1.9804221878000021 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3475.3660503061524,
            "unit": "iter/sec",
            "range": "stddev: 0.00005252892024600168",
            "extra": "mean: 287.73947420931614 usec\nrounds: 2404"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2290.542907559454,
            "unit": "iter/sec",
            "range": "stddev: 0.00007941328962458165",
            "extra": "mean: 436.57771993692455 usec\nrounds: 1896"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 10.539370388169239,
            "unit": "iter/sec",
            "range": "stddev: 0.002141042301971389",
            "extra": "mean: 94.8823281818172 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.1053751434634513,
            "unit": "iter/sec",
            "range": "stddev: 0.009942206232760905",
            "extra": "mean: 474.9747346000049 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1086.0313020322542,
            "unit": "iter/sec",
            "range": "stddev: 0.00023749363913627396",
            "extra": "mean: 920.7837731092403 usec\nrounds: 714"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 659.3894064730937,
            "unit": "iter/sec",
            "range": "stddev: 0.0002641557700509702",
            "extra": "mean: 1.516554543010853 msec\nrounds: 744"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.4079538649793624,
            "unit": "iter/sec",
            "range": "stddev: 0.008875678814211483",
            "extra": "mean: 415.2903486000014 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.49552009120663293,
            "unit": "iter/sec",
            "range": "stddev: 0.03107654384904316",
            "extra": "mean: 2.018081643400001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 974.4387683003703,
            "unit": "iter/sec",
            "range": "stddev: 0.0003303154120311613",
            "extra": "mean: 1.0262317474747171 msec\nrounds: 396"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 364.525122736944,
            "unit": "iter/sec",
            "range": "stddev: 0.000607769469403425",
            "extra": "mean: 2.7432951465505444 msec\nrounds: 348"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.709930303738259,
            "unit": "iter/sec",
            "range": "stddev: 0.02291680483106593",
            "extra": "mean: 1.408588976599998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.14142267527892194,
            "unit": "iter/sec",
            "range": "stddev: 0.04736792357024758",
            "extra": "mean: 7.071001860399986 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1083.8078975703806,
            "unit": "iter/sec",
            "range": "stddev: 0.0001389070536538002",
            "extra": "mean: 922.6727377072483 usec\nrounds: 488"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 651.895021624323,
            "unit": "iter/sec",
            "range": "stddev: 0.00026364562378961714",
            "extra": "mean: 1.5339893185689712 msec\nrounds: 587"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 2.7441061229785872,
            "unit": "iter/sec",
            "range": "stddev: 0.0026817583900674534",
            "extra": "mean: 364.4173931999944 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.547703637383912,
            "unit": "iter/sec",
            "range": "stddev: 0.021330715667904485",
            "extra": "mean: 1.825804927600018 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8573a472b5785d4a984c429478f4933940b19118",
          "message": "add aggregation related documentation (#22)\n\n* add aggregation related documentation\r\n\r\n* review comments\r\n\r\n* minor review fix",
          "timestamp": "2020-10-18T13:00:46+03:00",
          "tree_id": "9f0cae12fb889efcc45cc0aefb94262931ade870",
          "url": "https://github.com/mlrun/storey/commit/8573a472b5785d4a984c429478f4933940b19118"
        },
        "date": 1603015435736,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1271.2906205148429,
            "unit": "iter/sec",
            "range": "stddev: 0.00018017622428829995",
            "extra": "mean: 786.6022008366768 usec\nrounds: 478"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 837.9916360300243,
            "unit": "iter/sec",
            "range": "stddev: 0.0003507467427824947",
            "extra": "mean: 1.1933293329006105 msec\nrounds: 772"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.6119665987780984,
            "unit": "iter/sec",
            "range": "stddev: 0.006200310872736167",
            "extra": "mean: 276.8574881999996 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7563567698015289,
            "unit": "iter/sec",
            "range": "stddev: 0.01837535005078574",
            "extra": "mean: 1.322127387400002 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4897.233989258138,
            "unit": "iter/sec",
            "range": "stddev: 0.00006692530007330289",
            "extra": "mean: 204.19690016720764 usec\nrounds: 2995"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3176.7429003659727,
            "unit": "iter/sec",
            "range": "stddev: 0.0000985906244720822",
            "extra": "mean: 314.7878287175195 usec\nrounds: 2347"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 13.545503428632111,
            "unit": "iter/sec",
            "range": "stddev: 0.004381482522471613",
            "extra": "mean: 73.82523693333005 msec\nrounds: 15"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.8517466159800255,
            "unit": "iter/sec",
            "range": "stddev: 0.01052282154076737",
            "extra": "mean: 350.66229039999826 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1256.4988511574259,
            "unit": "iter/sec",
            "range": "stddev: 0.0005082602827997118",
            "extra": "mean: 795.8622477679534 usec\nrounds: 896"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 818.0800014159613,
            "unit": "iter/sec",
            "range": "stddev: 0.00012054713672296694",
            "extra": "mean: 1.2223743378021283 msec\nrounds: 746"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.3738638248720387,
            "unit": "iter/sec",
            "range": "stddev: 0.005112258580164949",
            "extra": "mean: 296.3960764000092 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6643087053086892,
            "unit": "iter/sec",
            "range": "stddev: 0.04510339441050078",
            "extra": "mean: 1.50532424459999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1142.9283908271411,
            "unit": "iter/sec",
            "range": "stddev: 0.00034513022912423193",
            "extra": "mean: 874.9454541734644 usec\nrounds: 982"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 418.90963366976615,
            "unit": "iter/sec",
            "range": "stddev: 0.0008860857347480032",
            "extra": "mean: 2.3871496848609537 msec\nrounds: 403"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8411445341501133,
            "unit": "iter/sec",
            "range": "stddev: 0.0321086835862927",
            "extra": "mean: 1.188856325400002 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.16825152076703703,
            "unit": "iter/sec",
            "range": "stddev: 0.04682069283441367",
            "extra": "mean: 5.943482682600006 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1300.6124560744993,
            "unit": "iter/sec",
            "range": "stddev: 0.0001583146643442701",
            "extra": "mean: 768.8685398402181 usec\nrounds: 1117"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 806.6849699987548,
            "unit": "iter/sec",
            "range": "stddev: 0.000552130371218832",
            "extra": "mean: 1.239641293926108 msec\nrounds: 609"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.163968269488784,
            "unit": "iter/sec",
            "range": "stddev: 0.008739766549724914",
            "extra": "mean: 240.155528400021 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.7647447505228915,
            "unit": "iter/sec",
            "range": "stddev: 0.0723057243137078",
            "extra": "mean: 1.3076258441999813 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec4a2ca2dde8fa0bcd82e26a699e2969a73ae15d",
          "message": "Add dataframe source. (#21)\n\n* Add dataframe source.\r\n\r\n* Fix linter.\r\n\r\n* Code review round of improvements.\r\n\r\n* Use data in DataFrame index.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-10-18T15:08:47+03:00",
          "tree_id": "141e5565778d7741140eb173300373e2c6d71364",
          "url": "https://github.com/mlrun/storey/commit/ec4a2ca2dde8fa0bcd82e26a699e2969a73ae15d"
        },
        "date": 1603023134720,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1294.7240932749787,
            "unit": "iter/sec",
            "range": "stddev: 0.000047852677516872664",
            "extra": "mean: 772.3653287941218 usec\nrounds: 514"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 846.511120465394,
            "unit": "iter/sec",
            "range": "stddev: 0.00008017929952781399",
            "extra": "mean: 1.181319389460851 msec\nrounds: 778"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.228576726422461,
            "unit": "iter/sec",
            "range": "stddev: 0.0028100417620315486",
            "extra": "mean: 236.4861901999916 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.835195554802751,
            "unit": "iter/sec",
            "range": "stddev: 0.01545933642904874",
            "extra": "mean: 1.1973243802000013 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4937.728423661964,
            "unit": "iter/sec",
            "range": "stddev: 0.000014604578862252099",
            "extra": "mean: 202.52227627747308 usec\nrounds: 2407"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3329.1070754098328,
            "unit": "iter/sec",
            "range": "stddev: 0.000020431792228584083",
            "extra": "mean: 300.38084607924304 usec\nrounds: 2066"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 14.657382683081265,
            "unit": "iter/sec",
            "range": "stddev: 0.000825763315678846",
            "extra": "mean: 68.22500453333191 msec\nrounds: 15"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.914856835943688,
            "unit": "iter/sec",
            "range": "stddev: 0.0030226485980689288",
            "extra": "mean: 343.070022400002 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1245.311019819044,
            "unit": "iter/sec",
            "range": "stddev: 0.00016136086731847514",
            "extra": "mean: 803.0122468082791 usec\nrounds: 705"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 765.5586215976356,
            "unit": "iter/sec",
            "range": "stddev: 0.00015036356010437926",
            "extra": "mean: 1.3062356974219838 msec\nrounds: 737"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.5037037792799524,
            "unit": "iter/sec",
            "range": "stddev: 0.006260164785399593",
            "extra": "mean: 285.41225599999507 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.7125992293072847,
            "unit": "iter/sec",
            "range": "stddev: 0.02999537119368206",
            "extra": "mean: 1.4033133336000048 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1245.7122695265966,
            "unit": "iter/sec",
            "range": "stddev: 0.00007559202626938244",
            "extra": "mean: 802.7535928341031 usec\nrounds: 921"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 428.26523345114236,
            "unit": "iter/sec",
            "range": "stddev: 0.0008426699523010798",
            "extra": "mean: 2.3350015875479246 msec\nrounds: 257"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8970302095664147,
            "unit": "iter/sec",
            "range": "stddev: 0.01468300759704238",
            "extra": "mean: 1.1147896574000071 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.17365344513784825,
            "unit": "iter/sec",
            "range": "stddev: 0.06811503682420289",
            "extra": "mean: 5.758595801000018 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1245.3629837164733,
            "unit": "iter/sec",
            "range": "stddev: 0.00026555768460232316",
            "extra": "mean: 802.9787403956321 usec\nrounds: 963"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 796.5421044455439,
            "unit": "iter/sec",
            "range": "stddev: 0.00046180514532475546",
            "extra": "mean: 1.2554264167819211 msec\nrounds: 715"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.26195984458997,
            "unit": "iter/sec",
            "range": "stddev: 0.009651713320948956",
            "extra": "mean: 234.6338390000028 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.872084464963665,
            "unit": "iter/sec",
            "range": "stddev: 0.011936187555909566",
            "extra": "mean: 1.1466779195999834 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "711560be222b2ca3d8c6062be9eb8880cea7b025",
          "message": "add sqr aggregations (#23)\n\n* add sqr aggregations\r\n\r\n* add sqr doc",
          "timestamp": "2020-10-18T22:13:15+03:00",
          "tree_id": "bdac923e8cc3924426b19e815b7036a0c0147722",
          "url": "https://github.com/mlrun/storey/commit/711560be222b2ca3d8c6062be9eb8880cea7b025"
        },
        "date": 1603048633064,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1294.4728117506688,
            "unit": "iter/sec",
            "range": "stddev: 0.00017883007306708956",
            "extra": "mean: 772.5152594341333 usec\nrounds: 424"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 840.8855109158212,
            "unit": "iter/sec",
            "range": "stddev: 0.00028550036223371004",
            "extra": "mean: 1.189222536265234 msec\nrounds: 841"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.8312775289408094,
            "unit": "iter/sec",
            "range": "stddev: 0.011429493488477722",
            "extra": "mean: 261.00954379999166 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7831682630971858,
            "unit": "iter/sec",
            "range": "stddev: 0.04045393923009433",
            "extra": "mean: 1.2768648158000075 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4949.247569749311,
            "unit": "iter/sec",
            "range": "stddev: 0.000014329585305937367",
            "extra": "mean: 202.05091499406484 usec\nrounds: 2541"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3334.2686077775247,
            "unit": "iter/sec",
            "range": "stddev: 0.00002132472089443485",
            "extra": "mean: 299.9158489113316 usec\nrounds: 2204"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 14.736179192424792,
            "unit": "iter/sec",
            "range": "stddev: 0.0014763748433510595",
            "extra": "mean: 67.86019543750221 msec\nrounds: 16"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 3.0259117812789613,
            "unit": "iter/sec",
            "range": "stddev: 0.0027848127900411256",
            "extra": "mean: 330.4789009999922 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1324.5916216502417,
            "unit": "iter/sec",
            "range": "stddev: 0.00009766010822531698",
            "extra": "mean: 754.9496642249258 usec\nrounds: 819"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 834.0374784286383,
            "unit": "iter/sec",
            "range": "stddev: 0.00011466616560314674",
            "extra": "mean: 1.198986887116922 msec\nrounds: 753"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.5873622920314445,
            "unit": "iter/sec",
            "range": "stddev: 0.005526445982063484",
            "extra": "mean: 278.7563447999901 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6712826826928154,
            "unit": "iter/sec",
            "range": "stddev: 0.049832162914629996",
            "extra": "mean: 1.4896853825999983 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1190.9339297331094,
            "unit": "iter/sec",
            "range": "stddev: 0.0002138822967391535",
            "extra": "mean: 839.6771433190269 usec\nrounds: 621"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 424.2083874602109,
            "unit": "iter/sec",
            "range": "stddev: 0.000802878778279671",
            "extra": "mean: 2.357331984846236 msec\nrounds: 264"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8145117124778074,
            "unit": "iter/sec",
            "range": "stddev: 0.021075636526624145",
            "extra": "mean: 1.2277294294000058 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.16256722194415743,
            "unit": "iter/sec",
            "range": "stddev: 0.09043816234857878",
            "extra": "mean: 6.151301523399991 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1281.0174699223494,
            "unit": "iter/sec",
            "range": "stddev: 0.00022589614526367913",
            "extra": "mean: 780.629478894317 usec\nrounds: 687"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 805.9982241297962,
            "unit": "iter/sec",
            "range": "stddev: 0.00024142318034898056",
            "extra": "mean: 1.2406975227267525 msec\nrounds: 748"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.6388382739828096,
            "unit": "iter/sec",
            "range": "stddev: 0.01419370559412825",
            "extra": "mean: 274.81298279999464 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.7059275240309029,
            "unit": "iter/sec",
            "range": "stddev: 0.09346179060989224",
            "extra": "mean: 1.416576016600004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ab4af7894e916d8c138d6abdf38708c93070429",
          "message": "Break flow.py into multiple files. (#24)\n\n* Break flow.py into multiple files.\r\n\r\n* Fix integration tests.\r\n\r\n* Extract writers from flow.py.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-10-19T14:48:04+03:00",
          "tree_id": "4869ccbab7ec8433d53337dc813fd5e022ca619d",
          "url": "https://github.com/mlrun/storey/commit/3ab4af7894e916d8c138d6abdf38708c93070429"
        },
        "date": 1603108282888,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1437.127304659381,
            "unit": "iter/sec",
            "range": "stddev: 0.00008179324650838057",
            "extra": "mean: 695.8325798680819 usec\nrounds: 457"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 905.9338181289186,
            "unit": "iter/sec",
            "range": "stddev: 0.00010742307286439592",
            "extra": "mean: 1.103833392670297 msec\nrounds: 955"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.257618596340569,
            "unit": "iter/sec",
            "range": "stddev: 0.009017563680860536",
            "extra": "mean: 234.87308160000566 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8398067260805626,
            "unit": "iter/sec",
            "range": "stddev: 0.025645040777885826",
            "extra": "mean: 1.1907501678000016 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5536.233669450053,
            "unit": "iter/sec",
            "range": "stddev: 0.00002691058019140334",
            "extra": "mean: 180.62821400010307 usec\nrounds: 2500"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3605.4061152542126,
            "unit": "iter/sec",
            "range": "stddev: 0.00003455276194210982",
            "extra": "mean: 277.36126473216774 usec\nrounds: 2240"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 15.574872858625616,
            "unit": "iter/sec",
            "range": "stddev: 0.0034154983889958753",
            "extra": "mean: 64.20598158823388 msec\nrounds: 17"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 3.2187074469775903,
            "unit": "iter/sec",
            "range": "stddev: 0.007589181516853742",
            "extra": "mean: 310.68371900000216 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1368.6198889237505,
            "unit": "iter/sec",
            "range": "stddev: 0.00010610961734905463",
            "extra": "mean: 730.6630629095823 usec\nrounds: 763"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 870.7376788083403,
            "unit": "iter/sec",
            "range": "stddev: 0.0001496021127912769",
            "extra": "mean: 1.1484515076556274 msec\nrounds: 849"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.7439213281483266,
            "unit": "iter/sec",
            "range": "stddev: 0.00646976487570129",
            "extra": "mean: 267.0996296000112 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.7950998075192186,
            "unit": "iter/sec",
            "range": "stddev: 0.021420670683736726",
            "extra": "mean: 1.2577037379999978 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1330.773007443913,
            "unit": "iter/sec",
            "range": "stddev: 0.0000912024216797802",
            "extra": "mean: 751.4429541374254 usec\nrounds: 1003"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 456.06136398082083,
            "unit": "iter/sec",
            "range": "stddev: 0.0007392365585547187",
            "extra": "mean: 2.192687385906371 msec\nrounds: 298"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.9840016923223265,
            "unit": "iter/sec",
            "range": "stddev: 0.01562054298327297",
            "extra": "mean: 1.0162584147999951 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.19220721164096702,
            "unit": "iter/sec",
            "range": "stddev: 0.047946092050408375",
            "extra": "mean: 5.202718417599999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1375.862891898813,
            "unit": "iter/sec",
            "range": "stddev: 0.00006777097992183497",
            "extra": "mean: 726.8166078815538 usec\nrounds: 1015"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 882.2205796672743,
            "unit": "iter/sec",
            "range": "stddev: 0.00009765148998395137",
            "extra": "mean: 1.1335033698456067 msec\nrounds: 776"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.6247795890167405,
            "unit": "iter/sec",
            "range": "stddev: 0.004932183525939327",
            "extra": "mean: 216.22652080001217 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9136149083578483,
            "unit": "iter/sec",
            "range": "stddev: 0.03405470182665542",
            "extra": "mean: 1.0945530669999926 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf03414b5456214ac09a0a6fa5635e0ca5337bda",
          "message": "fix loading aggregation (#25)",
          "timestamp": "2020-10-19T19:44:45+03:00",
          "tree_id": "4722fbc1fb7f728711ea2ad677142013b25670e4",
          "url": "https://github.com/mlrun/storey/commit/cf03414b5456214ac09a0a6fa5635e0ca5337bda"
        },
        "date": 1603126090010,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1168.6393157761433,
            "unit": "iter/sec",
            "range": "stddev: 0.0005704597842299665",
            "extra": "mean: 855.696010309098 usec\nrounds: 582"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 831.7972053182802,
            "unit": "iter/sec",
            "range": "stddev: 0.00023261313902165172",
            "extra": "mean: 1.2022161094149846 msec\nrounds: 786"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.8833989489378307,
            "unit": "iter/sec",
            "range": "stddev: 0.0063834697522028045",
            "extra": "mean: 257.506378599993 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8048790245569266,
            "unit": "iter/sec",
            "range": "stddev: 0.016580596616696846",
            "extra": "mean: 1.2424227361999953 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4896.109095952786,
            "unit": "iter/sec",
            "range": "stddev: 0.000026064512864651555",
            "extra": "mean: 204.24381491552512 usec\nrounds: 2588"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3257.581176506211,
            "unit": "iter/sec",
            "range": "stddev: 0.00005787469616700382",
            "extra": "mean: 306.97623353549403 usec\nrounds: 2475"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 14.089827691936932,
            "unit": "iter/sec",
            "range": "stddev: 0.0005080727223466955",
            "extra": "mean: 70.9731887333343 msec\nrounds: 15"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.816177324043156,
            "unit": "iter/sec",
            "range": "stddev: 0.0005800772403544425",
            "extra": "mean: 355.09127620000527 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1290.6976961517737,
            "unit": "iter/sec",
            "range": "stddev: 0.0002474041979213516",
            "extra": "mean: 774.7747617288762 usec\nrounds: 810"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 789.5964560052646,
            "unit": "iter/sec",
            "range": "stddev: 0.0003767489724978119",
            "extra": "mean: 1.2664697167705279 msec\nrounds: 805"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.537268910372346,
            "unit": "iter/sec",
            "range": "stddev: 0.0038570628105573787",
            "extra": "mean: 282.70398020000584 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.7227343538491663,
            "unit": "iter/sec",
            "range": "stddev: 0.01935009048462406",
            "extra": "mean: 1.383634242200003 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1270.4615819201924,
            "unit": "iter/sec",
            "range": "stddev: 0.00004349547844158417",
            "extra": "mean: 787.1154974151889 usec\nrounds: 967"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 421.07880554524394,
            "unit": "iter/sec",
            "range": "stddev: 0.0010288644005821456",
            "extra": "mean: 2.3748523716484047 msec\nrounds: 261"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8887564995627111,
            "unit": "iter/sec",
            "range": "stddev: 0.016260806734524128",
            "extra": "mean: 1.1251675802000023 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.1775699529984517,
            "unit": "iter/sec",
            "range": "stddev: 0.020397261942012194",
            "extra": "mean: 5.631583401999995 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1336.8236298789611,
            "unit": "iter/sec",
            "range": "stddev: 0.000049872247760828665",
            "extra": "mean: 748.0418341277691 usec\nrounds: 1049"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 836.4602764446977,
            "unit": "iter/sec",
            "range": "stddev: 0.00007182283296287975",
            "extra": "mean: 1.195514034749401 msec\nrounds: 777"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.110637749251056,
            "unit": "iter/sec",
            "range": "stddev: 0.010215552984739",
            "extra": "mean: 243.27125399998977 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.875479212851474,
            "unit": "iter/sec",
            "range": "stddev: 0.019403372585866215",
            "extra": "mean: 1.142231574799996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "94abeaa4415a00dc82cf9d110a29456390f2faf2",
          "message": "save aggr time when loading an aggregation (#26)\n\n* save aggr time when loading an aggregation\r\n\r\n* add tests + fix bugs\r\n\r\n* don't pop initial data\r\n\r\n* change to test to actually test 1 window + rename tests",
          "timestamp": "2020-10-22T11:28:26+03:00",
          "tree_id": "c7423f42887ed7bdec1dd284ce0797b9f514b5d2",
          "url": "https://github.com/mlrun/storey/commit/94abeaa4415a00dc82cf9d110a29456390f2faf2"
        },
        "date": 1603355560994,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1165.096421001706,
            "unit": "iter/sec",
            "range": "stddev: 0.0003859594443468905",
            "extra": "mean: 858.2980618378672 usec\nrounds: 566"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 753.1591284312436,
            "unit": "iter/sec",
            "range": "stddev: 0.00015338242685505115",
            "extra": "mean: 1.3277406622992163 msec\nrounds: 687"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 2.958917770806892,
            "unit": "iter/sec",
            "range": "stddev: 0.021148520604555902",
            "extra": "mean: 337.96140260001266 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.6501915884053222,
            "unit": "iter/sec",
            "range": "stddev: 0.030285022323057353",
            "extra": "mean: 1.5380082083999695 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4283.647135787445,
            "unit": "iter/sec",
            "range": "stddev: 0.00009973391976644109",
            "extra": "mean: 233.44593247318772 usec\nrounds: 1866"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2893.425063043567,
            "unit": "iter/sec",
            "range": "stddev: 0.00006706697128443046",
            "extra": "mean: 345.61116262264943 usec\nrounds: 2183"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 12.49625528511342,
            "unit": "iter/sec",
            "range": "stddev: 0.006388976019507539",
            "extra": "mean: 80.0239733571451 msec\nrounds: 14"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.555942470037653,
            "unit": "iter/sec",
            "range": "stddev: 0.012540764643488371",
            "extra": "mean: 391.24511279992475 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1016.8008185584221,
            "unit": "iter/sec",
            "range": "stddev: 0.00035609497972219405",
            "extra": "mean: 983.4767849791451 usec\nrounds: 679"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 679.2830993013355,
            "unit": "iter/sec",
            "range": "stddev: 0.00048783068556407824",
            "extra": "mean: 1.472140262327345 msec\nrounds: 568"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.630821269458024,
            "unit": "iter/sec",
            "range": "stddev: 0.023239363720746194",
            "extra": "mean: 380.1094402000217 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.5405966445954057,
            "unit": "iter/sec",
            "range": "stddev: 0.041713784407944925",
            "extra": "mean: 1.8498080037999898 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1167.7218508384149,
            "unit": "iter/sec",
            "range": "stddev: 0.0000882043743296227",
            "extra": "mean: 856.3683203170413 usec\nrounds: 871"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 380.10873625628136,
            "unit": "iter/sec",
            "range": "stddev: 0.0007820633628928828",
            "extra": "mean: 2.63082614161693 msec\nrounds: 346"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.7202809961029044,
            "unit": "iter/sec",
            "range": "stddev: 0.015138637831419582",
            "extra": "mean: 1.388347055399936 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.14003110763105875,
            "unit": "iter/sec",
            "range": "stddev: 0.039484122549143956",
            "extra": "mean: 7.141270371399969 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1095.4670526975458,
            "unit": "iter/sec",
            "range": "stddev: 0.0005964015206558025",
            "extra": "mean: 912.8526481353667 usec\nrounds: 1043"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 732.9446197954015,
            "unit": "iter/sec",
            "range": "stddev: 0.00019953256938245423",
            "extra": "mean: 1.3643595614074442 msec\nrounds: 627"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.4397196069913107,
            "unit": "iter/sec",
            "range": "stddev: 0.006885020178370621",
            "extra": "mean: 290.72137099997235 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6904209623948929,
            "unit": "iter/sec",
            "range": "stddev: 0.03948798623456343",
            "extra": "mean: 1.4483917124000072 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e47cc9a1dd32dc022fef3768bf47a136f6a792f0",
          "message": "Add ToDataFrame sink. (#27)\n\n* Add ToDataFrame sink.\r\n\r\n* Docu. Extra test.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-10-26T10:39:21+02:00",
          "tree_id": "9fd02e8acc44f7c49ef3c06a17c1f059c51e4d02",
          "url": "https://github.com/mlrun/storey/commit/e47cc9a1dd32dc022fef3768bf47a136f6a792f0"
        },
        "date": 1603701777349,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1282.970317674116,
            "unit": "iter/sec",
            "range": "stddev: 0.000057865041941389586",
            "extra": "mean: 779.4412592591308 usec\nrounds: 621"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 822.1580527682183,
            "unit": "iter/sec",
            "range": "stddev: 0.00007685062489930403",
            "extra": "mean: 1.2163111419184975 msec\nrounds: 761"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.960746931978405,
            "unit": "iter/sec",
            "range": "stddev: 0.0024316100245527703",
            "extra": "mean: 252.47763040000564 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8021426199651045,
            "unit": "iter/sec",
            "range": "stddev: 0.010217152203915688",
            "extra": "mean: 1.24666109879999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4766.392932794035,
            "unit": "iter/sec",
            "range": "stddev: 0.000009067357147496654",
            "extra": "mean: 209.802258038723 usec\nrounds: 2488"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3190.758060462409,
            "unit": "iter/sec",
            "range": "stddev: 0.000009990365370083385",
            "extra": "mean: 313.40514731946763 usec\nrounds: 2145"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 13.615151526458785,
            "unit": "iter/sec",
            "range": "stddev: 0.00031056439759412043",
            "extra": "mean: 73.44758507143061 msec\nrounds: 14"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.732299498126358,
            "unit": "iter/sec",
            "range": "stddev: 0.0006812846046257943",
            "extra": "mean: 365.9920886000009 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1272.1797046803702,
            "unit": "iter/sec",
            "range": "stddev: 0.00007627067200871446",
            "extra": "mean: 786.0524706698146 usec\nrounds: 716"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 795.77309427425,
            "unit": "iter/sec",
            "range": "stddev: 0.00007155843864278069",
            "extra": "mean: 1.2566396215142284 msec\nrounds: 753"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.5320823647021724,
            "unit": "iter/sec",
            "range": "stddev: 0.00523076211074574",
            "extra": "mean: 283.1191055999966 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.7031100014881574,
            "unit": "iter/sec",
            "range": "stddev: 0.033933994668915876",
            "extra": "mean: 1.4222525605999976 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1226.8947923415028,
            "unit": "iter/sec",
            "range": "stddev: 0.00017578776455874054",
            "extra": "mean: 815.065811870895 usec\nrounds: 994"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 419.2740428639715,
            "unit": "iter/sec",
            "range": "stddev: 0.0006809806154492218",
            "extra": "mean: 2.3850749098828383 msec\nrounds: 344"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8390824783865184,
            "unit": "iter/sec",
            "range": "stddev: 0.004049377244216979",
            "extra": "mean: 1.1917779547999998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.16398808417909982,
            "unit": "iter/sec",
            "range": "stddev: 0.03163928570491998",
            "extra": "mean: 6.098004041000007 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1275.0687524576927,
            "unit": "iter/sec",
            "range": "stddev: 0.00019198355265691324",
            "extra": "mean: 784.271434832437 usec\nrounds: 867"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 812.3346628749398,
            "unit": "iter/sec",
            "range": "stddev: 0.00006455640661870096",
            "extra": "mean: 1.2310197332474924 msec\nrounds: 776"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.322441104492332,
            "unit": "iter/sec",
            "range": "stddev: 0.0024384516282045174",
            "extra": "mean: 231.35075199999733 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.8617488893959522,
            "unit": "iter/sec",
            "range": "stddev: 0.01725607108653306",
            "extra": "mean: 1.1604308544000048 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "38646ff687af3623ad39cc50fdea01ef6c8051dd",
          "message": "Fix teardown of WriteCSV tests. (#30)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-10-26T14:04:34+02:00",
          "tree_id": "acd97a81dd1247ca451f205bd6ad4e9038b6ba1f",
          "url": "https://github.com/mlrun/storey/commit/38646ff687af3623ad39cc50fdea01ef6c8051dd"
        },
        "date": 1603714091270,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1273.1610220579316,
            "unit": "iter/sec",
            "range": "stddev: 0.0005645589848317338",
            "extra": "mean: 785.446603119851 usec\nrounds: 577"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 867.9434108197602,
            "unit": "iter/sec",
            "range": "stddev: 0.00015717836405256983",
            "extra": "mean: 1.1521488469571008 msec\nrounds: 575"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.762352027447235,
            "unit": "iter/sec",
            "range": "stddev: 0.004988052528068146",
            "extra": "mean: 265.7911839999997 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7298364528147468,
            "unit": "iter/sec",
            "range": "stddev: 0.0855656762899832",
            "extra": "mean: 1.3701699828000073 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5280.084767446432,
            "unit": "iter/sec",
            "range": "stddev: 0.00005672998912627222",
            "extra": "mean: 189.39089882900166 usec\nrounds: 3074"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3542.1222667707184,
            "unit": "iter/sec",
            "range": "stddev: 0.00005768952598619723",
            "extra": "mean: 282.3166239576704 usec\nrounds: 2638"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 14.801580146387982,
            "unit": "iter/sec",
            "range": "stddev: 0.0034761914483809556",
            "extra": "mean: 67.5603543750043 msec\nrounds: 16"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 3.038080763787294,
            "unit": "iter/sec",
            "range": "stddev: 0.012663683208814747",
            "extra": "mean: 329.1551732000016 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1286.54701778171,
            "unit": "iter/sec",
            "range": "stddev: 0.00021582619574310723",
            "extra": "mean: 777.2743523390384 usec\nrounds: 684"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 784.3379395530965,
            "unit": "iter/sec",
            "range": "stddev: 0.0003052329783233477",
            "extra": "mean: 1.2749606382292107 msec\nrounds: 926"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.9714498904778175,
            "unit": "iter/sec",
            "range": "stddev: 0.017060016187005235",
            "extra": "mean: 336.53604700000415 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.610074534520192,
            "unit": "iter/sec",
            "range": "stddev: 0.027094695591703535",
            "extra": "mean: 1.6391439789999993 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1281.3609256394234,
            "unit": "iter/sec",
            "range": "stddev: 0.00012817404074662496",
            "extra": "mean: 780.420239130502 usec\nrounds: 1104"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 415.38132758477303,
            "unit": "iter/sec",
            "range": "stddev: 0.000950591153442685",
            "extra": "mean: 2.4074264623652715 msec\nrounds: 372"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8374591339602022,
            "unit": "iter/sec",
            "range": "stddev: 0.02162406301205539",
            "extra": "mean: 1.194088116599994 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.17130536326853918,
            "unit": "iter/sec",
            "range": "stddev: 0.009157452804586122",
            "extra": "mean: 5.837528848599999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1253.1871966213694,
            "unit": "iter/sec",
            "range": "stddev: 0.00030410174966296363",
            "extra": "mean: 797.9653819445572 usec\nrounds: 1008"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 805.5422266584942,
            "unit": "iter/sec",
            "range": "stddev: 0.0006548589099085962",
            "extra": "mean: 1.2413998508161947 msec\nrounds: 858"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.837910566326041,
            "unit": "iter/sec",
            "range": "stddev: 0.0026298953180306016",
            "extra": "mean: 260.5584426000007 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.7871609693218322,
            "unit": "iter/sec",
            "range": "stddev: 0.03127714443565843",
            "extra": "mean: 1.2703881911999986 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d669133b5e59dccb36258fc04a7a977875fde665",
          "message": "dont save schema on QueryAggregateByKey + use getSafeEvent in joinWithV3io (#29)\n\n* dont save schema on QueryAggregateByKey + use getSafeEvent in joinWithV3io\r\n\r\n* fix test\r\n\r\n* amek read_only private in aggregate_store",
          "timestamp": "2020-10-26T16:04:43+02:00",
          "tree_id": "5fa054f92136193c3d5b70cbdca8e810645eb7b2",
          "url": "https://github.com/mlrun/storey/commit/d669133b5e59dccb36258fc04a7a977875fde665"
        },
        "date": 1603721328684,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1202.4206109659171,
            "unit": "iter/sec",
            "range": "stddev: 0.00015194016538999506",
            "extra": "mean: 831.6557375016131 usec\nrounds: 320"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 814.3044016093464,
            "unit": "iter/sec",
            "range": "stddev: 0.0002277513848846707",
            "extra": "mean: 1.2280419926794637 msec\nrounds: 683"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.878402449263845,
            "unit": "iter/sec",
            "range": "stddev: 0.022649693127362612",
            "extra": "mean: 257.8381210000032 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.71361616544766,
            "unit": "iter/sec",
            "range": "stddev: 0.04884226369788265",
            "extra": "mean: 1.4013135470000009 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4326.625064376997,
            "unit": "iter/sec",
            "range": "stddev: 0.00009350029269433167",
            "extra": "mean: 231.12702975661998 usec\nrounds: 2218"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3018.473178201136,
            "unit": "iter/sec",
            "range": "stddev: 0.00009650448280208601",
            "extra": "mean: 331.2933198220273 usec\nrounds: 2023"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 13.699788479571662,
            "unit": "iter/sec",
            "range": "stddev: 0.0017588066965485987",
            "extra": "mean: 72.99382771428498 msec\nrounds: 14"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.714881773870585,
            "unit": "iter/sec",
            "range": "stddev: 0.00808959432951005",
            "extra": "mean: 368.3401647999972 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 980.4358696375449,
            "unit": "iter/sec",
            "range": "stddev: 0.00043001861196113243",
            "extra": "mean: 1.0199545232567713 msec\nrounds: 86"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 679.6081821950019,
            "unit": "iter/sec",
            "range": "stddev: 0.00044248890060934426",
            "extra": "mean: 1.4714360806695927 msec\nrounds: 657"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.9055873953405364,
            "unit": "iter/sec",
            "range": "stddev: 0.011473991473770314",
            "extra": "mean: 344.1644886000063 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.5887734986917488,
            "unit": "iter/sec",
            "range": "stddev: 0.05850074493021843",
            "extra": "mean: 1.6984460105999915 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1195.2697029260182,
            "unit": "iter/sec",
            "range": "stddev: 0.00019309802995640923",
            "extra": "mean: 836.6312620089021 usec\nrounds: 916"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 392.18870877830506,
            "unit": "iter/sec",
            "range": "stddev: 0.0011270107041952927",
            "extra": "mean: 2.549792937984036 msec\nrounds: 387"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8088492399576118,
            "unit": "iter/sec",
            "range": "stddev: 0.032853700143827276",
            "extra": "mean: 1.2363243365999892 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.16356878702992025,
            "unit": "iter/sec",
            "range": "stddev: 0.14667041561443034",
            "extra": "mean: 6.113635848000013 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1239.9973686882029,
            "unit": "iter/sec",
            "range": "stddev: 0.0002917909320366227",
            "extra": "mean: 806.4533242178595 usec\nrounds: 1024"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 789.0817967583123,
            "unit": "iter/sec",
            "range": "stddev: 0.00030494691291597047",
            "extra": "mean: 1.2672957405787044 msec\nrounds: 690"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.384449215878483,
            "unit": "iter/sec",
            "range": "stddev: 0.01583740466081739",
            "extra": "mean: 228.07881920001591 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.7644279270146612,
            "unit": "iter/sec",
            "range": "stddev: 0.02812853718209832",
            "extra": "mean: 1.3081678006000175 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe972539c113cd033e8533b3f4b99d18383915a1",
          "message": "Add ToDataFrame step, rename existing ToDataFrame as ReduceToDataFrame. (#31)\n\n* Add ToDataFrame step, rename existing ToDataFrame as ReduceToDataFrame.\r\n\r\n* Remove unused code.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-10-27T14:30:49+02:00",
          "tree_id": "d22879ea8399b3ad05086c049a5725e2c33fed23",
          "url": "https://github.com/mlrun/storey/commit/fe972539c113cd033e8533b3f4b99d18383915a1"
        },
        "date": 1603802096138,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1131.6267183258517,
            "unit": "iter/sec",
            "range": "stddev: 0.00009531042852426634",
            "extra": "mean: 883.6836244724033 usec\nrounds: 474"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 722.0369762986672,
            "unit": "iter/sec",
            "range": "stddev: 0.0004211442183361658",
            "extra": "mean: 1.3849706217626652 msec\nrounds: 579"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.10092586129575,
            "unit": "iter/sec",
            "range": "stddev: 0.005795236755009639",
            "extra": "mean: 322.48433039999895 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.6249202463502056,
            "unit": "iter/sec",
            "range": "stddev: 0.014522534250840782",
            "extra": "mean: 1.6002041953999993 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3598.105228048009,
            "unit": "iter/sec",
            "range": "stddev: 0.00002539791281256478",
            "extra": "mean: 277.92405630740967 usec\nrounds: 2291"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2452.386093538698,
            "unit": "iter/sec",
            "range": "stddev: 0.00003829743967072369",
            "extra": "mean: 407.76613545261085 usec\nrounds: 2045"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 11.417344297230475,
            "unit": "iter/sec",
            "range": "stddev: 0.00043707635548137383",
            "extra": "mean: 87.58604224999782 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.2672073082466238,
            "unit": "iter/sec",
            "range": "stddev: 0.0066551371769279334",
            "extra": "mean: 441.07126700000094 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1131.9299423687642,
            "unit": "iter/sec",
            "range": "stddev: 0.0003245522237117362",
            "extra": "mean: 883.4469012342961 usec\nrounds: 810"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 715.0133711334961,
            "unit": "iter/sec",
            "range": "stddev: 0.0001662615202715062",
            "extra": "mean: 1.398575244005186 msec\nrounds: 709"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.646608754321973,
            "unit": "iter/sec",
            "range": "stddev: 0.016501262808322884",
            "extra": "mean: 377.8420208000057 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.5339362728532874,
            "unit": "iter/sec",
            "range": "stddev: 0.08200530874695759",
            "extra": "mean: 1.8728826844000082 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1094.0570255868515,
            "unit": "iter/sec",
            "range": "stddev: 0.00017456968502559112",
            "extra": "mean: 914.0291379817252 usec\nrounds: 674"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 387.8187646951106,
            "unit": "iter/sec",
            "range": "stddev: 0.0010230599789751386",
            "extra": "mean: 2.578524019553733 msec\nrounds: 358"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.7785749318605366,
            "unit": "iter/sec",
            "range": "stddev: 0.008190617632782518",
            "extra": "mean: 1.284397890400004 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.1540977317784483,
            "unit": "iter/sec",
            "range": "stddev: 0.04793621480736654",
            "extra": "mean: 6.4893881853999975 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1153.098659657181,
            "unit": "iter/sec",
            "range": "stddev: 0.00011212154296916435",
            "extra": "mean: 867.2284818172474 usec\nrounds: 880"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 722.7244043672563,
            "unit": "iter/sec",
            "range": "stddev: 0.0001394381690980199",
            "extra": "mean: 1.383653290185348 msec\nrounds: 703"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.297433615199183,
            "unit": "iter/sec",
            "range": "stddev: 0.008180414941857107",
            "extra": "mean: 303.26615080000465 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6395566375632181,
            "unit": "iter/sec",
            "range": "stddev: 0.03297234877075938",
            "extra": "mean: 1.563583178199997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1153c023523cde0406eec9f34f8c8277015c4a83",
          "message": "Add MapClass. (#34)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-01T15:10:09+02:00",
          "tree_id": "95cefc31b6e30a28eac228ba265fb64f53896a02",
          "url": "https://github.com/mlrun/storey/commit/1153c023523cde0406eec9f34f8c8277015c4a83"
        },
        "date": 1604236419123,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1400.2561370263554,
            "unit": "iter/sec",
            "range": "stddev: 0.000059966074745171405",
            "extra": "mean: 714.1550560339933 usec\nrounds: 464"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 893.0145018363331,
            "unit": "iter/sec",
            "range": "stddev: 0.0001097144549055116",
            "extra": "mean: 1.1198026436789879 msec\nrounds: 783"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.186419887708226,
            "unit": "iter/sec",
            "range": "stddev: 0.007704147325577884",
            "extra": "mean: 238.8675830000011 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8211366708028747,
            "unit": "iter/sec",
            "range": "stddev: 0.031909800865640665",
            "extra": "mean: 1.2178240670000036 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5471.056867973543,
            "unit": "iter/sec",
            "range": "stddev: 0.000023620147894039054",
            "extra": "mean: 182.7800412483001 usec\nrounds: 2788"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3570.6280592810426,
            "unit": "iter/sec",
            "range": "stddev: 0.00003090250704503025",
            "extra": "mean: 280.062774222794 usec\nrounds: 2250"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 15.710568884135405,
            "unit": "iter/sec",
            "range": "stddev: 0.0020338670954341944",
            "extra": "mean: 63.651418823528665 msec\nrounds: 17"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 3.1906597412912143,
            "unit": "iter/sec",
            "range": "stddev: 0.0008640987925546846",
            "extra": "mean: 313.4148047999986 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1401.9357314989234,
            "unit": "iter/sec",
            "range": "stddev: 0.0001351440994499611",
            "extra": "mean: 713.2994598338818 usec\nrounds: 722"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 866.8708389840295,
            "unit": "iter/sec",
            "range": "stddev: 0.00009151422734404479",
            "extra": "mean: 1.15357439081928 msec\nrounds: 806"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.8165800335440068,
            "unit": "iter/sec",
            "range": "stddev: 0.004584550921428092",
            "extra": "mean: 262.0146809999994 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.7704393096085168,
            "unit": "iter/sec",
            "range": "stddev: 0.011974576094674685",
            "extra": "mean: 1.2979607705999967 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1323.5998644383546,
            "unit": "iter/sec",
            "range": "stddev: 0.00011646932153815126",
            "extra": "mean: 755.5153387873243 usec\nrounds: 1039"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 456.7521951753041,
            "unit": "iter/sec",
            "range": "stddev: 0.0010511910447487068",
            "extra": "mean: 2.189370977442581 msec\nrounds: 399"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.937477302678437,
            "unit": "iter/sec",
            "range": "stddev: 0.00648893932315864",
            "extra": "mean: 1.066692491799995 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.18282774693692494,
            "unit": "iter/sec",
            "range": "stddev: 0.04423502381441886",
            "extra": "mean: 5.469629291799987 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1372.8020959983974,
            "unit": "iter/sec",
            "range": "stddev: 0.00006209658490020658",
            "extra": "mean: 728.4371162565354 usec\nrounds: 1015"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 858.6429160014692,
            "unit": "iter/sec",
            "range": "stddev: 0.00021643924527594917",
            "extra": "mean: 1.1646284868415417 msec\nrounds: 912"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.471805790376031,
            "unit": "iter/sec",
            "range": "stddev: 0.0035704930463624656",
            "extra": "mean: 223.62330720000045 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9181819689973804,
            "unit": "iter/sec",
            "range": "stddev: 0.012120578432561997",
            "extra": "mean: 1.0891087319999997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04f6e901c4e025e958b3abe65a869b0229852db6",
          "message": "Add context attribute to Flow. (#33)\n\n* Add context attribute to Flow.\r\n\r\n* Make context and name public attributes.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-01T15:10:19+02:00",
          "tree_id": "54de3b8ae431ca0283498001a3a47a06596bcb93",
          "url": "https://github.com/mlrun/storey/commit/04f6e901c4e025e958b3abe65a869b0229852db6"
        },
        "date": 1604236475103,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1227.7641064467862,
            "unit": "iter/sec",
            "range": "stddev: 0.00025989591354896836",
            "extra": "mean: 814.48870735768 usec\nrounds: 598"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 801.1218442529685,
            "unit": "iter/sec",
            "range": "stddev: 0.0002348791065134633",
            "extra": "mean: 1.2482495729878416 msec\nrounds: 733"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.530041617157376,
            "unit": "iter/sec",
            "range": "stddev: 0.012927507924009705",
            "extra": "mean: 283.2827791999989 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7063131623891596,
            "unit": "iter/sec",
            "range": "stddev: 0.015219012061688766",
            "extra": "mean: 1.4158025834000056 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4553.2037637741905,
            "unit": "iter/sec",
            "range": "stddev: 0.000028760174981437416",
            "extra": "mean: 219.62557616158415 usec\nrounds: 2324"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3102.343917502596,
            "unit": "iter/sec",
            "range": "stddev: 0.00001302446877834793",
            "extra": "mean: 322.33692543185396 usec\nrounds: 2025"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 13.492655131986858,
            "unit": "iter/sec",
            "range": "stddev: 0.00010848824605480822",
            "extra": "mean: 74.11439707143431 msec\nrounds: 14"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.71192383891236,
            "unit": "iter/sec",
            "range": "stddev: 0.00047726296885257027",
            "extra": "mean: 368.74191879999785 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1210.985221952549,
            "unit": "iter/sec",
            "range": "stddev: 0.00019234299864371313",
            "extra": "mean: 825.773908609418 usec\nrounds: 755"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 764.0328133375622,
            "unit": "iter/sec",
            "range": "stddev: 0.0003423315572304191",
            "extra": "mean: 1.3088443094893407 msec\nrounds: 685"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.3033497787562833,
            "unit": "iter/sec",
            "range": "stddev: 0.0027052367176398154",
            "extra": "mean: 302.7230136000014 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.664132079639254,
            "unit": "iter/sec",
            "range": "stddev: 0.028887422039558557",
            "extra": "mean: 1.5057245849999958 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1194.8122136146471,
            "unit": "iter/sec",
            "range": "stddev: 0.00007098293239903811",
            "extra": "mean: 836.9516051185276 usec\nrounds: 547"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 397.6133059807107,
            "unit": "iter/sec",
            "range": "stddev: 0.0014842642761847744",
            "extra": "mean: 2.515006376694327 msec\nrounds: 369"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.805842531772666,
            "unit": "iter/sec",
            "range": "stddev: 0.0366225240962958",
            "extra": "mean: 1.240937230999998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.1594090264563739,
            "unit": "iter/sec",
            "range": "stddev: 0.06690333096785954",
            "extra": "mean: 6.2731704862000015 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1236.1566616838024,
            "unit": "iter/sec",
            "range": "stddev: 0.00010889998822892106",
            "extra": "mean: 808.9589539871694 usec\nrounds: 978"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 797.6663212514203,
            "unit": "iter/sec",
            "range": "stddev: 0.00010014850907433567",
            "extra": "mean: 1.2536570409932164 msec\nrounds: 805"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.705700499830727,
            "unit": "iter/sec",
            "range": "stddev: 0.004319607939451753",
            "extra": "mean: 269.85451200000625 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.7577175717668878,
            "unit": "iter/sec",
            "range": "stddev: 0.03270103248740236",
            "extra": "mean: 1.319752949199983 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8125f684313300cc4003877148a9495cb5eb9764",
          "message": "Add WriteToParquet. (#32)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-01T15:22:33+02:00",
          "tree_id": "ff66b9bba98295779c25490d372b09bd84852dd6",
          "url": "https://github.com/mlrun/storey/commit/8125f684313300cc4003877148a9495cb5eb9764"
        },
        "date": 1604237177899,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1316.1596621561064,
            "unit": "iter/sec",
            "range": "stddev: 0.00011752645701163628",
            "extra": "mean: 759.7862392787665 usec\nrounds: 443"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 802.409982660166,
            "unit": "iter/sec",
            "range": "stddev: 0.0002439140631455249",
            "extra": "mean: 1.2462457118053036 msec\nrounds: 576"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.2785749268061672,
            "unit": "iter/sec",
            "range": "stddev: 0.0103784847941591",
            "extra": "mean: 305.01056780000226 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.6486222538039769,
            "unit": "iter/sec",
            "range": "stddev: 0.010731050477877887",
            "extra": "mean: 1.5417294028000073 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4104.501847791697,
            "unit": "iter/sec",
            "range": "stddev: 0.00005016895602591308",
            "extra": "mean: 243.63492503676656 usec\nrounds: 2708"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2842.5286159192087,
            "unit": "iter/sec",
            "range": "stddev: 0.00006109679042364014",
            "extra": "mean: 351.79944870198705 usec\nrounds: 2427"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 13.087714569783108,
            "unit": "iter/sec",
            "range": "stddev: 0.002381160890464544",
            "extra": "mean: 76.40753430769328 msec\nrounds: 13"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.614546150706861,
            "unit": "iter/sec",
            "range": "stddev: 0.008370609592133553",
            "extra": "mean: 382.47555880000164 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1313.7203744821531,
            "unit": "iter/sec",
            "range": "stddev: 0.00014106560928813506",
            "extra": "mean: 761.1969939905846 usec\nrounds: 832"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 818.3550276925238,
            "unit": "iter/sec",
            "range": "stddev: 0.0003429755863297282",
            "extra": "mean: 1.221963531915545 msec\nrounds: 799"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.148967276059934,
            "unit": "iter/sec",
            "range": "stddev: 0.011905684743954849",
            "extra": "mean: 317.5644305999981 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.5860018851258733,
            "unit": "iter/sec",
            "range": "stddev: 0.03397321736103109",
            "extra": "mean: 1.7064791519999971 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1199.2990064560677,
            "unit": "iter/sec",
            "range": "stddev: 0.00014869194629330194",
            "extra": "mean: 833.8204189420645 usec\nrounds: 1172"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 465.5425480998285,
            "unit": "iter/sec",
            "range": "stddev: 0.0008726447570125145",
            "extra": "mean: 2.148031375610303 msec\nrounds: 410"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.9006546541290159,
            "unit": "iter/sec",
            "range": "stddev: 0.030643001592889924",
            "extra": "mean: 1.1103034836000005 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.17063256538427615,
            "unit": "iter/sec",
            "range": "stddev: 0.3010022069980963",
            "extra": "mean: 5.860546008600011 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1209.6364230128925,
            "unit": "iter/sec",
            "range": "stddev: 0.00015695073185244114",
            "extra": "mean: 826.6946836052257 usec\nrounds: 1043"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 788.8451094778975,
            "unit": "iter/sec",
            "range": "stddev: 0.00037888348791594137",
            "extra": "mean: 1.2676759835170388 msec\nrounds: 910"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.3692733315294356,
            "unit": "iter/sec",
            "range": "stddev: 0.017697389862056018",
            "extra": "mean: 296.79990360000374 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.680492445538773,
            "unit": "iter/sec",
            "range": "stddev: 0.04577029062777959",
            "extra": "mean: 1.4695240285999944 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1e9f20d91cb3a5b5e2a64e75ddeb571bb1122434",
          "message": "Allow a single parquet file to be written on flow termination. (#35)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-02T14:26:51+02:00",
          "tree_id": "850e3fef76330fe49f12859446ec3edb12bce310",
          "url": "https://github.com/mlrun/storey/commit/1e9f20d91cb3a5b5e2a64e75ddeb571bb1122434"
        },
        "date": 1604320255043,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1358.7021794381174,
            "unit": "iter/sec",
            "range": "stddev: 0.00015912754219941377",
            "extra": "mean: 735.9964642240757 usec\nrounds: 573"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 826.9370108928148,
            "unit": "iter/sec",
            "range": "stddev: 0.00020265935897299675",
            "extra": "mean: 1.2092819487186035 msec\nrounds: 819"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.1898726778971174,
            "unit": "iter/sec",
            "range": "stddev: 0.008185624844697521",
            "extra": "mean: 313.4921362000057 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.6288774988443768,
            "unit": "iter/sec",
            "range": "stddev: 0.06837032937514279",
            "extra": "mean: 1.5901348066000083 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4193.342071181542,
            "unit": "iter/sec",
            "range": "stddev: 0.00012642362162291194",
            "extra": "mean: 238.47327096742998 usec\nrounds: 2945"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2561.1719603494785,
            "unit": "iter/sec",
            "range": "stddev: 0.00010947052318185496",
            "extra": "mean: 390.44625487136267 usec\nrounds: 2566"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 12.3380554181239,
            "unit": "iter/sec",
            "range": "stddev: 0.0036527468931747183",
            "extra": "mean: 81.05004930769374 msec\nrounds: 13"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.21241057170426,
            "unit": "iter/sec",
            "range": "stddev: 0.04248596453583806",
            "extra": "mean: 451.99567060000163 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1077.7310000331254,
            "unit": "iter/sec",
            "range": "stddev: 0.00041272613551920586",
            "extra": "mean: 927.8753232200464 usec\nrounds: 857"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 693.752598888891,
            "unit": "iter/sec",
            "range": "stddev: 0.0006147610221943053",
            "extra": "mean: 1.4414360416113647 msec\nrounds: 745"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.5391766273601006,
            "unit": "iter/sec",
            "range": "stddev: 0.03867273943920519",
            "extra": "mean: 393.82845180001027 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.5499101320694799,
            "unit": "iter/sec",
            "range": "stddev: 0.08668276159441968",
            "extra": "mean: 1.8184789508000052 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1145.5502493035915,
            "unit": "iter/sec",
            "range": "stddev: 0.00023019201304180168",
            "extra": "mean: 872.942937778526 usec\nrounds: 900"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 421.24632757584885,
            "unit": "iter/sec",
            "range": "stddev: 0.0009294719705372308",
            "extra": "mean: 2.3739079358975346 msec\nrounds: 312"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.7642656104600761,
            "unit": "iter/sec",
            "range": "stddev: 0.04635676991169138",
            "extra": "mean: 1.3084456323999916 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.15933145179019503,
            "unit": "iter/sec",
            "range": "stddev: 0.27151008685945244",
            "extra": "mean: 6.276224742599993 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1233.8709119034756,
            "unit": "iter/sec",
            "range": "stddev: 0.0002902414704583571",
            "extra": "mean: 810.4575530168822 usec\nrounds: 1094"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 782.5919392206271,
            "unit": "iter/sec",
            "range": "stddev: 0.00021073003402242985",
            "extra": "mean: 1.27780513685828 msec\nrounds: 643"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.283412754841263,
            "unit": "iter/sec",
            "range": "stddev: 0.002483669508114523",
            "extra": "mean: 304.56116080000584 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6473292859756736,
            "unit": "iter/sec",
            "range": "stddev: 0.07151918619016355",
            "extra": "mean: 1.5448088348000055 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1e41b2bee076db00e97a0ee7cee5f491f4c4c32",
          "message": "fix load cache by key + fix persisting cache without aggregates (#36)",
          "timestamp": "2020-11-02T17:32:01+02:00",
          "tree_id": "36f1cf2760715aa3a1230e607cce27d46647549a",
          "url": "https://github.com/mlrun/storey/commit/d1e41b2bee076db00e97a0ee7cee5f491f4c4c32"
        },
        "date": 1604331654765,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1284.273055744607,
            "unit": "iter/sec",
            "range": "stddev: 0.000042459723310554146",
            "extra": "mean: 778.6506113532151 usec\nrounds: 458"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 828.3888702883997,
            "unit": "iter/sec",
            "range": "stddev: 0.00006470422583956733",
            "extra": "mean: 1.2071625245904798 msec\nrounds: 671"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.9339157635671755,
            "unit": "iter/sec",
            "range": "stddev: 0.003277133610656683",
            "extra": "mean: 254.19964739998025 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7737406014377135,
            "unit": "iter/sec",
            "range": "stddev: 0.04507154876329163",
            "extra": "mean: 1.2924228070000026 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4589.057920841476,
            "unit": "iter/sec",
            "range": "stddev: 0.00002717226484418237",
            "extra": "mean: 217.90964883194027 usec\nrounds: 2523"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3009.320284069712,
            "unit": "iter/sec",
            "range": "stddev: 0.0000934808898448619",
            "extra": "mean: 332.3009535720242 usec\nrounds: 2240"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 13.215659206130097,
            "unit": "iter/sec",
            "range": "stddev: 0.0015414587567653922",
            "extra": "mean: 75.6678107692236 msec\nrounds: 13"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.6461340508890823,
            "unit": "iter/sec",
            "range": "stddev: 0.0025355662831699254",
            "extra": "mean: 377.9098038000029 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1253.5084521057638,
            "unit": "iter/sec",
            "range": "stddev: 0.00009706244883040877",
            "extra": "mean: 797.7608753416094 usec\nrounds: 730"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 789.5235377003784,
            "unit": "iter/sec",
            "range": "stddev: 0.00013586027981137108",
            "extra": "mean: 1.2665866845625273 msec\nrounds: 745"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.43001505566009,
            "unit": "iter/sec",
            "range": "stddev: 0.006041464366965065",
            "extra": "mean: 291.5439097999979 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6867196123990157,
            "unit": "iter/sec",
            "range": "stddev: 0.02162747465327752",
            "extra": "mean: 1.4561983987999951 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1181.2438891286745,
            "unit": "iter/sec",
            "range": "stddev: 0.00017794679644105656",
            "extra": "mean: 846.5652260327322 usec\nrounds: 991"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 417.334352906506,
            "unit": "iter/sec",
            "range": "stddev: 0.001112722265869441",
            "extra": "mean: 2.3961602802058968 msec\nrounds: 389"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8013219637935275,
            "unit": "iter/sec",
            "range": "stddev: 0.05805244065132203",
            "extra": "mean: 1.2479378392000058 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.16330655494262297,
            "unit": "iter/sec",
            "range": "stddev: 0.014850214872514972",
            "extra": "mean: 6.123452915600024 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1292.9839240654196,
            "unit": "iter/sec",
            "range": "stddev: 0.00009804635256148504",
            "extra": "mean: 773.4048207310923 usec\nrounds: 1071"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 813.5834660322407,
            "unit": "iter/sec",
            "range": "stddev: 0.00013053092561746536",
            "extra": "mean: 1.229130189772529 msec\nrounds: 743"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.193184737343536,
            "unit": "iter/sec",
            "range": "stddev: 0.0012379048353882368",
            "extra": "mean: 238.48221880000438 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.853890940894976,
            "unit": "iter/sec",
            "range": "stddev: 0.017754049716098685",
            "extra": "mean: 1.1711097426000152 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dinaleventol@gmail.com",
            "name": "Dina Nimrodi",
            "username": "dinal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5954cd29d0b6983eda94b0c946817d86bcff33ea",
          "message": "Merge pull request #39 from dinal/frames_env_var\n\nadd framesd env var",
          "timestamp": "2020-11-03T15:21:27+02:00",
          "tree_id": "71cf8fb34cdf7939f16cad57296a9da78c77b89f",
          "url": "https://github.com/mlrun/storey/commit/5954cd29d0b6983eda94b0c946817d86bcff33ea"
        },
        "date": 1604409935709,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1182.0816102524243,
            "unit": "iter/sec",
            "range": "stddev: 0.00025771434523316365",
            "extra": "mean: 845.9652796615775 usec\nrounds: 590"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 737.5992108900402,
            "unit": "iter/sec",
            "range": "stddev: 0.00029623308890134285",
            "extra": "mean: 1.3557498235299466 msec\nrounds: 731"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.0569116229499316,
            "unit": "iter/sec",
            "range": "stddev: 0.01578142287212944",
            "extra": "mean: 327.1275467999942 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.6060021557937629,
            "unit": "iter/sec",
            "range": "stddev: 0.035422858719445824",
            "extra": "mean: 1.6501591462000078 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3807.1356409661157,
            "unit": "iter/sec",
            "range": "stddev: 0.000053281831449978495",
            "extra": "mean: 262.66466296594456 usec\nrounds: 2522"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2597.4979629042105,
            "unit": "iter/sec",
            "range": "stddev: 0.00014799046369353693",
            "extra": "mean: 384.9858649675013 usec\nrounds: 2629"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 11.572359820864422,
            "unit": "iter/sec",
            "range": "stddev: 0.004285527091356674",
            "extra": "mean: 86.41279872727833 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.209312655556664,
            "unit": "iter/sec",
            "range": "stddev: 0.008195911042563453",
            "extra": "mean: 452.62946260000376 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1143.0011483447156,
            "unit": "iter/sec",
            "range": "stddev: 0.0003091136865499856",
            "extra": "mean: 874.8897596893856 usec\nrounds: 903"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 740.1396500449346,
            "unit": "iter/sec",
            "range": "stddev: 0.0002855289865459786",
            "extra": "mean: 1.3510963774732094 msec\nrounds: 657"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.789968634073391,
            "unit": "iter/sec",
            "range": "stddev: 0.008214113208040857",
            "extra": "mean: 358.42696859999705 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.5561329636947415,
            "unit": "iter/sec",
            "range": "stddev: 0.07017264832458099",
            "extra": "mean: 1.7981311399999924 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1044.2644083170733,
            "unit": "iter/sec",
            "range": "stddev: 0.0007821545006962773",
            "extra": "mean: 957.6118768728224 usec\nrounds: 934"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 391.550603909603,
            "unit": "iter/sec",
            "range": "stddev: 0.001229363140946076",
            "extra": "mean: 2.5539483019948785 msec\nrounds: 351"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.7833165341755014,
            "unit": "iter/sec",
            "range": "stddev: 0.05435840101723417",
            "extra": "mean: 1.276623122799998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.1567086932501199,
            "unit": "iter/sec",
            "range": "stddev: 0.09312235575424385",
            "extra": "mean: 6.381266918 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1124.652164075349,
            "unit": "iter/sec",
            "range": "stddev: 0.0004033331422297316",
            "extra": "mean: 889.1638072133762 usec\nrounds: 804"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 649.5280910587398,
            "unit": "iter/sec",
            "range": "stddev: 0.0010342548966239837",
            "extra": "mean: 1.5395792942072544 msec\nrounds: 656"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.2595012131449876,
            "unit": "iter/sec",
            "range": "stddev: 0.011539677475354101",
            "extra": "mean: 306.795406599997 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6456687520536768,
            "unit": "iter/sec",
            "range": "stddev: 0.04168353008484943",
            "extra": "mean: 1.548781781399987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dinaleventol@gmail.com",
            "name": "Dina Nimrodi",
            "username": "dinal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "669825ed9224e5a4343598ee70f8ff83c51e899c",
          "message": "WriteToTSDB (#38)\n\n* Add TsdbWriter\r\n\r\n* update env var name\r\n\r\n* remove framesClient wrapper\r\n\r\n* lint\r\n\r\n* rename aggr_granularity\r\n\r\nCo-authored-by: Dina Nimrodi <dinan@iguazio.com>",
          "timestamp": "2020-11-03T17:39:30+02:00",
          "tree_id": "306b12bb64cb3962f45535c5688858a6bd565e3e",
          "url": "https://github.com/mlrun/storey/commit/669825ed9224e5a4343598ee70f8ff83c51e899c"
        },
        "date": 1604418237960,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1291.153789422024,
            "unit": "iter/sec",
            "range": "stddev: 0.00011587112815481585",
            "extra": "mean: 774.5010766282483 usec\nrounds: 522"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 836.965063404317,
            "unit": "iter/sec",
            "range": "stddev: 0.0001196598035335089",
            "extra": "mean: 1.194793001194752 msec\nrounds: 837"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.674988854346818,
            "unit": "iter/sec",
            "range": "stddev: 0.010436354103380856",
            "extra": "mean: 272.1096687999989 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7215309494828279,
            "unit": "iter/sec",
            "range": "stddev: 0.04492461028718598",
            "extra": "mean: 1.3859419345999924 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4506.117228328027,
            "unit": "iter/sec",
            "range": "stddev: 0.00006516856471644419",
            "extra": "mean: 221.9205469652296 usec\nrounds: 2587"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3054.761381869875,
            "unit": "iter/sec",
            "range": "stddev: 0.00010060827290282845",
            "extra": "mean: 327.35781129584717 usec\nrounds: 2284"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 13.940848263329569,
            "unit": "iter/sec",
            "range": "stddev: 0.0026284410143380026",
            "extra": "mean: 71.73164653333401 msec\nrounds: 15"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.8649072715319948,
            "unit": "iter/sec",
            "range": "stddev: 0.007728480561859589",
            "extra": "mean: 349.0514370000028 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1301.7207180525654,
            "unit": "iter/sec",
            "range": "stddev: 0.0002265953157633917",
            "extra": "mean: 768.2139387748598 usec\nrounds: 833"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 790.1945378552759,
            "unit": "iter/sec",
            "range": "stddev: 0.00018036279702792848",
            "extra": "mean: 1.265511152119796 msec\nrounds: 802"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.317160578851426,
            "unit": "iter/sec",
            "range": "stddev: 0.010466797212117128",
            "extra": "mean: 301.46264440000436 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6904236012162467,
            "unit": "iter/sec",
            "range": "stddev: 0.007822288479915203",
            "extra": "mean: 1.4483861765999961 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1207.9131579471434,
            "unit": "iter/sec",
            "range": "stddev: 0.00031971081453178356",
            "extra": "mean: 827.8740846730296 usec\nrounds: 933"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 416.4018746343772,
            "unit": "iter/sec",
            "range": "stddev: 0.0013908302642843644",
            "extra": "mean: 2.4015261719896257 msec\nrounds: 407"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8259844315920238,
            "unit": "iter/sec",
            "range": "stddev: 0.034407714615745925",
            "extra": "mean: 1.2106765717999963 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.16335520595701927,
            "unit": "iter/sec",
            "range": "stddev: 0.049669752575189755",
            "extra": "mean: 6.121629207599983 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1298.44856029704,
            "unit": "iter/sec",
            "range": "stddev: 0.00012073740836642552",
            "extra": "mean: 770.1498777673831 usec\nrounds: 1039"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 815.7349872508817,
            "unit": "iter/sec",
            "range": "stddev: 0.00023397533245682025",
            "extra": "mean: 1.2258883284755409 msec\nrounds: 755"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.162798129798882,
            "unit": "iter/sec",
            "range": "stddev: 0.00658648597824703",
            "extra": "mean: 240.22303479998754 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.818973076673525,
            "unit": "iter/sec",
            "range": "stddev: 0.016671116953582792",
            "extra": "mean: 1.2210413607999953 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f093891484be23008387e4f9ce3837a4a24b93e6",
          "message": "Fuse ToDataFrame and Batch into parquet writer. (#42)\n\n* Fuse ToDataFrame into WriteToParquet.\r\n\r\n* Fuse batching functionality into parquet writer.\r\n\r\n* Replace function parameters with multiple inheritance.\r\n\r\n* Refactoring.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-05T11:50:42+02:00",
          "tree_id": "c080340ae1641883622f521fe4394dafab12bd45",
          "url": "https://github.com/mlrun/storey/commit/f093891484be23008387e4f9ce3837a4a24b93e6"
        },
        "date": 1604570098348,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1156.4360658186774,
            "unit": "iter/sec",
            "range": "stddev: 0.0001465921548945403",
            "extra": "mean: 864.7257116562415 usec\nrounds: 489"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 704.1724178943765,
            "unit": "iter/sec",
            "range": "stddev: 0.0007780488809397501",
            "extra": "mean: 1.4201067445814055 msec\nrounds: 646"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 2.8908336684594906,
            "unit": "iter/sec",
            "range": "stddev: 0.021525431056375395",
            "extra": "mean: 345.9209745999999 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.57432236806204,
            "unit": "iter/sec",
            "range": "stddev: 0.03565468252386451",
            "extra": "mean: 1.7411824014000046 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4587.02802382206,
            "unit": "iter/sec",
            "range": "stddev: 0.00005274011993384902",
            "extra": "mean: 218.0060803654667 usec\nrounds: 2190"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3038.3629696103803,
            "unit": "iter/sec",
            "range": "stddev: 0.00012988451564252586",
            "extra": "mean: 329.12460097821474 usec\nrounds: 2045"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 13.406368791829154,
            "unit": "iter/sec",
            "range": "stddev: 0.001936490123454802",
            "extra": "mean: 74.5914136428557 msec\nrounds: 14"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.725745597575103,
            "unit": "iter/sec",
            "range": "stddev: 0.003528406416369566",
            "extra": "mean: 366.87209579999944 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1078.7102156146436,
            "unit": "iter/sec",
            "range": "stddev: 0.00047953725085263195",
            "extra": "mean: 927.0330303029579 usec\nrounds: 693"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 673.1362950561248,
            "unit": "iter/sec",
            "range": "stddev: 0.0003408777126820379",
            "extra": "mean: 1.485583242717022 msec\nrounds: 103"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.65484807735681,
            "unit": "iter/sec",
            "range": "stddev: 0.03436925505094966",
            "extra": "mean: 376.66938780000123 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.5286488684017538,
            "unit": "iter/sec",
            "range": "stddev: 0.08779427082395029",
            "extra": "mean: 1.8916147555999998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1079.0668166484604,
            "unit": "iter/sec",
            "range": "stddev: 0.0002489920408859704",
            "extra": "mean: 926.7266721313524 usec\nrounds: 854"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 330.3067834070952,
            "unit": "iter/sec",
            "range": "stddev: 0.0025768124760714235",
            "extra": "mean: 3.0274885356124335 msec\nrounds: 351"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.7478108348564366,
            "unit": "iter/sec",
            "range": "stddev: 0.027621521062926827",
            "extra": "mean: 1.3372365756000022 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.14488554329054867,
            "unit": "iter/sec",
            "range": "stddev: 0.050150504120389704",
            "extra": "mean: 6.901999863399988 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1166.4843535764546,
            "unit": "iter/sec",
            "range": "stddev: 0.00013046497100113895",
            "extra": "mean: 857.2768223885631 usec\nrounds: 670"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 637.4688496765017,
            "unit": "iter/sec",
            "range": "stddev: 0.000571948644366739",
            "extra": "mean: 1.5687041029651458 msec\nrounds: 641"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 2.9285473461644456,
            "unit": "iter/sec",
            "range": "stddev: 0.008843334398520364",
            "extra": "mean: 341.4662225999905 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.5953741039159504,
            "unit": "iter/sec",
            "range": "stddev: 0.0418184163289018",
            "extra": "mean: 1.6796162168000024 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e492f84c153b942634ef8376f573a2610e5554b5",
          "message": "rename Cache->Table (#41)\n\n* rename Cache->Table\r\n\r\n* rename cache->table variables in test",
          "timestamp": "2020-11-05T11:51:08+02:00",
          "tree_id": "fee1a41149cf8903b3252a7d3eacb8a2c70f84a1",
          "url": "https://github.com/mlrun/storey/commit/e492f84c153b942634ef8376f573a2610e5554b5"
        },
        "date": 1604570118533,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1129.9724642678725,
            "unit": "iter/sec",
            "range": "stddev: 0.00045426498915494124",
            "extra": "mean: 884.9773172551743 usec\nrounds: 539"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 679.9964165202588,
            "unit": "iter/sec",
            "range": "stddev: 0.000827672395331368",
            "extra": "mean: 1.4705959850748824 msec\nrounds: 737"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 2.7436967730199275,
            "unit": "iter/sec",
            "range": "stddev: 0.010842234695368332",
            "extra": "mean: 364.4717630000059 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.5284761657159945,
            "unit": "iter/sec",
            "range": "stddev: 0.03976863732050526",
            "extra": "mean: 1.8922329234000017 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3427.330314622437,
            "unit": "iter/sec",
            "range": "stddev: 0.00010297484269387332",
            "extra": "mean: 291.77228577402593 usec\nrounds: 2397"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2349.16459349877,
            "unit": "iter/sec",
            "range": "stddev: 0.00022791091283834352",
            "extra": "mean: 425.6832419352244 usec\nrounds: 2046"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 11.391755369131355,
            "unit": "iter/sec",
            "range": "stddev: 0.0032431325694437783",
            "extra": "mean: 87.78278391666798 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.311462568070032,
            "unit": "iter/sec",
            "range": "stddev: 0.0054600072505941",
            "extra": "mean: 432.62651699999424 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1105.8939017639666,
            "unit": "iter/sec",
            "range": "stddev: 0.0002709547487307384",
            "extra": "mean: 904.2458760329001 usec\nrounds: 847"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 685.0216447246453,
            "unit": "iter/sec",
            "range": "stddev: 0.0005819386673925871",
            "extra": "mean: 1.4598078873872151 msec\nrounds: 666"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.682573928031475,
            "unit": "iter/sec",
            "range": "stddev: 0.014100312802357498",
            "extra": "mean: 372.7763062000008 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.560390863400944,
            "unit": "iter/sec",
            "range": "stddev: 0.04763007570462719",
            "extra": "mean: 1.7844687794000094 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1060.1226401367912,
            "unit": "iter/sec",
            "range": "stddev: 0.00048327051100024906",
            "extra": "mean: 943.2870897568669 usec\nrounds: 1025"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 400.6964032253064,
            "unit": "iter/sec",
            "range": "stddev: 0.001355422482333998",
            "extra": "mean: 2.495655044444492 msec\nrounds: 360"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.794377719118584,
            "unit": "iter/sec",
            "range": "stddev: 0.022494133395046377",
            "extra": "mean: 1.2588469892000091 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.14535892519477064,
            "unit": "iter/sec",
            "range": "stddev: 0.20204309808546367",
            "extra": "mean: 6.879522524400005 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1125.7637086922973,
            "unit": "iter/sec",
            "range": "stddev: 0.00039971791980167456",
            "extra": "mean: 888.2858740948524 usec\nrounds: 691"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 683.6195779738362,
            "unit": "iter/sec",
            "range": "stddev: 0.000703675878705119",
            "extra": "mean: 1.462801874346367 msec\nrounds: 764"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 2.776453241451833,
            "unit": "iter/sec",
            "range": "stddev: 0.01640011535320224",
            "extra": "mean: 360.1717418000135 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.5399369019412822,
            "unit": "iter/sec",
            "range": "stddev: 0.08882243233248846",
            "extra": "mean: 1.8520682627999918 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b02d216c52e5cbab0a1ea50af13ad3b81866931e",
          "message": "remove workaround after IG-16915 fixed (#40)",
          "timestamp": "2020-11-05T11:57:32+02:00",
          "tree_id": "5b9d7c223e30993c4fbbb31ac20dd6186c89f0bf",
          "url": "https://github.com/mlrun/storey/commit/b02d216c52e5cbab0a1ea50af13ad3b81866931e"
        },
        "date": 1604570511186,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1080.3507515003628,
            "unit": "iter/sec",
            "range": "stddev: 0.0002877777476338817",
            "extra": "mean: 925.6253106791718 usec\nrounds: 618"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 674.9780821478051,
            "unit": "iter/sec",
            "range": "stddev: 0.00039193244558798855",
            "extra": "mean: 1.4815295880689388 msec\nrounds: 704"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 2.70368627161639,
            "unit": "iter/sec",
            "range": "stddev: 0.008940429309639451",
            "extra": "mean: 369.8653983999975 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.52104983246963,
            "unit": "iter/sec",
            "range": "stddev: 0.02374801202130888",
            "extra": "mean: 1.919202229199999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3197.2396800342826,
            "unit": "iter/sec",
            "range": "stddev: 0.0002168006924112123",
            "extra": "mean: 312.7697952220077 usec\nrounds: 2051"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2340.9887878604236,
            "unit": "iter/sec",
            "range": "stddev: 0.0002463302640964761",
            "extra": "mean: 427.16992289141325 usec\nrounds: 2075"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 11.37003138179839,
            "unit": "iter/sec",
            "range": "stddev: 0.0028971452139394767",
            "extra": "mean: 87.95050483333237 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.223265901297627,
            "unit": "iter/sec",
            "range": "stddev: 0.006478136153346139",
            "extra": "mean: 449.7887542000001 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1042.1714698845137,
            "unit": "iter/sec",
            "range": "stddev: 0.00046607695560313357",
            "extra": "mean: 959.5349986992188 usec\nrounds: 769"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 662.6554070560243,
            "unit": "iter/sec",
            "range": "stddev: 0.00043430503572908404",
            "extra": "mean: 1.5090799672829875 msec\nrounds: 703"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.500676149071631,
            "unit": "iter/sec",
            "range": "stddev: 0.017396276041672893",
            "extra": "mean: 399.891845399992 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.5012721977590364,
            "unit": "iter/sec",
            "range": "stddev: 0.034515175868315755",
            "extra": "mean: 1.9949241239999993 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1066.9255720136762,
            "unit": "iter/sec",
            "range": "stddev: 0.00026448956984370154",
            "extra": "mean: 937.2725016916004 usec\nrounds: 887"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 363.7478341073513,
            "unit": "iter/sec",
            "range": "stddev: 0.0012623900232918272",
            "extra": "mean: 2.749157262898985 msec\nrounds: 407"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.7530672347516705,
            "unit": "iter/sec",
            "range": "stddev: 0.03497295335402334",
            "extra": "mean: 1.3279026810000005 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.14765762602757732,
            "unit": "iter/sec",
            "range": "stddev: 0.08390378993021094",
            "extra": "mean: 6.772423659399988 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1099.5531859161854,
            "unit": "iter/sec",
            "range": "stddev: 0.00033254796739682734",
            "extra": "mean: 909.4603269843337 usec\nrounds: 945"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 672.1382172000147,
            "unit": "iter/sec",
            "range": "stddev: 0.00035552690486569084",
            "extra": "mean: 1.487789229075216 msec\nrounds: 681"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 2.813769106414339,
            "unit": "iter/sec",
            "range": "stddev: 0.019144902373878527",
            "extra": "mean: 355.39518780001345 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.5768798495187487,
            "unit": "iter/sec",
            "range": "stddev: 0.04222514578328501",
            "extra": "mean: 1.7334632174000035 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "375d20a03a4cb22a1e58b7910e1366770dbc10b6",
          "message": "Parallel persist (#37)\n\n* make persistance parallel across different keys\r\n\r\n* rename closable\r\n\r\n* move closable logic to Flow\r\n\r\n* review comments",
          "timestamp": "2020-11-05T17:08:17+02:00",
          "tree_id": "108d834d6611d62ee731ec08eb0c11d377fb4bfa",
          "url": "https://github.com/mlrun/storey/commit/375d20a03a4cb22a1e58b7910e1366770dbc10b6"
        },
        "date": 1604589104898,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1291.3994745715825,
            "unit": "iter/sec",
            "range": "stddev: 0.00012891157054405438",
            "extra": "mean: 774.3537299577629 usec\nrounds: 474"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 860.2419086604757,
            "unit": "iter/sec",
            "range": "stddev: 0.00013739443389117315",
            "extra": "mean: 1.162463709257258 msec\nrounds: 767"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.133655264720143,
            "unit": "iter/sec",
            "range": "stddev: 0.005260711142010939",
            "extra": "mean: 241.91664180000316 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8126740210270827,
            "unit": "iter/sec",
            "range": "stddev: 0.034076536500826426",
            "extra": "mean: 1.2305056813999897 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5028.284184381289,
            "unit": "iter/sec",
            "range": "stddev: 0.000015957117151845252",
            "extra": "mean: 198.8749965855492 usec\nrounds: 2343"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3577.8322498937478,
            "unit": "iter/sec",
            "range": "stddev: 0.00002446752199744934",
            "extra": "mean: 279.4988501849681 usec\nrounds: 1889"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 15.895448357905202,
            "unit": "iter/sec",
            "range": "stddev: 0.0013983921079269287",
            "extra": "mean: 62.91109111764533 msec\nrounds: 17"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 3.196643892166617,
            "unit": "iter/sec",
            "range": "stddev: 0.004978321671794989",
            "extra": "mean: 312.8280889999985 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1351.5222235979745,
            "unit": "iter/sec",
            "range": "stddev: 0.00011828436147318261",
            "extra": "mean: 739.90644218771 usec\nrounds: 640"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 839.7527933096928,
            "unit": "iter/sec",
            "range": "stddev: 0.00008200225207002802",
            "extra": "mean: 1.190826643230003 msec\nrounds: 768"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.7782330419294525,
            "unit": "iter/sec",
            "range": "stddev: 0.003977091844376071",
            "extra": "mean: 264.6739861999947 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.7830477364095014,
            "unit": "iter/sec",
            "range": "stddev: 0.009526419051053997",
            "extra": "mean: 1.2770613507999997 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1292.2083798537208,
            "unit": "iter/sec",
            "range": "stddev: 0.000056037677828418854",
            "extra": "mean: 773.8689948080981 usec\nrounds: 963"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 443.7921655623856,
            "unit": "iter/sec",
            "range": "stddev: 0.001391804239948425",
            "extra": "mean: 2.253307015306979 msec\nrounds: 392"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.9613934486483373,
            "unit": "iter/sec",
            "range": "stddev: 0.015062385752108616",
            "extra": "mean: 1.040156869599997 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.1874617973618373,
            "unit": "iter/sec",
            "range": "stddev: 0.052319861975714546",
            "extra": "mean: 5.334420207599993 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1347.1362381896859,
            "unit": "iter/sec",
            "range": "stddev: 0.00005714235512371389",
            "extra": "mean: 742.315418182072 usec\nrounds: 990"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 863.70721934363,
            "unit": "iter/sec",
            "range": "stddev: 0.000172049527961684",
            "extra": "mean: 1.157799746955855 msec\nrounds: 739"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.5279697204013445,
            "unit": "iter/sec",
            "range": "stddev: 0.006646781338395242",
            "extra": "mean: 220.84953340000766 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9166416530436912,
            "unit": "iter/sec",
            "range": "stddev: 0.02494031120117087",
            "extra": "mean: 1.09093886 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f9c290c5555a2293f4d03da9f7616acf8fd72415",
          "message": "Add docstring for WriteToParquet. (#43)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-05T17:15:38+02:00",
          "tree_id": "4e6d368ddf1f4cad946250376d62cc92cd6c6e1c",
          "url": "https://github.com/mlrun/storey/commit/f9c290c5555a2293f4d03da9f7616acf8fd72415"
        },
        "date": 1604589598928,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1156.8588639139532,
            "unit": "iter/sec",
            "range": "stddev: 0.00014861205429278303",
            "extra": "mean: 864.4096796879275 usec\nrounds: 512"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 715.5307082318401,
            "unit": "iter/sec",
            "range": "stddev: 0.00020982515183561742",
            "extra": "mean: 1.39756405769239 msec\nrounds: 624"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.09095509432426,
            "unit": "iter/sec",
            "range": "stddev: 0.00613017799822263",
            "extra": "mean: 323.5245966000093 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.6237903386017934,
            "unit": "iter/sec",
            "range": "stddev: 0.022413070363901888",
            "extra": "mean: 1.6031027384000027 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3491.6163330791223,
            "unit": "iter/sec",
            "range": "stddev: 0.0000615903439253857",
            "extra": "mean: 286.4003099441738 usec\nrounds: 2152"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2430.885798332845,
            "unit": "iter/sec",
            "range": "stddev: 0.00008012929037026518",
            "extra": "mean: 411.3726776822762 usec\nrounds: 2330"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 11.072601893528864,
            "unit": "iter/sec",
            "range": "stddev: 0.002020949668042908",
            "extra": "mean: 90.31300950000087 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.2848269957376446,
            "unit": "iter/sec",
            "range": "stddev: 0.007231605935977142",
            "extra": "mean: 437.6698987999987 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1097.1670648991037,
            "unit": "iter/sec",
            "range": "stddev: 0.00015642571426822285",
            "extra": "mean: 911.4382230312032 usec\nrounds: 686"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 672.8125578904836,
            "unit": "iter/sec",
            "range": "stddev: 0.00021466260831286933",
            "extra": "mean: 1.4862980606892506 msec\nrounds: 725"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.5218569225997274,
            "unit": "iter/sec",
            "range": "stddev: 0.003373327865668486",
            "extra": "mean: 396.533201800014 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.50093043038549,
            "unit": "iter/sec",
            "range": "stddev: 0.02709158130112853",
            "extra": "mean: 1.9962851912000077 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1055.1960750179746,
            "unit": "iter/sec",
            "range": "stddev: 0.0001632836887684688",
            "extra": "mean: 947.6911672391935 usec\nrounds: 873"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 365.86862036380626,
            "unit": "iter/sec",
            "range": "stddev: 0.0016018965978014748",
            "extra": "mean: 2.7332215564309315 msec\nrounds: 381"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.7662457371874276,
            "unit": "iter/sec",
            "range": "stddev: 0.031424449035645265",
            "extra": "mean: 1.3050643565999962 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.1564275555068399,
            "unit": "iter/sec",
            "range": "stddev: 0.05964091336905502",
            "extra": "mean: 6.392735581400006 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1123.4460078380675,
            "unit": "iter/sec",
            "range": "stddev: 0.00016680595391008188",
            "extra": "mean: 890.1184329493288 usec\nrounds: 1044"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 704.8603285199936,
            "unit": "iter/sec",
            "range": "stddev: 0.0002056765464488375",
            "extra": "mean: 1.4187207869957952 msec\nrounds: 446"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.2898112448164496,
            "unit": "iter/sec",
            "range": "stddev: 0.005007062163781765",
            "extra": "mean: 303.968807199999 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6784265857407823,
            "unit": "iter/sec",
            "range": "stddev: 0.020505603981427478",
            "extra": "mean: 1.473998839399974 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e765974b96417d994d7d6a08598cbe1c37ded666",
          "message": "load additional column when loading aggregates (#28)\n\n* load additional column when loading aggregates\r\n\r\n* add enriching parameters to aggregate steps\r\n\r\n* add py docs",
          "timestamp": "2020-11-05T17:17:35+02:00",
          "tree_id": "7200b98878a5cacefaa39cc709b2ce4fe6cb439c",
          "url": "https://github.com/mlrun/storey/commit/e765974b96417d994d7d6a08598cbe1c37ded666"
        },
        "date": 1604589699172,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1212.559484803119,
            "unit": "iter/sec",
            "range": "stddev: 0.00010718740358907616",
            "extra": "mean: 824.7018084744668 usec\nrounds: 590"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 707.4988455866895,
            "unit": "iter/sec",
            "range": "stddev: 0.0007354483166163188",
            "extra": "mean: 1.4134298681021247 msec\nrounds: 743"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 2.7447483348129973,
            "unit": "iter/sec",
            "range": "stddev: 0.013425899631289658",
            "extra": "mean: 364.3321273999902 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.5811840502525026,
            "unit": "iter/sec",
            "range": "stddev: 0.031130010159838715",
            "extra": "mean: 1.720625332999998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3502.164843572069,
            "unit": "iter/sec",
            "range": "stddev: 0.00006065160636576992",
            "extra": "mean: 285.5376730297023 usec\nrounds: 2462"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2357.2024595419225,
            "unit": "iter/sec",
            "range": "stddev: 0.00008760814559239799",
            "extra": "mean: 424.23169717646186 usec\nrounds: 2196"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 10.728261692482311,
            "unit": "iter/sec",
            "range": "stddev: 0.0027925115910287382",
            "extra": "mean: 93.21174563636316 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.1747837531394705,
            "unit": "iter/sec",
            "range": "stddev: 0.003753620469787618",
            "extra": "mean: 459.8158316000024 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1150.0713111034418,
            "unit": "iter/sec",
            "range": "stddev: 0.0002043553242684003",
            "extra": "mean: 869.5112992954714 usec\nrounds: 852"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 719.0021303456248,
            "unit": "iter/sec",
            "range": "stddev: 0.0003102698092860124",
            "extra": "mean: 1.3908164632548436 msec\nrounds: 762"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.615293763619999,
            "unit": "iter/sec",
            "range": "stddev: 0.017896098521536324",
            "extra": "mean: 382.36622359999615 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.5417124878372787,
            "unit": "iter/sec",
            "range": "stddev: 0.007202579436407335",
            "extra": "mean: 1.8459976877999964 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1140.0905486496786,
            "unit": "iter/sec",
            "range": "stddev: 0.0002241495879300722",
            "extra": "mean: 877.1233137441568 usec\nrounds: 1004"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 391.2330639239773,
            "unit": "iter/sec",
            "range": "stddev: 0.001242766073348256",
            "extra": "mean: 2.556021185863564 msec\nrounds: 382"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.751667551537232,
            "unit": "iter/sec",
            "range": "stddev: 0.02015067890913442",
            "extra": "mean: 1.3303753739999877 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.14948385217119695,
            "unit": "iter/sec",
            "range": "stddev: 0.065956680119908",
            "extra": "mean: 6.689685778599994 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1125.9593139067956,
            "unit": "iter/sec",
            "range": "stddev: 0.00033683242363582734",
            "extra": "mean: 888.1315582623065 usec\nrounds: 944"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 705.5219288322428,
            "unit": "iter/sec",
            "range": "stddev: 0.000220245348712189",
            "extra": "mean: 1.4173903873621163 msec\nrounds: 728"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.0701097929164067,
            "unit": "iter/sec",
            "range": "stddev: 0.007939818085914234",
            "extra": "mean: 325.7212502000016 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6027370071715815,
            "unit": "iter/sec",
            "range": "stddev: 0.0733921741191871",
            "extra": "mean: 1.6590983929999994 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd2ad0a8f80eeb8aa5b0ddc100326830edb12845",
          "message": "Readme: v3io/storey -> mlrun/storey",
          "timestamp": "2020-11-05T17:18:47+02:00",
          "tree_id": "d58b75119aeb26e6bf7805036372f417f6e4fb90",
          "url": "https://github.com/mlrun/storey/commit/dd2ad0a8f80eeb8aa5b0ddc100326830edb12845"
        },
        "date": 1604589763598,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1096.0437549466437,
            "unit": "iter/sec",
            "range": "stddev: 0.0007495876387359475",
            "extra": "mean: 912.3723350339063 usec\nrounds: 588"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 687.2232283443644,
            "unit": "iter/sec",
            "range": "stddev: 0.000681034762396933",
            "extra": "mean: 1.4551312568540022 msec\nrounds: 693"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.1568361121221273,
            "unit": "iter/sec",
            "range": "stddev: 0.007297669616794962",
            "extra": "mean: 316.77285879999886 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.6281029593430829,
            "unit": "iter/sec",
            "range": "stddev: 0.010322357812941994",
            "extra": "mean: 1.592095667000001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3595.9216073841535,
            "unit": "iter/sec",
            "range": "stddev: 0.0002353389822388416",
            "extra": "mean: 278.092825479432 usec\nrounds: 2504"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2558.354543409955,
            "unit": "iter/sec",
            "range": "stddev: 0.00011003002276011243",
            "extra": "mean: 390.8762382351938 usec\nrounds: 2380"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 11.580782545492747,
            "unit": "iter/sec",
            "range": "stddev: 0.006024037030647921",
            "extra": "mean: 86.34995053846349 msec\nrounds: 13"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.3718410056837076,
            "unit": "iter/sec",
            "range": "stddev: 0.02396863571642823",
            "extra": "mean: 421.61342079999145 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1211.578907752707,
            "unit": "iter/sec",
            "range": "stddev: 0.00026622021994686016",
            "extra": "mean: 825.369271123122 usec\nrounds: 793"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 741.01160767258,
            "unit": "iter/sec",
            "range": "stddev: 0.000501162755537224",
            "extra": "mean: 1.3495065254657324 msec\nrounds: 805"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.8267421594669377,
            "unit": "iter/sec",
            "range": "stddev: 0.012360269123861345",
            "extra": "mean: 353.7641368000038 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.5584744219356433,
            "unit": "iter/sec",
            "range": "stddev: 0.03431539196684715",
            "extra": "mean: 1.7905923006000024 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1188.4562367557053,
            "unit": "iter/sec",
            "range": "stddev: 0.0002512634254550049",
            "extra": "mean: 841.427701814111 usec\nrounds: 882"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 387.63780795575883,
            "unit": "iter/sec",
            "range": "stddev: 0.001800446651027708",
            "extra": "mean: 2.5797277238605427 msec\nrounds: 373"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.7994260553252444,
            "unit": "iter/sec",
            "range": "stddev: 0.0374714451527915",
            "extra": "mean: 1.2508974323999893 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.1554775630905992,
            "unit": "iter/sec",
            "range": "stddev: 0.20370822219063658",
            "extra": "mean: 6.4317962034 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1225.9885142943137,
            "unit": "iter/sec",
            "range": "stddev: 0.00012994318421533625",
            "extra": "mean: 815.6683266935872 usec\nrounds: 1004"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 766.8369824501528,
            "unit": "iter/sec",
            "range": "stddev: 0.0001936028505038096",
            "extra": "mean: 1.3040581282411006 msec\nrounds: 733"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.4401158692670757,
            "unit": "iter/sec",
            "range": "stddev: 0.013666520591860569",
            "extra": "mean: 290.6878832000075 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6837599978033024,
            "unit": "iter/sec",
            "range": "stddev: 0.023405777532114643",
            "extra": "mean: 1.462501467200002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dinaleventol@gmail.com",
            "name": "Dina Nimrodi",
            "username": "dinal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aed761eab5491a00f51e09c7010c6cd6e76e48fe",
          "message": "tsdb docstring (#44)\n\n* tsdb docstring\r\n\r\n* doc updates\r\n\r\nCo-authored-by: Dina Nimrodi <dinan@iguazio.com>",
          "timestamp": "2020-11-08T12:47:08+02:00",
          "tree_id": "927e8cb39c02f437cec9ced26001a0c3272c70a2",
          "url": "https://github.com/mlrun/storey/commit/aed761eab5491a00f51e09c7010c6cd6e76e48fe"
        },
        "date": 1604832649238,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1229.7312050378564,
            "unit": "iter/sec",
            "range": "stddev: 0.0002707216204094617",
            "extra": "mean: 813.1858376068581 usec\nrounds: 585"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 846.1861766383718,
            "unit": "iter/sec",
            "range": "stddev: 0.0003425877892124032",
            "extra": "mean: 1.1817730277427618 msec\nrounds: 793"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.9158851823368037,
            "unit": "iter/sec",
            "range": "stddev: 0.00788894411555977",
            "extra": "mean: 255.37010240000203 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7801238830079533,
            "unit": "iter/sec",
            "range": "stddev: 0.04369735560372423",
            "extra": "mean: 1.2818476934000045 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4820.4175785496545,
            "unit": "iter/sec",
            "range": "stddev: 0.00001236491812083949",
            "extra": "mean: 207.45090725125013 usec\nrounds: 1779"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3232.624004330592,
            "unit": "iter/sec",
            "range": "stddev: 0.00001203220320791605",
            "extra": "mean: 309.3462149202467 usec\nrounds: 2252"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 14.358798024098457,
            "unit": "iter/sec",
            "range": "stddev: 0.00019689809203638048",
            "extra": "mean: 69.64371239999991 msec\nrounds: 15"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.892482372077151,
            "unit": "iter/sec",
            "range": "stddev: 0.00042222827142540713",
            "extra": "mean: 345.7238009999969 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1262.033165999422,
            "unit": "iter/sec",
            "range": "stddev: 0.00018235264509291907",
            "extra": "mean: 792.3722029983941 usec\nrounds: 867"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 820.0035420577344,
            "unit": "iter/sec",
            "range": "stddev: 0.00006283369545437078",
            "extra": "mean: 1.2195069273610437 msec\nrounds: 826"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.571229873300199,
            "unit": "iter/sec",
            "range": "stddev: 0.006006594240960919",
            "extra": "mean: 280.01557879999837 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.7292930563743782,
            "unit": "iter/sec",
            "range": "stddev: 0.012402223151820083",
            "extra": "mean: 1.3711908968000046 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1254.3814702868997,
            "unit": "iter/sec",
            "range": "stddev: 0.00010616685394978395",
            "extra": "mean: 797.2056536926378 usec\nrounds: 1002"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 409.1940968500258,
            "unit": "iter/sec",
            "range": "stddev: 0.0014041483828959658",
            "extra": "mean: 2.4438280212202357 msec\nrounds: 377"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8647555751668385,
            "unit": "iter/sec",
            "range": "stddev: 0.02949247834708135",
            "extra": "mean: 1.1563961293999967 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.16956310855925194,
            "unit": "iter/sec",
            "range": "stddev: 0.0854734855122281",
            "extra": "mean: 5.8975092429999965 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1298.8837097359483,
            "unit": "iter/sec",
            "range": "stddev: 0.00014443113062815338",
            "extra": "mean: 769.8918636860041 usec\nrounds: 917"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 815.5654279298273,
            "unit": "iter/sec",
            "range": "stddev: 0.0003632044622628105",
            "extra": "mean: 1.2261431955720932 msec\nrounds: 813"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.213804765899815,
            "unit": "iter/sec",
            "range": "stddev: 0.004228098344908486",
            "extra": "mean: 237.3152188000006 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.8387734785995388,
            "unit": "iter/sec",
            "range": "stddev: 0.03942208422272647",
            "extra": "mean: 1.1922169996000036 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c4a8650a68a1082638c1b7f160d6da49014e97e4",
          "message": "Simplify Batching base class. (#46)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-08T14:40:54+02:00",
          "tree_id": "6cfab2f29201fd7ec268c733e3d961c4d1d24844",
          "url": "https://github.com/mlrun/storey/commit/c4a8650a68a1082638c1b7f160d6da49014e97e4"
        },
        "date": 1604839472429,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1329.000343146213,
            "unit": "iter/sec",
            "range": "stddev: 0.00005105437906261855",
            "extra": "mean: 752.4452534245754 usec\nrounds: 438"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 854.8931864148467,
            "unit": "iter/sec",
            "range": "stddev: 0.00007811372251029586",
            "extra": "mean: 1.169736776349436 msec\nrounds: 778"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.96433895385708,
            "unit": "iter/sec",
            "range": "stddev: 0.004952857434807276",
            "extra": "mean: 252.24886459999996 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8087280112480535,
            "unit": "iter/sec",
            "range": "stddev: 0.019973123192124218",
            "extra": "mean: 1.2365096621999896 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4906.052313005017,
            "unit": "iter/sec",
            "range": "stddev: 0.000014235835632545702",
            "extra": "mean: 203.82986894558567 usec\nrounds: 2457"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3268.8462812652324,
            "unit": "iter/sec",
            "range": "stddev: 0.00005630909959117509",
            "extra": "mean: 305.9183314098643 usec\nrounds: 2079"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 14.997156618777582,
            "unit": "iter/sec",
            "range": "stddev: 0.002101102708746181",
            "extra": "mean: 66.67930631249952 msec\nrounds: 16"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.9764687671616126,
            "unit": "iter/sec",
            "range": "stddev: 0.005155091698037941",
            "extra": "mean: 335.9685850000062 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1334.689240340826,
            "unit": "iter/sec",
            "range": "stddev: 0.00006170114288622309",
            "extra": "mean: 749.2380771307037 usec\nrounds: 739"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 835.9363867067166,
            "unit": "iter/sec",
            "range": "stddev: 0.0000870914575281318",
            "extra": "mean: 1.196263275414573 msec\nrounds: 846"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.718670172190579,
            "unit": "iter/sec",
            "range": "stddev: 0.006262919795913204",
            "extra": "mean: 268.91333560000135 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.750966546513019,
            "unit": "iter/sec",
            "range": "stddev: 0.03537575153148389",
            "extra": "mean: 1.3316172400000028 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1318.934879203229,
            "unit": "iter/sec",
            "range": "stddev: 0.00006637361523291699",
            "extra": "mean: 758.187546457261 usec\nrounds: 635"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 446.9663340348749,
            "unit": "iter/sec",
            "range": "stddev: 0.0013179172305302245",
            "extra": "mean: 2.2373049687495574 msec\nrounds: 384"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8729317201672178,
            "unit": "iter/sec",
            "range": "stddev: 0.010226652942787897",
            "extra": "mean: 1.1455649702000072 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.1750866277009569,
            "unit": "iter/sec",
            "range": "stddev: 0.03316131883223658",
            "extra": "mean: 5.71145845420001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1344.1833179930481,
            "unit": "iter/sec",
            "range": "stddev: 0.00006108074801131395",
            "extra": "mean: 743.9461467897579 usec\nrounds: 1090"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 845.9135507295185,
            "unit": "iter/sec",
            "range": "stddev: 0.00016419399628536308",
            "extra": "mean: 1.1821538963852711 msec\nrounds: 830"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.348769308548929,
            "unit": "iter/sec",
            "range": "stddev: 0.00652685817990017",
            "extra": "mean: 229.9501143999919 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.8755241958602497,
            "unit": "iter/sec",
            "range": "stddev: 0.016977377073169108",
            "extra": "mean: 1.1421728888000018 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dinaleventol@gmail.com",
            "name": "Dina Nimrodi",
            "username": "dinal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "95add2c5b35b489e9b0ad3d202d9f57dc98d8917",
          "message": "tsdb batching (#47)\n\n* tsdb batching\r\n\r\n* align to dev\r\n\r\nCo-authored-by: Dina Nimrodi <dinan@iguazio.com>",
          "timestamp": "2020-11-08T15:09:35+02:00",
          "tree_id": "7839f2561b68c30d4d7e385d0404f67933ad0639",
          "url": "https://github.com/mlrun/storey/commit/95add2c5b35b489e9b0ad3d202d9f57dc98d8917"
        },
        "date": 1604841204528,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1382.3625446510168,
            "unit": "iter/sec",
            "range": "stddev: 0.000054043890650452394",
            "extra": "mean: 723.3992297241056 usec\nrounds: 444"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 881.833860489867,
            "unit": "iter/sec",
            "range": "stddev: 0.00008805105190452317",
            "extra": "mean: 1.134000456100076 msec\nrounds: 763"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.062402724243691,
            "unit": "iter/sec",
            "range": "stddev: 0.0034292329066690514",
            "extra": "mean: 246.15974039998036 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8203627715677588,
            "unit": "iter/sec",
            "range": "stddev: 0.013261912536739655",
            "extra": "mean: 1.2189729162001641 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5080.38864075491,
            "unit": "iter/sec",
            "range": "stddev: 0.00002108172943771193",
            "extra": "mean: 196.83533499346757 usec\nrounds: 2806"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3488.614522606226,
            "unit": "iter/sec",
            "range": "stddev: 0.000055644969404536466",
            "extra": "mean: 286.64674572670583 usec\nrounds: 2517"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 15.346492148230384,
            "unit": "iter/sec",
            "range": "stddev: 0.0017546241489681698",
            "extra": "mean: 65.16147080004278 msec\nrounds: 15"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 3.03822780007308,
            "unit": "iter/sec",
            "range": "stddev: 0.006912831577296461",
            "extra": "mean: 329.1392435998205 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1391.4940699168062,
            "unit": "iter/sec",
            "range": "stddev: 0.00006648093105388492",
            "extra": "mean: 718.6520026346842 usec\nrounds: 759"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 855.5534118516941,
            "unit": "iter/sec",
            "range": "stddev: 0.00009115489976213618",
            "extra": "mean: 1.1688340974944822 msec\nrounds: 800"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.846585900599852,
            "unit": "iter/sec",
            "range": "stddev: 0.006971995483421185",
            "extra": "mean: 259.97079640001175 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.7817341888117879,
            "unit": "iter/sec",
            "range": "stddev: 0.016066505424146164",
            "extra": "mean: 1.279207196400057 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1317.2836891991412,
            "unit": "iter/sec",
            "range": "stddev: 0.00005897197523429325",
            "extra": "mean: 759.1379200997792 usec\nrounds: 1164"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 440.2896605918384,
            "unit": "iter/sec",
            "range": "stddev: 0.0013610177012897949",
            "extra": "mean: 2.2712320763013096 msec\nrounds: 367"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.9353768191426945,
            "unit": "iter/sec",
            "range": "stddev: 0.01830339746408847",
            "extra": "mean: 1.0690878579998753 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.18463413093114175,
            "unit": "iter/sec",
            "range": "stddev: 0.037327116224873516",
            "extra": "mean: 5.416116700400016 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1378.906845093846,
            "unit": "iter/sec",
            "range": "stddev: 0.000059699985165082276",
            "extra": "mean: 725.2121516098077 usec\nrounds: 1062"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 874.9841986690955,
            "unit": "iter/sec",
            "range": "stddev: 0.00008720179127205086",
            "extra": "mean: 1.1428777817028708 msec\nrounds: 962"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.3540904531926925,
            "unit": "iter/sec",
            "range": "stddev: 0.0032844701819565543",
            "extra": "mean: 229.66909180004222 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9075437252478592,
            "unit": "iter/sec",
            "range": "stddev: 0.011166847633620745",
            "extra": "mean: 1.1018752840001071 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a0a3a519e317b6feab4a2ef4c99e593744410d15",
          "message": "Add docstrings to public API. Make non-API members private. (#48)\n\n* Add docstrings to public API. Make non-API members private.\r\n\r\n* HttpRequest params.\r\n\r\n* MapWithState docstring.\r\n\r\n* HttpResponse params.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-09T12:33:46+02:00",
          "tree_id": "e77b76d35848d1fdae18fc2503e164b0f9a95791",
          "url": "https://github.com/mlrun/storey/commit/a0a3a519e317b6feab4a2ef4c99e593744410d15"
        },
        "date": 1604918237093,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1496.5555758566816,
            "unit": "iter/sec",
            "range": "stddev: 0.000022425033474692907",
            "extra": "mean: 668.2010452084712 usec\nrounds: 553"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 887.4177187562466,
            "unit": "iter/sec",
            "range": "stddev: 0.0008683014384363499",
            "extra": "mean: 1.1268650364583008 msec\nrounds: 576"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.640245346624848,
            "unit": "iter/sec",
            "range": "stddev: 0.0034039461890565783",
            "extra": "mean: 215.50584619999995 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.9232966779135503,
            "unit": "iter/sec",
            "range": "stddev: 0.013230992763891706",
            "extra": "mean: 1.0830754880000029 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5381.112339612276,
            "unit": "iter/sec",
            "range": "stddev: 0.00000880292800861374",
            "extra": "mean: 185.8351836735772 usec\nrounds: 2597"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3583.629938134168,
            "unit": "iter/sec",
            "range": "stddev: 0.000045511030404992175",
            "extra": "mean: 279.04666979109294 usec\nrounds: 2347"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 15.831125630919448,
            "unit": "iter/sec",
            "range": "stddev: 0.0001314038401088516",
            "extra": "mean: 63.166702312495104 msec\nrounds: 16"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 3.181198093142292,
            "unit": "iter/sec",
            "range": "stddev: 0.0006940916923856214",
            "extra": "mean: 314.34697579999806 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1488.3358279690308,
            "unit": "iter/sec",
            "range": "stddev: 0.00003761496238410376",
            "extra": "mean: 671.8913710251742 usec\nrounds: 849"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 944.8676062617823,
            "unit": "iter/sec",
            "range": "stddev: 0.00010375119425386597",
            "extra": "mean: 1.0583493320893285 msec\nrounds: 804"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.064390001046263,
            "unit": "iter/sec",
            "range": "stddev: 0.00175844244163429",
            "extra": "mean: 246.0393809999971 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.8127084081098519,
            "unit": "iter/sec",
            "range": "stddev: 0.0071746952489520855",
            "extra": "mean: 1.2304536166000049 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1437.3831726988549,
            "unit": "iter/sec",
            "range": "stddev: 0.00002583507971518245",
            "extra": "mean: 695.7087149715153 usec\nrounds: 1042"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 482.0944236938974,
            "unit": "iter/sec",
            "range": "stddev: 0.0012501319839234592",
            "extra": "mean: 2.0742824452060935 msec\nrounds: 438"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.0356660625946246,
            "unit": "iter/sec",
            "range": "stddev: 0.010295969725030281",
            "extra": "mean: 965.5621981999957 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.20631623504534483,
            "unit": "iter/sec",
            "range": "stddev: 0.024099923053764377",
            "extra": "mean: 4.846928307799999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1499.4190586417817,
            "unit": "iter/sec",
            "range": "stddev: 0.00003254804726082133",
            "extra": "mean: 666.9249628625034 usec\nrounds: 1104"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 938.8574453603103,
            "unit": "iter/sec",
            "range": "stddev: 0.00009746395028300781",
            "extra": "mean: 1.065124428572034 msec\nrounds: 553"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.01454526102352,
            "unit": "iter/sec",
            "range": "stddev: 0.007827249503267629",
            "extra": "mean: 199.4198771666665 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.98990555393273,
            "unit": "iter/sec",
            "range": "stddev: 0.012510229821102",
            "extra": "mean: 1.0101973829999906 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e4dba6364ada5fcc7c4daff8ada4e998feb84b10",
          "message": "JoinWithTable (#45)\n\n* joinWithTable + tests\r\n\r\n* add closeable\r\n\r\n* change default attributes to fetch\r\n\r\n* review comments",
          "timestamp": "2020-11-09T16:34:52+02:00",
          "tree_id": "ba2a1926110959607f977afcf46a8b3951a29b2e",
          "url": "https://github.com/mlrun/storey/commit/e4dba6364ada5fcc7c4daff8ada4e998feb84b10"
        },
        "date": 1604932735423,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1059.8322921372287,
            "unit": "iter/sec",
            "range": "stddev: 0.0007455254313492875",
            "extra": "mean: 943.5455094347308 usec\nrounds: 636"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 744.5306509465119,
            "unit": "iter/sec",
            "range": "stddev: 0.0004063036993685087",
            "extra": "mean: 1.3431280481585457 msec\nrounds: 706"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.1169124071162644,
            "unit": "iter/sec",
            "range": "stddev: 0.01359075417902283",
            "extra": "mean: 320.8303183999931 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.6569695653298783,
            "unit": "iter/sec",
            "range": "stddev: 0.02753238297980181",
            "extra": "mean: 1.5221405263999999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4767.867958020856,
            "unit": "iter/sec",
            "range": "stddev: 0.000012496622794116932",
            "extra": "mean: 209.73735195785505 usec\nrounds: 1915"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3189.6557838663052,
            "unit": "iter/sec",
            "range": "stddev: 0.000011951174673719578",
            "extra": "mean: 313.51345341341545 usec\nrounds: 2168"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 14.13314103844453,
            "unit": "iter/sec",
            "range": "stddev: 0.0001249987905212755",
            "extra": "mean: 70.75567966666654 msec\nrounds: 15"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.8404484056833437,
            "unit": "iter/sec",
            "range": "stddev: 0.000899143815137454",
            "extra": "mean: 352.0570899999939 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1192.047611971992,
            "unit": "iter/sec",
            "range": "stddev: 0.00025229430956625053",
            "extra": "mean: 838.8926666659819 usec\nrounds: 855"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 670.4521422703805,
            "unit": "iter/sec",
            "range": "stddev: 0.000643428852937693",
            "extra": "mean: 1.4915307699870384 msec\nrounds: 813"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.7701095037085035,
            "unit": "iter/sec",
            "range": "stddev: 0.007201433333238318",
            "extra": "mean: 360.99655939999593 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6139154273631118,
            "unit": "iter/sec",
            "range": "stddev: 0.14819521465454086",
            "extra": "mean: 1.6288888590000057 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1139.9477972755467,
            "unit": "iter/sec",
            "range": "stddev: 0.00018043137286521626",
            "extra": "mean: 877.2331525969705 usec\nrounds: 924"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 357.43012321347794,
            "unit": "iter/sec",
            "range": "stddev: 0.0019239436522956955",
            "extra": "mean: 2.7977496440688694 msec\nrounds: 354"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.7262265547695218,
            "unit": "iter/sec",
            "range": "stddev: 0.04076648971913635",
            "extra": "mean: 1.3769807691999971 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.1459347815287504,
            "unit": "iter/sec",
            "range": "stddev: 0.10724374890552185",
            "extra": "mean: 6.852376037599998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1193.3828719994285,
            "unit": "iter/sec",
            "range": "stddev: 0.0004755332433026094",
            "extra": "mean: 837.9540409563367 usec\nrounds: 879"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 750.5637451258575,
            "unit": "iter/sec",
            "range": "stddev: 0.0003403733184437713",
            "extra": "mean: 1.3323318725344455 msec\nrounds: 659"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.3485318932169337,
            "unit": "iter/sec",
            "range": "stddev: 0.02450429965773465",
            "extra": "mean: 298.63833819999854 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.652377557094382,
            "unit": "iter/sec",
            "range": "stddev: 0.04677779744096151",
            "extra": "mean: 1.5328546930000015 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e9b8ed95ba94a2c8a6999b2f8d3acad459c9106",
          "message": "better handle of flow closeables (#49)\n\n* better handle of flow closeables\r\n\r\n* move closable to after the loop",
          "timestamp": "2020-11-10T10:37:03+02:00",
          "tree_id": "4c6ffe27eb64464b459e348b8dd94a5fcddc21a8",
          "url": "https://github.com/mlrun/storey/commit/7e9b8ed95ba94a2c8a6999b2f8d3acad459c9106"
        },
        "date": 1604997632788,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1397.8077901836016,
            "unit": "iter/sec",
            "range": "stddev: 0.0000649564055759271",
            "extra": "mean: 715.4059428075232 usec\nrounds: 577"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 893.0929093820976,
            "unit": "iter/sec",
            "range": "stddev: 0.0001219341414085527",
            "extra": "mean: 1.1197043325446039 msec\nrounds: 845"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.1704312002241695,
            "unit": "iter/sec",
            "range": "stddev: 0.007803690982331172",
            "extra": "mean: 239.7833586000047 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8277630769170682,
            "unit": "iter/sec",
            "range": "stddev: 0.0372950050110601",
            "extra": "mean: 1.2080751460000045 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5377.561106745098,
            "unit": "iter/sec",
            "range": "stddev: 0.000019025575177332942",
            "extra": "mean: 185.95790547980863 usec\nrounds: 1989"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3567.920534770399,
            "unit": "iter/sec",
            "range": "stddev: 0.000025275601864817863",
            "extra": "mean: 280.2753004879778 usec\nrounds: 2253"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 16.379718013591628,
            "unit": "iter/sec",
            "range": "stddev: 0.002848181762411184",
            "extra": "mean: 61.05111206250413 msec\nrounds: 16"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 3.2595898693671277,
            "unit": "iter/sec",
            "range": "stddev: 0.014798012768101554",
            "extra": "mean: 306.787062199993 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1398.7977500919708,
            "unit": "iter/sec",
            "range": "stddev: 0.00018843303927162944",
            "extra": "mean: 714.899634299705 usec\nrounds: 793"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 869.4249797876395,
            "unit": "iter/sec",
            "range": "stddev: 0.00014017713781299125",
            "extra": "mean: 1.1501854941460894 msec\nrounds: 854"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.944864067700388,
            "unit": "iter/sec",
            "range": "stddev: 0.007777908127254322",
            "extra": "mean: 253.49415919999956 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.8058207790956469,
            "unit": "iter/sec",
            "range": "stddev: 0.007543042028685115",
            "extra": "mean: 1.2409707293999985 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1362.1383429141829,
            "unit": "iter/sec",
            "range": "stddev: 0.0000786826953092187",
            "extra": "mean: 734.1398215548226 usec\nrounds: 1132"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 468.2151217163059,
            "unit": "iter/sec",
            "range": "stddev: 0.001112038435900647",
            "extra": "mean: 2.1357704047113315 msec\nrounds: 467"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.9699523755342794,
            "unit": "iter/sec",
            "range": "stddev: 0.029612993880938458",
            "extra": "mean: 1.030978453400013 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.1908838623626954,
            "unit": "iter/sec",
            "range": "stddev: 0.1272465500953861",
            "extra": "mean: 5.238787541399995 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1356.5711512872556,
            "unit": "iter/sec",
            "range": "stddev: 0.00005636549581269127",
            "extra": "mean: 737.1526359314779 usec\nrounds: 1052"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 869.5041010754968,
            "unit": "iter/sec",
            "range": "stddev: 0.00007785852157497184",
            "extra": "mean: 1.1500808320088334 msec\nrounds: 756"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.36849970411212,
            "unit": "iter/sec",
            "range": "stddev: 0.005157630220825979",
            "extra": "mean: 228.91154119998873 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.8938275353399312,
            "unit": "iter/sec",
            "range": "stddev: 0.022618976635477007",
            "extra": "mean: 1.118784061200006 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e1f1cb61b4c87272623aee68410383babaf43e90",
          "message": "Improve default termination result semantics. (#50)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-11T11:22:00+02:00",
          "tree_id": "68d7c04d7bafcf95a5a7fe2d5ad071a45d6dd02e",
          "url": "https://github.com/mlrun/storey/commit/e1f1cb61b4c87272623aee68410383babaf43e90"
        },
        "date": 1605086771737,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1056.2568380342013,
            "unit": "iter/sec",
            "range": "stddev: 0.00041027659870520173",
            "extra": "mean: 946.7394330540848 usec\nrounds: 478"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 672.0741797040249,
            "unit": "iter/sec",
            "range": "stddev: 0.00045005130372033754",
            "extra": "mean: 1.4879309906540235 msec\nrounds: 749"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 2.9059830753743743,
            "unit": "iter/sec",
            "range": "stddev: 0.01440349203907205",
            "extra": "mean: 344.1176270000028 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.5839148903266707,
            "unit": "iter/sec",
            "range": "stddev: 0.03934606757470019",
            "extra": "mean: 1.7125783510000077 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3498.1278109308887,
            "unit": "iter/sec",
            "range": "stddev: 0.00007238898940872368",
            "extra": "mean: 285.8671992701975 usec\nrounds: 2193"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2358.799070202942,
            "unit": "iter/sec",
            "range": "stddev: 0.00021919702804411932",
            "extra": "mean: 423.94454560894997 usec\nrounds: 2357"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 11.728041415868196,
            "unit": "iter/sec",
            "range": "stddev: 0.0034110665948160154",
            "extra": "mean: 85.2657289090902 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.2706555235312833,
            "unit": "iter/sec",
            "range": "stddev: 0.008868915986240285",
            "extra": "mean: 440.4014565999944 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1064.1704066719556,
            "unit": "iter/sec",
            "range": "stddev: 0.0005070519300124602",
            "extra": "mean: 939.6991249995012 usec\nrounds: 712"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 639.8374730588721,
            "unit": "iter/sec",
            "range": "stddev: 0.0005280729181293244",
            "extra": "mean: 1.562896895080712 msec\nrounds: 610"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.524346836779642,
            "unit": "iter/sec",
            "range": "stddev: 0.007877102317819164",
            "extra": "mean: 396.14207739999756 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.4949344375451019,
            "unit": "iter/sec",
            "range": "stddev: 0.03046288209566558",
            "extra": "mean: 2.020469630200006 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 995.7501613069096,
            "unit": "iter/sec",
            "range": "stddev: 0.0007036001788762708",
            "extra": "mean: 1.0042679769064888 msec\nrounds: 866"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 371.5438569293143,
            "unit": "iter/sec",
            "range": "stddev: 0.0014325624642899095",
            "extra": "mean: 2.6914723022597267 msec\nrounds: 354"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.7552864388335969,
            "unit": "iter/sec",
            "range": "stddev: 0.029195510056884293",
            "extra": "mean: 1.3240009995999913 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.14819944001385674,
            "unit": "iter/sec",
            "range": "stddev: 0.02525552147493717",
            "extra": "mean: 6.747663823200003 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1029.730232223818,
            "unit": "iter/sec",
            "range": "stddev: 0.0004485640918892553",
            "extra": "mean: 971.1281350265766 usec\nrounds: 748"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 651.2787386380212,
            "unit": "iter/sec",
            "range": "stddev: 0.000540457011074442",
            "extra": "mean: 1.5354408806454176 msec\nrounds: 620"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.160129694326556,
            "unit": "iter/sec",
            "range": "stddev: 0.010209700802034278",
            "extra": "mean: 316.4427086000046 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6276022489354925,
            "unit": "iter/sec",
            "range": "stddev: 0.04958857968932845",
            "extra": "mean: 1.5933658645999913 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca90f59c52074ddf7cf0a1d9cd83d398dbc8caf7",
          "message": "rename Persist to WriteToTable (#51)\n\n* rename Persist to WriteToTable\r\n\r\n* update README",
          "timestamp": "2020-11-11T17:51:19+02:00",
          "tree_id": "1477cf944331c9e0638957382082e1f0e56f807d",
          "url": "https://github.com/mlrun/storey/commit/ca90f59c52074ddf7cf0a1d9cd83d398dbc8caf7"
        },
        "date": 1605110139764,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1094.4859747993942,
            "unit": "iter/sec",
            "range": "stddev: 0.00008035116600799471",
            "extra": "mean: 913.6709131273133 usec\nrounds: 518"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 684.1402260604531,
            "unit": "iter/sec",
            "range": "stddev: 0.00017171788693845413",
            "extra": "mean: 1.4616886449703317 msec\nrounds: 676"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 2.6857504981639386,
            "unit": "iter/sec",
            "range": "stddev: 0.009869361422092238",
            "extra": "mean: 372.3354052000104 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.5385799505085965,
            "unit": "iter/sec",
            "range": "stddev: 0.02776544574835401",
            "extra": "mean: 1.8567345462000049 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3501.9650328623043,
            "unit": "iter/sec",
            "range": "stddev: 0.00005025604755569277",
            "extra": "mean: 285.5539648785864 usec\nrounds: 2591"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2357.493780882288,
            "unit": "iter/sec",
            "range": "stddev: 0.00007889253448095609",
            "extra": "mean: 424.17927381583667 usec\nrounds: 2173"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 11.003210054493799,
            "unit": "iter/sec",
            "range": "stddev: 0.0022683865088422624",
            "extra": "mean: 90.88256927273619 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.189118492057137,
            "unit": "iter/sec",
            "range": "stddev: 0.01535240917647097",
            "extra": "mean: 456.8048754000017 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1001.0237282791556,
            "unit": "iter/sec",
            "range": "stddev: 0.0004589781286952378",
            "extra": "mean: 998.9773186686439 usec\nrounds: 841"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 665.2436590503595,
            "unit": "iter/sec",
            "range": "stddev: 0.00034850943015303417",
            "extra": "mean: 1.5032086159641234 msec\nrounds: 664"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.5233023044077325,
            "unit": "iter/sec",
            "range": "stddev: 0.009341334471069877",
            "extra": "mean: 396.30606219999436 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.49647464672979347,
            "unit": "iter/sec",
            "range": "stddev: 0.017047646646330128",
            "extra": "mean: 2.0142015439999907 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1034.1900931806072,
            "unit": "iter/sec",
            "range": "stddev: 0.0002523193450294746",
            "extra": "mean: 966.9402236532193 usec\nrounds: 854"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 375.68060682868446,
            "unit": "iter/sec",
            "range": "stddev: 0.0010098172135345304",
            "extra": "mean: 2.661835564101965 msec\nrounds: 351"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.7708215939195877,
            "unit": "iter/sec",
            "range": "stddev: 0.004508553936025712",
            "extra": "mean: 1.2973170547999984 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.1510574342147367,
            "unit": "iter/sec",
            "range": "stddev: 0.04444724460552279",
            "extra": "mean: 6.619998579999998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1009.08352783975,
            "unit": "iter/sec",
            "range": "stddev: 0.00038328419132361457",
            "extra": "mean: 990.9982398987366 usec\nrounds: 396"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 667.8454695739719,
            "unit": "iter/sec",
            "range": "stddev: 0.00030015923570226227",
            "extra": "mean: 1.4973523750006335 msec\nrounds: 624"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 2.732266472821095,
            "unit": "iter/sec",
            "range": "stddev: 0.027889325472392423",
            "extra": "mean: 365.99651240001094 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.5595724828090848,
            "unit": "iter/sec",
            "range": "stddev: 0.04657188540102445",
            "extra": "mean: 1.7870785836000096 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e1602c7a07fbf8cfb6548a84cd44bde22202de1a",
          "message": "WriteToCSV API overhaul. (#52)\n\n* WriteToCSV API overhaul.\r\n\r\n* WriteToCSV fixes.\r\n\r\n* Allow metadata_columns when columns are inferred.\r\n\r\n* Support metadata insertion into list events.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-12T12:45:49+02:00",
          "tree_id": "397b86ae9286533622ee9d26bb37cef4601849f5",
          "url": "https://github.com/mlrun/storey/commit/e1602c7a07fbf8cfb6548a84cd44bde22202de1a"
        },
        "date": 1605178225424,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1302.7043681920727,
            "unit": "iter/sec",
            "range": "stddev: 0.00019949249256511956",
            "extra": "mean: 767.6338733613262 usec\nrounds: 229"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 854.3563788255872,
            "unit": "iter/sec",
            "range": "stddev: 0.00025767281696968783",
            "extra": "mean: 1.1704717431554932 msec\nrounds: 767"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.067229120582145,
            "unit": "iter/sec",
            "range": "stddev: 0.00500153666927816",
            "extra": "mean: 245.8676338000032 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.80700366341363,
            "unit": "iter/sec",
            "range": "stddev: 0.021956592016484183",
            "extra": "mean: 1.239151747799997 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5032.8114237576065,
            "unit": "iter/sec",
            "range": "stddev: 0.000017178984111059205",
            "extra": "mean: 198.69609961530773 usec\nrounds: 2600"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3317.877213450239,
            "unit": "iter/sec",
            "range": "stddev: 0.000047536732736829566",
            "extra": "mean: 301.39753091106905 usec\nrounds: 2119"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 14.738524427669313,
            "unit": "iter/sec",
            "range": "stddev: 0.0007460832607111191",
            "extra": "mean: 67.84939733333508 msec\nrounds: 15"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 3.0459059512086473,
            "unit": "iter/sec",
            "range": "stddev: 0.0072906916178474765",
            "extra": "mean: 328.309545999997 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1395.2161615400166,
            "unit": "iter/sec",
            "range": "stddev: 0.00005977385100996028",
            "extra": "mean: 716.7348168445931 usec\nrounds: 748"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 855.2203478832411,
            "unit": "iter/sec",
            "range": "stddev: 0.00006829248600501676",
            "extra": "mean: 1.169289297752449 msec\nrounds: 890"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.7193594685156457,
            "unit": "iter/sec",
            "range": "stddev: 0.0015217861809878083",
            "extra": "mean: 268.8634987999933 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.7707338029505563,
            "unit": "iter/sec",
            "range": "stddev: 0.012027631423494424",
            "extra": "mean: 1.2974648265999975 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1302.3650257218283,
            "unit": "iter/sec",
            "range": "stddev: 0.000049435453822743494",
            "extra": "mean: 767.8338870054927 usec\nrounds: 1062"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 439.0724285421615,
            "unit": "iter/sec",
            "range": "stddev: 0.0013295761248106074",
            "extra": "mean: 2.2775285693075036 msec\nrounds: 404"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.9151486311277158,
            "unit": "iter/sec",
            "range": "stddev: 0.02204780048439303",
            "extra": "mean: 1.0927186753999991 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.18117475131700445,
            "unit": "iter/sec",
            "range": "stddev: 0.020922789942687495",
            "extra": "mean: 5.5195328969999995 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1403.3085392092614,
            "unit": "iter/sec",
            "range": "stddev: 0.00007594338765128961",
            "extra": "mean: 712.6016638960108 usec\nrounds: 1083"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 889.2557569001954,
            "unit": "iter/sec",
            "range": "stddev: 0.00012783258117452526",
            "extra": "mean: 1.1245358742302007 msec\nrounds: 811"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.518970204452547,
            "unit": "iter/sec",
            "range": "stddev: 0.0027088306642152012",
            "extra": "mean: 221.28935460001458 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9224442126878013,
            "unit": "iter/sec",
            "range": "stddev: 0.01000872695769617",
            "extra": "mean: 1.0840763985999957 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "496b4ae4eb2ce3d702a397309724b9c5fa87c3f3",
          "message": "rename joinWithHttp -> SendToHttp (#53)",
          "timestamp": "2020-11-12T13:56:36+02:00",
          "tree_id": "69662b40636851f2007b550ed56e23ac5eda775b",
          "url": "https://github.com/mlrun/storey/commit/496b4ae4eb2ce3d702a397309724b9c5fa87c3f3"
        },
        "date": 1605182425953,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1295.4370246479218,
            "unit": "iter/sec",
            "range": "stddev: 0.00005317004547117737",
            "extra": "mean: 771.940264924714 usec\nrounds: 268"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 822.8153466403252,
            "unit": "iter/sec",
            "range": "stddev: 0.00008156326565827253",
            "extra": "mean: 1.2153395097492354 msec\nrounds: 718"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.969131996953759,
            "unit": "iter/sec",
            "range": "stddev: 0.006692087376860637",
            "extra": "mean: 251.94425399998866 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8087482128552886,
            "unit": "iter/sec",
            "range": "stddev: 0.014517045947750733",
            "extra": "mean: 1.2364787756000055 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4631.182462049659,
            "unit": "iter/sec",
            "range": "stddev: 0.000009221533478185074",
            "extra": "mean: 215.92757534269597 usec\nrounds: 2409"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3097.4411086136734,
            "unit": "iter/sec",
            "range": "stddev: 0.000011029735174982371",
            "extra": "mean: 322.84713895579813 usec\nrounds: 2087"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 13.732731721320901,
            "unit": "iter/sec",
            "range": "stddev: 0.00010729388344029126",
            "extra": "mean: 72.81872392857126 msec\nrounds: 14"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.751231523862575,
            "unit": "iter/sec",
            "range": "stddev: 0.0007119247456193515",
            "extra": "mean: 363.4735904000024 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1292.8188103316365,
            "unit": "iter/sec",
            "range": "stddev: 0.00007713802055640333",
            "extra": "mean: 773.5035969529852 usec\nrounds: 722"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 804.2716338800157,
            "unit": "iter/sec",
            "range": "stddev: 0.000058927672105698685",
            "extra": "mean: 1.2433610211710935 msec\nrounds: 803"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.6180406523134474,
            "unit": "iter/sec",
            "range": "stddev: 0.0024553482746558267",
            "extra": "mean: 276.3926932000004 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.727073350117585,
            "unit": "iter/sec",
            "range": "stddev: 0.009310650506264131",
            "extra": "mean: 1.3753770508000003 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1232.2727562825492,
            "unit": "iter/sec",
            "range": "stddev: 0.00030344132108614763",
            "extra": "mean: 811.5086492837378 usec\nrounds: 978"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 416.15711880408946,
            "unit": "iter/sec",
            "range": "stddev: 0.001302149119523761",
            "extra": "mean: 2.4029385893330377 msec\nrounds: 375"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8585750517797305,
            "unit": "iter/sec",
            "range": "stddev: 0.007039848536733805",
            "extra": "mean: 1.1647205424000049 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.16808677360278396,
            "unit": "iter/sec",
            "range": "stddev: 0.02424056043132612",
            "extra": "mean: 5.949308078000001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1278.1234805985107,
            "unit": "iter/sec",
            "range": "stddev: 0.00021897958997735325",
            "extra": "mean: 782.3970181126216 usec\nrounds: 1049"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 814.5343442659785,
            "unit": "iter/sec",
            "range": "stddev: 0.00006889830057647124",
            "extra": "mean: 1.22769531701104 msec\nrounds: 776"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.333666964440126,
            "unit": "iter/sec",
            "range": "stddev: 0.00594535542836602",
            "extra": "mean: 230.7514648000165 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.8745542079957288,
            "unit": "iter/sec",
            "range": "stddev: 0.01850692392584874",
            "extra": "mean: 1.1434396986000024 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00d1e60d846b68da931f03ca4e3df7207bd256bd",
          "message": "WriteToParquet - support metadata columns, column inference. (#54)\n\n* WriteToParquet - support metadata columns.\r\n\r\n* Update WriteToParquet docstring.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-12T18:17:33+02:00",
          "tree_id": "25ab0093dff4bd4b48459b1346c324a8afed15b8",
          "url": "https://github.com/mlrun/storey/commit/00d1e60d846b68da931f03ca4e3df7207bd256bd"
        },
        "date": 1605198075891,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1318.1023672812303,
            "unit": "iter/sec",
            "range": "stddev: 0.00013615413400501765",
            "extra": "mean: 758.6664168297028 usec\nrounds: 511"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 867.0834629526527,
            "unit": "iter/sec",
            "range": "stddev: 0.00010075945435552428",
            "extra": "mean: 1.153291514284831 msec\nrounds: 700"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.066932484898569,
            "unit": "iter/sec",
            "range": "stddev: 0.007428978875459683",
            "extra": "mean: 245.88556699999913 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7912734811792237,
            "unit": "iter/sec",
            "range": "stddev: 0.017485642904191422",
            "extra": "mean: 1.2637855606000017 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4987.023122346045,
            "unit": "iter/sec",
            "range": "stddev: 0.00002018916475640753",
            "extra": "mean: 200.52042580656214 usec\nrounds: 2480"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3324.034135815541,
            "unit": "iter/sec",
            "range": "stddev: 0.00005824568932556106",
            "extra": "mean: 300.8392691354396 usec\nrounds: 2025"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 14.525684866504475,
            "unit": "iter/sec",
            "range": "stddev: 0.0010549498114035335",
            "extra": "mean: 68.84356979999968 msec\nrounds: 15"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.9026026064361097,
            "unit": "iter/sec",
            "range": "stddev: 0.0024091660671739265",
            "extra": "mean: 344.51839800000243 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1307.9556003142984,
            "unit": "iter/sec",
            "range": "stddev: 0.0001773276769799627",
            "extra": "mean: 764.5519463808272 usec\nrounds: 746"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 835.4374330582151,
            "unit": "iter/sec",
            "range": "stddev: 0.00010530500380936559",
            "extra": "mean: 1.1969777273917264 msec\nrounds: 763"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.5386897863482765,
            "unit": "iter/sec",
            "range": "stddev: 0.005828229973282481",
            "extra": "mean: 282.5904671999922 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.7311737079990877,
            "unit": "iter/sec",
            "range": "stddev: 0.02154460321896915",
            "extra": "mean: 1.3676640571999996 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1271.0447976501878,
            "unit": "iter/sec",
            "range": "stddev: 0.0000984746818917709",
            "extra": "mean: 786.7543314356228 usec\nrounds: 878"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 420.8143468281714,
            "unit": "iter/sec",
            "range": "stddev: 0.001709701573575326",
            "extra": "mean: 2.376344836000385 msec\nrounds: 250"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.9019040818233861,
            "unit": "iter/sec",
            "range": "stddev: 0.021974622292022232",
            "extra": "mean: 1.1087653556000021 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.17581255681974817,
            "unit": "iter/sec",
            "range": "stddev: 0.07913956724352392",
            "extra": "mean: 5.687875872400002 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1351.21055042824,
            "unit": "iter/sec",
            "range": "stddev: 0.00006569771450402442",
            "extra": "mean: 740.0771106198581 usec\nrounds: 904"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 852.7646519160037,
            "unit": "iter/sec",
            "range": "stddev: 0.00018071717625853346",
            "extra": "mean: 1.1726564858817563 msec\nrounds: 850"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.340636743161458,
            "unit": "iter/sec",
            "range": "stddev: 0.006871712054330203",
            "extra": "mean: 230.3809461999947 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.8628851751504418,
            "unit": "iter/sec",
            "range": "stddev: 0.009508378779023984",
            "extra": "mean: 1.1589027471999997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8c3718b79eeff3a9e07a15db109d8142379ae820",
          "message": "Support metadata columns and column inference in WriteToTSDB. (#55)\n\n* Support metadata columns and column inference in WriteToTSDB.\r\n\r\n* WriteToTSDB unit test.\r\n\r\n* Update type annotation.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-16T10:24:51+02:00",
          "tree_id": "7c1b0c5b7bbbe585b93ac8489ff5961c56d8bee7",
          "url": "https://github.com/mlrun/storey/commit/8c3718b79eeff3a9e07a15db109d8142379ae820"
        },
        "date": 1605515321883,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1163.6102154583323,
            "unit": "iter/sec",
            "range": "stddev: 0.000660393083925407",
            "extra": "mean: 859.3943115273457 usec\nrounds: 321"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 778.5473429027359,
            "unit": "iter/sec",
            "range": "stddev: 0.0007348619119802818",
            "extra": "mean: 1.2844434049079148 msec\nrounds: 815"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.606298154209683,
            "unit": "iter/sec",
            "range": "stddev: 0.026164978090108943",
            "extra": "mean: 277.2926577999897 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7732131469209929,
            "unit": "iter/sec",
            "range": "stddev: 0.06924792934253315",
            "extra": "mean: 1.293304445199999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4840.84760948886,
            "unit": "iter/sec",
            "range": "stddev: 0.000010546180953299278",
            "extra": "mean: 206.57539354055166 usec\nrounds: 2508"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3252.7353971167304,
            "unit": "iter/sec",
            "range": "stddev: 0.000036406250337326074",
            "extra": "mean: 307.4335529678848 usec\nrounds: 2190"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 14.368474881021307,
            "unit": "iter/sec",
            "range": "stddev: 0.00041298757025043565",
            "extra": "mean: 69.59680886667077 msec\nrounds: 15"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.871274754655773,
            "unit": "iter/sec",
            "range": "stddev: 0.0007759321811213716",
            "extra": "mean: 348.2773630000054 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1063.918003443399,
            "unit": "iter/sec",
            "range": "stddev: 0.0010716740245049683",
            "extra": "mean: 939.9220586205643 usec\nrounds: 870"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 773.8175227406725,
            "unit": "iter/sec",
            "range": "stddev: 0.0006580311287279105",
            "extra": "mean: 1.2922943337574526 msec\nrounds: 785"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.202306357399223,
            "unit": "iter/sec",
            "range": "stddev: 0.02252405300714649",
            "extra": "mean: 312.27493199999685 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6945400958311941,
            "unit": "iter/sec",
            "range": "stddev: 0.06784516434105886",
            "extra": "mean: 1.439801684600002 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1224.285006708724,
            "unit": "iter/sec",
            "range": "stddev: 0.000366704243960486",
            "extra": "mean: 816.8032725389041 usec\nrounds: 965"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 415.6790448447406,
            "unit": "iter/sec",
            "range": "stddev: 0.0013289646586419179",
            "extra": "mean: 2.4057022176172196 msec\nrounds: 386"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8271792261830642,
            "unit": "iter/sec",
            "range": "stddev: 0.034081581930810026",
            "extra": "mean: 1.2089278457999968 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.16617338815370114,
            "unit": "iter/sec",
            "range": "stddev: 0.06419094997792353",
            "extra": "mean: 6.0178107403999945 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1234.688989026533,
            "unit": "iter/sec",
            "range": "stddev: 0.0002436630640384447",
            "extra": "mean: 809.9205620910501 usec\nrounds: 1071"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 805.8693908823891,
            "unit": "iter/sec",
            "range": "stddev: 0.0007725560050877077",
            "extra": "mean: 1.2408958713583191 msec\nrounds: 824"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.9853173448500874,
            "unit": "iter/sec",
            "range": "stddev: 0.01847643583134333",
            "extra": "mean: 250.9210468000049 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.8426421375347111,
            "unit": "iter/sec",
            "range": "stddev: 0.08962724067484723",
            "extra": "mean: 1.1867434055999921 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d9f7794e8220e355a6f6fd6e04787f6a3894e96",
          "message": "add support for passing aggregations as dict (#57)\n\n* add support for passing aggregations as dict\r\n\r\n* deal with empty aggr list",
          "timestamp": "2020-11-17T15:18:31+02:00",
          "tree_id": "4b4564ab9b19457e1b4a64460804f33d21d864ab",
          "url": "https://github.com/mlrun/storey/commit/6d9f7794e8220e355a6f6fd6e04787f6a3894e96"
        },
        "date": 1605619398720,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1032.4001715489205,
            "unit": "iter/sec",
            "range": "stddev: 0.0006153441084454285",
            "extra": "mean: 968.6166542375616 usec\nrounds: 590"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 641.3728316363563,
            "unit": "iter/sec",
            "range": "stddev: 0.0010955273430317482",
            "extra": "mean: 1.5591555343070365 msec\nrounds: 685"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.005957631877224,
            "unit": "iter/sec",
            "range": "stddev: 0.026321176322942466",
            "extra": "mean: 332.67268620000436 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.5575469924869723,
            "unit": "iter/sec",
            "range": "stddev: 0.130518212950298",
            "extra": "mean: 1.793570790399997 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4353.446386695022,
            "unit": "iter/sec",
            "range": "stddev: 0.00010344794940602583",
            "extra": "mean: 229.7030699760526 usec\nrounds: 1672"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2899.0221959026258,
            "unit": "iter/sec",
            "range": "stddev: 0.00023228944252906856",
            "extra": "mean: 344.9438922590397 usec\nrounds: 1912"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 13.241061042723462,
            "unit": "iter/sec",
            "range": "stddev: 0.0049825258478931106",
            "extra": "mean: 75.52264858332809 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.645558296011217,
            "unit": "iter/sec",
            "range": "stddev: 0.005671739786545042",
            "extra": "mean: 377.99204859999804 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 931.2231444393052,
            "unit": "iter/sec",
            "range": "stddev: 0.001149159296064258",
            "extra": "mean: 1.0738564714283445 msec\nrounds: 770"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 627.1174401794204,
            "unit": "iter/sec",
            "range": "stddev: 0.0006914815810765833",
            "extra": "mean: 1.594597655765875 msec\nrounds: 581"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.5026266505707975,
            "unit": "iter/sec",
            "range": "stddev: 0.051163795286239926",
            "extra": "mean: 399.5801770000014 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.5316514327880077,
            "unit": "iter/sec",
            "range": "stddev: 0.06727234390580379",
            "extra": "mean: 1.8809316373999934 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 960.3664674950097,
            "unit": "iter/sec",
            "range": "stddev: 0.0009120977649571331",
            "extra": "mean: 1.0412691757224397 msec\nrounds: 865"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 339.34160822883285,
            "unit": "iter/sec",
            "range": "stddev: 0.0021561049284172565",
            "extra": "mean: 2.9468829514288637 msec\nrounds: 350"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.6992865603132624,
            "unit": "iter/sec",
            "range": "stddev: 0.03470526095422273",
            "extra": "mean: 1.4300289134000024 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.13872334754764667,
            "unit": "iter/sec",
            "range": "stddev: 0.09883418289423962",
            "extra": "mean: 7.208591903800004 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1008.8271598762052,
            "unit": "iter/sec",
            "range": "stddev: 0.0011286396702660266",
            "extra": "mean: 991.2500770922064 usec\nrounds: 908"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 668.4286008256302,
            "unit": "iter/sec",
            "range": "stddev: 0.0010105948001430545",
            "extra": "mean: 1.4960460979150492 msec\nrounds: 623"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.185664450845056,
            "unit": "iter/sec",
            "range": "stddev: 0.022460382278746305",
            "extra": "mean: 313.9062558000205 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6113665366264632,
            "unit": "iter/sec",
            "range": "stddev: 0.03216077162190215",
            "extra": "mean: 1.6356799727999942 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "78d15f095c3dfb524699a36602c4e8b72521e3bd",
          "message": "support passing key as string to joinWithTable (#59)\n\n* support passing key as string to joinWithTable\r\n\r\n* update doc",
          "timestamp": "2020-11-18T10:13:53+02:00",
          "tree_id": "a514b50922321ee0c693fb44451420c63347ed5d",
          "url": "https://github.com/mlrun/storey/commit/78d15f095c3dfb524699a36602c4e8b72521e3bd"
        },
        "date": 1605687438025,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1389.716417183084,
            "unit": "iter/sec",
            "range": "stddev: 0.00005519568091723263",
            "extra": "mean: 719.5712647814665 usec\nrounds: 778"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 860.9840553026352,
            "unit": "iter/sec",
            "range": "stddev: 0.00008422432663525599",
            "extra": "mean: 1.1614616947215135 msec\nrounds: 701"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.753587164370234,
            "unit": "iter/sec",
            "range": "stddev: 0.004702978833453017",
            "extra": "mean: 266.4118232000021 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8473492577550276,
            "unit": "iter/sec",
            "range": "stddev: 0.011883081740886935",
            "extra": "mean: 1.180150912800002 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5400.808570780843,
            "unit": "iter/sec",
            "range": "stddev: 0.000021610157068228152",
            "extra": "mean: 185.15746057176415 usec\nrounds: 2625"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3571.099572169457,
            "unit": "iter/sec",
            "range": "stddev: 0.0001353556917242375",
            "extra": "mean: 280.0257959182292 usec\nrounds: 2401"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 16.667498391177855,
            "unit": "iter/sec",
            "range": "stddev: 0.002459815358557934",
            "extra": "mean: 59.99700594117365 msec\nrounds: 17"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 3.453378891477224,
            "unit": "iter/sec",
            "range": "stddev: 0.0052265920630423564",
            "extra": "mean: 289.57146939999916 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1410.5134826234291,
            "unit": "iter/sec",
            "range": "stddev: 0.00022409003513256857",
            "extra": "mean: 708.961674113238 usec\nrounds: 761"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 874.0010088751999,
            "unit": "iter/sec",
            "range": "stddev: 0.00009486811956907403",
            "extra": "mean: 1.144163438995288 msec\nrounds: 836"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.079187910832641,
            "unit": "iter/sec",
            "range": "stddev: 0.005140667876036899",
            "extra": "mean: 245.1468335999948 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.810542225245366,
            "unit": "iter/sec",
            "range": "stddev: 0.011039442099049543",
            "extra": "mean: 1.2337420172000066 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1338.7854104916257,
            "unit": "iter/sec",
            "range": "stddev: 0.00007166691594685874",
            "extra": "mean: 746.9456958249809 usec\nrounds: 1006"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 469.0722651804562,
            "unit": "iter/sec",
            "range": "stddev: 0.0011570277341023715",
            "extra": "mean: 2.1318676763276363 msec\nrounds: 414"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.9873292927695576,
            "unit": "iter/sec",
            "range": "stddev: 0.020260375734080602",
            "extra": "mean: 1.012833314400001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.19343634676546942,
            "unit": "iter/sec",
            "range": "stddev: 0.060834229413837336",
            "extra": "mean: 5.169659253399999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1378.6141846386029,
            "unit": "iter/sec",
            "range": "stddev: 0.00031923559330516136",
            "extra": "mean: 725.3661039779199 usec\nrounds: 1106"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 910.777099823321,
            "unit": "iter/sec",
            "range": "stddev: 0.00010132926968590217",
            "extra": "mean: 1.0979634865588814 msec\nrounds: 744"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.603545128784501,
            "unit": "iter/sec",
            "range": "stddev: 0.0024697375585239355",
            "extra": "mean: 217.22389419999786 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9166208406354952,
            "unit": "iter/sec",
            "range": "stddev: 0.022672730117459947",
            "extra": "mean: 1.0909636304000003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9220c4dc1e62ba971fe679bd7d30e8a371683432",
          "message": "Writer API changes. (#60)\n\n* Writer API changes.\r\n\r\n* Added test.\r\n\r\n* Support rename, better $ syntax.\r\n\r\n* Update documentation.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-18T11:20:35+02:00",
          "tree_id": "54bc9c5973f2d154e609446a040306a1653eb7ed",
          "url": "https://github.com/mlrun/storey/commit/9220c4dc1e62ba971fe679bd7d30e8a371683432"
        },
        "date": 1605691478485,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1178.9608514316276,
            "unit": "iter/sec",
            "range": "stddev: 0.00014840561784799946",
            "extra": "mean: 848.2045852376582 usec\nrounds: 569"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 681.0574373748105,
            "unit": "iter/sec",
            "range": "stddev: 0.000853163280562617",
            "extra": "mean: 1.4683049404094002 msec\nrounds: 537"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 2.919118992746974,
            "unit": "iter/sec",
            "range": "stddev: 0.008571086165771472",
            "extra": "mean: 342.5691115999939 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.5968780992469992,
            "unit": "iter/sec",
            "range": "stddev: 0.01505229519718454",
            "extra": "mean: 1.67538397080001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3551.158083461062,
            "unit": "iter/sec",
            "range": "stddev: 0.0002520135652073219",
            "extra": "mean: 281.5982776597123 usec\nrounds: 2820"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2465.0780103110965,
            "unit": "iter/sec",
            "range": "stddev: 0.0002474618287989966",
            "extra": "mean: 405.66667497626116 usec\nrounds: 2126"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 11.342655555051818,
            "unit": "iter/sec",
            "range": "stddev: 0.0038689967287055776",
            "extra": "mean: 88.1627759166695 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.2115676569109426,
            "unit": "iter/sec",
            "range": "stddev: 0.017628763808069863",
            "extra": "mean: 452.16794379999783 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1085.1772041141708,
            "unit": "iter/sec",
            "range": "stddev: 0.0005896389942651021",
            "extra": "mean: 921.5084837838068 usec\nrounds: 370"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 716.4179486181935,
            "unit": "iter/sec",
            "range": "stddev: 0.0005703272466213296",
            "extra": "mean: 1.3958332589639493 msec\nrounds: 753"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.660578427448305,
            "unit": "iter/sec",
            "range": "stddev: 0.010261560158741405",
            "extra": "mean: 375.8581177999986 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.5368200252633206,
            "unit": "iter/sec",
            "range": "stddev: 0.020619590345851594",
            "extra": "mean: 1.8628217148000032 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1118.1658933182746,
            "unit": "iter/sec",
            "range": "stddev: 0.00027378991238776753",
            "extra": "mean: 894.3216797933221 usec\nrounds: 965"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 377.9496905320524,
            "unit": "iter/sec",
            "range": "stddev: 0.0013476028393678808",
            "extra": "mean: 2.64585479245205 msec\nrounds: 371"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8042456856785101,
            "unit": "iter/sec",
            "range": "stddev: 0.020514448050443036",
            "extra": "mean: 1.243401136999995 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.15797371871947283,
            "unit": "iter/sec",
            "range": "stddev: 0.04414568265766886",
            "extra": "mean: 6.330166866399997 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1116.4458100424868,
            "unit": "iter/sec",
            "range": "stddev: 0.00044310101908898376",
            "extra": "mean: 895.6995413525217 usec\nrounds: 931"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 688.175159118153,
            "unit": "iter/sec",
            "range": "stddev: 0.0006248821863197758",
            "extra": "mean: 1.453118420143831 msec\nrounds: 695"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.152584153747766,
            "unit": "iter/sec",
            "range": "stddev: 0.006850548886746546",
            "extra": "mean: 317.20009720000917 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6256995365399615,
            "unit": "iter/sec",
            "range": "stddev: 0.017323610062547422",
            "extra": "mean: 1.5982111885999983 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "349b368887015602ef9a1928a27e9b669c540522",
          "message": "support passing emit_policy as dict (#62)\n\n* support passing emit_policy as dict\r\n\r\n* Dict typing + bad arguments handling when parsing emit policy\r\n\r\n* more typing annotations\r\n\r\n* more typing and delete comment line\r\n\r\n* add missing Optional\r\n\r\n* typo",
          "timestamp": "2020-11-18T17:22:13+02:00",
          "tree_id": "8d4c72ad368b5a0e057acb0e9049a8b18204a3b7",
          "url": "https://github.com/mlrun/storey/commit/349b368887015602ef9a1928a27e9b669c540522"
        },
        "date": 1605713186077,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1259.962152053851,
            "unit": "iter/sec",
            "range": "stddev: 0.00016482179605849037",
            "extra": "mean: 793.6746340911197 usec\nrounds: 440"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 828.2356814354035,
            "unit": "iter/sec",
            "range": "stddev: 0.00016949294201306484",
            "extra": "mean: 1.2073857990118393 msec\nrounds: 607"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.9916544468685564,
            "unit": "iter/sec",
            "range": "stddev: 0.007855029105934693",
            "extra": "mean: 250.52268759999947 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7576218912389556,
            "unit": "iter/sec",
            "range": "stddev: 0.0766716700803432",
            "extra": "mean: 1.3199196216000018 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4824.933494874124,
            "unit": "iter/sec",
            "range": "stddev: 0.000039110351685879776",
            "extra": "mean: 207.256742722438 usec\nrounds: 2336"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3013.937584567351,
            "unit": "iter/sec",
            "range": "stddev: 0.00010148330827634235",
            "extra": "mean: 331.79187423138006 usec\nrounds: 1789"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 14.424674622228556,
            "unit": "iter/sec",
            "range": "stddev: 0.002982026207685921",
            "extra": "mean: 69.32565386667306 msec\nrounds: 15"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.785961240203953,
            "unit": "iter/sec",
            "range": "stddev: 0.02730147099330938",
            "extra": "mean: 358.94253859999594 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1203.158166202988,
            "unit": "iter/sec",
            "range": "stddev: 0.0001252893504024365",
            "extra": "mean: 831.1459192068413 usec\nrounds: 656"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 769.2280944848144,
            "unit": "iter/sec",
            "range": "stddev: 0.0001563189823125604",
            "extra": "mean: 1.300004520336382 msec\nrounds: 713"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.301006835275334,
            "unit": "iter/sec",
            "range": "stddev: 0.011378992261068924",
            "extra": "mean: 302.93787620000217 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.673142775767358,
            "unit": "iter/sec",
            "range": "stddev: 0.041378802021195885",
            "extra": "mean: 1.4855689401999996 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1185.3567322461074,
            "unit": "iter/sec",
            "range": "stddev: 0.00009137254881400239",
            "extra": "mean: 843.6278909093646 usec\nrounds: 935"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 404.4323997045886,
            "unit": "iter/sec",
            "range": "stddev: 0.0015175297681225214",
            "extra": "mean: 2.472601108937945 msec\nrounds: 358"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8776045180046683,
            "unit": "iter/sec",
            "range": "stddev: 0.017212697590917883",
            "extra": "mean: 1.1394654191999962 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.165004964339687,
            "unit": "iter/sec",
            "range": "stddev: 0.09602750787356748",
            "extra": "mean: 6.060423721200005 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1162.0980930471717,
            "unit": "iter/sec",
            "range": "stddev: 0.000325897963402947",
            "extra": "mean: 860.5125556809671 usec\nrounds: 880"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 714.0511998711254,
            "unit": "iter/sec",
            "range": "stddev: 0.0005945012985623403",
            "extra": "mean: 1.4004597992139551 msec\nrounds: 762"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.725971542068338,
            "unit": "iter/sec",
            "range": "stddev: 0.01812110969320746",
            "extra": "mean: 268.38637619998735 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.7518180171585457,
            "unit": "iter/sec",
            "range": "stddev: 0.09756368332986878",
            "extra": "mean: 1.3301091184000142 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69e4c770f7583ffe7baf68274138da341c40eb2e",
          "message": "Select columns to persist in write table (#61)\n\n* support requesting specific columns to persist in WriteToTable\r\n\r\n* get columns from the events body\r\n\r\n* use last event of batch in WriteToTable\r\n\r\n* add docs\r\n\r\n* use _Writer in WriteToTable\r\n\r\n* update doc\r\n\r\n* typing and formatting",
          "timestamp": "2020-11-18T17:56:33+02:00",
          "tree_id": "f435b9a527fa822a8331dbde0f45ea2761f9ead9",
          "url": "https://github.com/mlrun/storey/commit/69e4c770f7583ffe7baf68274138da341c40eb2e"
        },
        "date": 1605715275050,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1065.7057701253896,
            "unit": "iter/sec",
            "range": "stddev: 0.0002101990839475487",
            "extra": "mean: 938.3452994557224 usec\nrounds: 551"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 640.6726630384052,
            "unit": "iter/sec",
            "range": "stddev: 0.000701903852643853",
            "extra": "mean: 1.5608594804989437 msec\nrounds: 641"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 2.6608089985409915,
            "unit": "iter/sec",
            "range": "stddev: 0.026084859770923837",
            "extra": "mean: 375.82554800000025 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.5238255947737824,
            "unit": "iter/sec",
            "range": "stddev: 0.09504503118785766",
            "extra": "mean: 1.9090323382000007 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3413.0021492771407,
            "unit": "iter/sec",
            "range": "stddev: 0.00004564469187827401",
            "extra": "mean: 292.99717851387686 usec\nrounds: 2476"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2243.2635326326285,
            "unit": "iter/sec",
            "range": "stddev: 0.00009474590860868195",
            "extra": "mean: 445.7791006063515 usec\nrounds: 1978"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 10.169785389912878,
            "unit": "iter/sec",
            "range": "stddev: 0.0039454876778222585",
            "extra": "mean: 98.33049190908903 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.0276529846019162,
            "unit": "iter/sec",
            "range": "stddev: 0.015904103268989216",
            "extra": "mean: 493.18103620000215 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 999.4509564189589,
            "unit": "iter/sec",
            "range": "stddev: 0.00039881903877633166",
            "extra": "mean: 1.0005493451954945 msec\nrounds: 843"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 624.0809114570611,
            "unit": "iter/sec",
            "range": "stddev: 0.0005533887815150856",
            "extra": "mean: 1.6023563317539529 msec\nrounds: 633"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.355686952988856,
            "unit": "iter/sec",
            "range": "stddev: 0.02405639175991716",
            "extra": "mean: 424.5046221999985 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.44736023998991503,
            "unit": "iter/sec",
            "range": "stddev: 0.055894437947223596",
            "extra": "mean: 2.235334995400001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 984.2636702986943,
            "unit": "iter/sec",
            "range": "stddev: 0.0003902810635477151",
            "extra": "mean: 1.0159879208957596 msec\nrounds: 670"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 357.1999567991042,
            "unit": "iter/sec",
            "range": "stddev: 0.0015804912867032385",
            "extra": "mean: 2.7995524102552407 msec\nrounds: 351"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.7220400686573423,
            "unit": "iter/sec",
            "range": "stddev: 0.019595193483606332",
            "extra": "mean: 1.3849646901999961 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.14066225358949497,
            "unit": "iter/sec",
            "range": "stddev: 0.10000240028988451",
            "extra": "mean: 7.109227774199991 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1069.545673548249,
            "unit": "iter/sec",
            "range": "stddev: 0.00032790279338750547",
            "extra": "mean: 934.976434136254 usec\nrounds: 873"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 661.9729951659915,
            "unit": "iter/sec",
            "range": "stddev: 0.0003220253185311386",
            "extra": "mean: 1.5106356411854043 msec\nrounds: 641"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 2.8706427254695583,
            "unit": "iter/sec",
            "range": "stddev: 0.011089088470338071",
            "extra": "mean: 348.35404320000407 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.5794123042297412,
            "unit": "iter/sec",
            "range": "stddev: 0.028687615888538458",
            "extra": "mean: 1.7258867177999946 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "242a03cfc0f25cf76c3128cd779e6b4d98211536",
          "message": "Docstring and minor API changes. (#63)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-19T13:31:30+02:00",
          "tree_id": "3a02496331eacc9d39e961ec346ab1c32a2c93c2",
          "url": "https://github.com/mlrun/storey/commit/242a03cfc0f25cf76c3128cd779e6b4d98211536"
        },
        "date": 1605785749028,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1189.5454625139782,
            "unit": "iter/sec",
            "range": "stddev: 0.00032675750787630015",
            "extra": "mean: 840.6572354843893 usec\nrounds: 620"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 812.7008866002354,
            "unit": "iter/sec",
            "range": "stddev: 0.0003805195447533459",
            "extra": "mean: 1.2304650043920726 msec\nrounds: 683"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.1300419125946233,
            "unit": "iter/sec",
            "range": "stddev: 0.01181504513539489",
            "extra": "mean: 319.4845397999984 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7702625601044255,
            "unit": "iter/sec",
            "range": "stddev: 0.01683050296675719",
            "extra": "mean: 1.2982586091999964 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4262.999798430823,
            "unit": "iter/sec",
            "range": "stddev: 0.00004969710338464913",
            "extra": "mean: 234.5766003479738 usec\nrounds: 2875"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2897.653634201396,
            "unit": "iter/sec",
            "range": "stddev: 0.00009419052593279383",
            "extra": "mean: 345.1068092462347 usec\nrounds: 2574"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 13.013156684366567,
            "unit": "iter/sec",
            "range": "stddev: 0.0038240370843779866",
            "extra": "mean: 76.84530542857105 msec\nrounds: 14"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.6794291621717274,
            "unit": "iter/sec",
            "range": "stddev: 0.005980222599871019",
            "extra": "mean: 373.2138225999904 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1249.5144277813579,
            "unit": "iter/sec",
            "range": "stddev: 0.00021876168306050355",
            "extra": "mean: 800.310886986398 usec\nrounds: 876"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 723.5856158132526,
            "unit": "iter/sec",
            "range": "stddev: 0.0003489241870322891",
            "extra": "mean: 1.382006466333745 msec\nrounds: 802"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.5471749602186935,
            "unit": "iter/sec",
            "range": "stddev: 0.015160262279702616",
            "extra": "mean: 392.59179899999594 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.49089141071413755,
            "unit": "iter/sec",
            "range": "stddev: 0.06036611442606464",
            "extra": "mean: 2.0371104039999866 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1059.6732270534267,
            "unit": "iter/sec",
            "range": "stddev: 0.00016134914502379487",
            "extra": "mean: 943.6871428569007 usec\nrounds: 931"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 381.9066289671962,
            "unit": "iter/sec",
            "range": "stddev: 0.00026013180094893893",
            "extra": "mean: 2.6184410642578686 msec\nrounds: 249"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.7595763145967034,
            "unit": "iter/sec",
            "range": "stddev: 0.027333334397115213",
            "extra": "mean: 1.3165234101999999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.15609592373800538,
            "unit": "iter/sec",
            "range": "stddev: 0.424112328968041",
            "extra": "mean: 6.406317192999995 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1175.6051545294317,
            "unit": "iter/sec",
            "range": "stddev: 0.0006336980931019509",
            "extra": "mean: 850.6257361556716 usec\nrounds: 921"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 775.9288869529666,
            "unit": "iter/sec",
            "range": "stddev: 0.0002271053715196167",
            "extra": "mean: 1.2887778980970142 msec\nrounds: 736"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.6985903751134717,
            "unit": "iter/sec",
            "range": "stddev: 0.006269711582017789",
            "extra": "mean: 270.37327699997604 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.7614784413098155,
            "unit": "iter/sec",
            "range": "stddev: 0.07709143699887261",
            "extra": "mean: 1.3132348150000213 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b376e75869f008e6d689d9f9746acd77243947c",
          "message": "Minor API changes. (#64)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-19T15:57:18+02:00",
          "tree_id": "b790ce1f7828ee8e3654008407d78e25754b72a1",
          "url": "https://github.com/mlrun/storey/commit/7b376e75869f008e6d689d9f9746acd77243947c"
        },
        "date": 1605794437067,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1583.417425442584,
            "unit": "iter/sec",
            "range": "stddev: 0.000024747324596516395",
            "extra": "mean: 631.5454054830096 usec\nrounds: 693"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 1023.6023769780772,
            "unit": "iter/sec",
            "range": "stddev: 0.00004550288460620604",
            "extra": "mean: 976.9418501667051 usec\nrounds: 901"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.525471843185179,
            "unit": "iter/sec",
            "range": "stddev: 0.01143966451306034",
            "extra": "mean: 220.97143340000684 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8901753289701813,
            "unit": "iter/sec",
            "range": "stddev: 0.020438439606611607",
            "extra": "mean: 1.1233742022000002 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5535.666758255309,
            "unit": "iter/sec",
            "range": "stddev: 0.000008384062465211571",
            "extra": "mean: 180.6467122517275 usec\nrounds: 2669"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3714.3599148203116,
            "unit": "iter/sec",
            "range": "stddev: 0.00003345085251795659",
            "extra": "mean: 269.2253908970953 usec\nrounds: 2351"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 15.960643590646843,
            "unit": "iter/sec",
            "range": "stddev: 0.00011053758403139364",
            "extra": "mean: 62.654115062503735 msec\nrounds: 16"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 3.190600700660142,
            "unit": "iter/sec",
            "range": "stddev: 0.0009680941467351947",
            "extra": "mean: 313.4206044000109 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1569.9287328932128,
            "unit": "iter/sec",
            "range": "stddev: 0.000025342627690578258",
            "extra": "mean: 636.9715892498544 usec\nrounds: 986"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 1000.1707914108241,
            "unit": "iter/sec",
            "range": "stddev: 0.000047257151186588224",
            "extra": "mean: 999.8292377539008 usec\nrounds: 837"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.118532047536474,
            "unit": "iter/sec",
            "range": "stddev: 0.0016967273631608734",
            "extra": "mean: 242.80495779999 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.8150272264498833,
            "unit": "iter/sec",
            "range": "stddev: 0.006204290639860764",
            "extra": "mean: 1.226952876599995 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1501.4979975656308,
            "unit": "iter/sec",
            "range": "stddev: 0.00010776702764142454",
            "extra": "mean: 666.001554195406 usec\nrounds: 1144"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 494.79589990226276,
            "unit": "iter/sec",
            "range": "stddev: 0.0013626996107897961",
            "extra": "mean: 2.0210353404252754 msec\nrounds: 282"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.0728788708472397,
            "unit": "iter/sec",
            "range": "stddev: 0.002260157612731403",
            "extra": "mean: 932.0716692000019 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.21170228260609703,
            "unit": "iter/sec",
            "range": "stddev: 0.018720725438730667",
            "extra": "mean: 4.7236146331999915 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1564.7643442692329,
            "unit": "iter/sec",
            "range": "stddev: 0.000040725145056639274",
            "extra": "mean: 639.0738667214546 usec\nrounds: 1223"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 991.0403193282045,
            "unit": "iter/sec",
            "range": "stddev: 0.00012556338313425891",
            "extra": "mean: 1.0090406822982427 msec\nrounds: 853"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.71209812259764,
            "unit": "iter/sec",
            "range": "stddev: 0.011505737483751353",
            "extra": "mean: 212.21968940000124 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9221539511610217,
            "unit": "iter/sec",
            "range": "stddev: 0.04614772997589666",
            "extra": "mean: 1.0844176275999984 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c2e6e2c3a420b5a9c7f59ffd6b054ee86640e055",
          "message": "Writer API: separate index from columns. (#65)\n\n* Writer API: separate index from columns.\r\n\r\nAnd other API changes.\r\n\r\n* Fix integration tests.\r\n\r\n* CR touch ups.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-22T15:54:41+02:00",
          "tree_id": "b0ad785cdd5c6f41bbbcfd1af4e2db6fb21aaefe",
          "url": "https://github.com/mlrun/storey/commit/c2e6e2c3a420b5a9c7f59ffd6b054ee86640e055"
        },
        "date": 1606053511207,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1205.2065273868834,
            "unit": "iter/sec",
            "range": "stddev: 0.00021782862599238894",
            "extra": "mean: 829.7333090023914 usec\nrounds: 411"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 801.8925568717841,
            "unit": "iter/sec",
            "range": "stddev: 0.0006587957840434899",
            "extra": "mean: 1.2470498590248065 msec\nrounds: 759"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.4388701845109875,
            "unit": "iter/sec",
            "range": "stddev: 0.02074753122383943",
            "extra": "mean: 290.79318099999796 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7192258540252385,
            "unit": "iter/sec",
            "range": "stddev: 0.036763625086429184",
            "extra": "mean: 1.3903838334 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4700.80955115647,
            "unit": "iter/sec",
            "range": "stddev: 0.000011826719718858175",
            "extra": "mean: 212.7293159013398 usec\nrounds: 2352"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3133.4515957466965,
            "unit": "iter/sec",
            "range": "stddev: 0.00005463576815473",
            "extra": "mean: 319.1368908833269 usec\nrounds: 2117"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 14.02543838828903,
            "unit": "iter/sec",
            "range": "stddev: 0.0003844861915503716",
            "extra": "mean: 71.29901913333279 msec\nrounds: 15"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.849838705883447,
            "unit": "iter/sec",
            "range": "stddev: 0.0009019724750374441",
            "extra": "mean: 350.89705179998987 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1233.5824193045596,
            "unit": "iter/sec",
            "range": "stddev: 0.00025411465290053",
            "extra": "mean: 810.6470912286159 usec\nrounds: 855"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 770.3899157211781,
            "unit": "iter/sec",
            "range": "stddev: 0.0005491629839001864",
            "extra": "mean: 1.298043989924088 msec\nrounds: 794"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.0604512705299274,
            "unit": "iter/sec",
            "range": "stddev: 0.022437031303124497",
            "extra": "mean: 326.7491985999982 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6637435944805488,
            "unit": "iter/sec",
            "range": "stddev: 0.03851028472763033",
            "extra": "mean: 1.506605876599997 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1239.3940501307052,
            "unit": "iter/sec",
            "range": "stddev: 0.00012595385358833496",
            "extra": "mean: 806.8458936804974 usec\nrounds: 997"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 415.76335910900474,
            "unit": "iter/sec",
            "range": "stddev: 0.0004221932473110016",
            "extra": "mean: 2.4052143559332273 msec\nrounds: 236"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8044002514918722,
            "unit": "iter/sec",
            "range": "stddev: 0.016573890281068246",
            "extra": "mean: 1.2431622170000083 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.16078467243584227,
            "unit": "iter/sec",
            "range": "stddev: 0.09146712355789573",
            "extra": "mean: 6.219498319399998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1248.1917749460783,
            "unit": "iter/sec",
            "range": "stddev: 0.00048218241041831283",
            "extra": "mean: 801.1589405347586 usec\nrounds: 1009"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 759.2830198525493,
            "unit": "iter/sec",
            "range": "stddev: 0.0007346964069864696",
            "extra": "mean: 1.3170319549542902 msec\nrounds: 777"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.9769050940313355,
            "unit": "iter/sec",
            "range": "stddev: 0.00863918077379835",
            "extra": "mean: 251.451813999995 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.8082758783936785,
            "unit": "iter/sec",
            "range": "stddev: 0.011136803291270474",
            "extra": "mean: 1.2372013402000106 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f12d5f605d3915c1f4595903cfe37b37f6bc921b",
          "message": "Add Extend step. (#66)\n\n* Add Extend step.\r\n\r\n* Fix duplicate imports.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-22T21:51:57+02:00",
          "tree_id": "5557d18a52af68453e20b2d3f60d242323968b86",
          "url": "https://github.com/mlrun/storey/commit/f12d5f605d3915c1f4595903cfe37b37f6bc921b"
        },
        "date": 1606074960885,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1179.3753512989742,
            "unit": "iter/sec",
            "range": "stddev: 0.000417620203193488",
            "extra": "mean: 847.9064776948164 usec\nrounds: 538"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 769.9407506498071,
            "unit": "iter/sec",
            "range": "stddev: 0.00013262020747936048",
            "extra": "mean: 1.298801237830352 msec\nrounds: 719"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.004182253698611,
            "unit": "iter/sec",
            "range": "stddev: 0.01916443901044186",
            "extra": "mean: 332.86928539999394 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.5989442209690461,
            "unit": "iter/sec",
            "range": "stddev: 0.03248326690530171",
            "extra": "mean: 1.6696045557999981 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3573.9478433668246,
            "unit": "iter/sec",
            "range": "stddev: 0.00004748820848495844",
            "extra": "mean: 279.8026283052731 usec\nrounds: 2685"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2468.8518903599197,
            "unit": "iter/sec",
            "range": "stddev: 0.00006078484084366093",
            "extra": "mean: 405.0465740390023 usec\nrounds: 1587"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 11.315551378105802,
            "unit": "iter/sec",
            "range": "stddev: 0.0013160322861176567",
            "extra": "mean: 88.3739524999972 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.267892110254444,
            "unit": "iter/sec",
            "range": "stddev: 0.0052251971913090224",
            "extra": "mean: 440.9380832000011 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1156.5544759806762,
            "unit": "iter/sec",
            "range": "stddev: 0.00046714184697181383",
            "extra": "mean: 864.6371794567402 usec\nrounds: 847"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 749.2852725278746,
            "unit": "iter/sec",
            "range": "stddev: 0.00014424475209741164",
            "extra": "mean: 1.3346051719744678 msec\nrounds: 785"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.6273751982159537,
            "unit": "iter/sec",
            "range": "stddev: 0.019273510940364474",
            "extra": "mean: 380.60799259999953 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.5387489645816002,
            "unit": "iter/sec",
            "range": "stddev: 0.055215516953104185",
            "extra": "mean: 1.856152059199991 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1105.377905192617,
            "unit": "iter/sec",
            "range": "stddev: 0.00021133442237148445",
            "extra": "mean: 904.6679830512313 usec\nrounds: 885"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 420.41491481238967,
            "unit": "iter/sec",
            "range": "stddev: 0.00021684481546514154",
            "extra": "mean: 2.3786025775185693 msec\nrounds: 258"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8218777123407932,
            "unit": "iter/sec",
            "range": "stddev: 0.017025954322660106",
            "extra": "mean: 1.2167260225999996 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.16358563070157886,
            "unit": "iter/sec",
            "range": "stddev: 0.037666989735385174",
            "extra": "mean: 6.113006354599998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1100.2299764937677,
            "unit": "iter/sec",
            "range": "stddev: 0.0005879609712722421",
            "extra": "mean: 908.9008856010428 usec\nrounds: 1014"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 700.8510465628052,
            "unit": "iter/sec",
            "range": "stddev: 0.0004378549777486478",
            "extra": "mean: 1.426836707891521 msec\nrounds: 849"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.03166162995906,
            "unit": "iter/sec",
            "range": "stddev: 0.046308869667344287",
            "extra": "mean: 329.85211479999634 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6343672174711671,
            "unit": "iter/sec",
            "range": "stddev: 0.02625806143247335",
            "extra": "mean: 1.5763740188000042 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c831671851416aa728ec5aba3d0702eabb87623b",
          "message": "Avoid dropping metadata columns in DataframeSource. (#68)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-23T16:53:07+02:00",
          "tree_id": "d4decb2ab9fb9290152f9ae0db4dc62543997ae2",
          "url": "https://github.com/mlrun/storey/commit/c831671851416aa728ec5aba3d0702eabb87623b"
        },
        "date": 1606143433144,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1214.1389240926644,
            "unit": "iter/sec",
            "range": "stddev: 0.00016156685661769882",
            "extra": "mean: 823.6289770112656 usec\nrounds: 522"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 818.1881487088774,
            "unit": "iter/sec",
            "range": "stddev: 0.00012931224208486607",
            "extra": "mean: 1.22221276558213 msec\nrounds: 738"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.9053603772126104,
            "unit": "iter/sec",
            "range": "stddev: 0.004112653851927308",
            "extra": "mean: 256.0583155999893 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7822123978347569,
            "unit": "iter/sec",
            "range": "stddev: 0.021466331543916445",
            "extra": "mean: 1.2784251473999917 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4650.852819275756,
            "unit": "iter/sec",
            "range": "stddev: 0.000011523870898561596",
            "extra": "mean: 215.0143293839436 usec\nrounds: 2110"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3092.3801594776933,
            "unit": "iter/sec",
            "range": "stddev: 0.000013822950320887291",
            "extra": "mean: 323.3755063830513 usec\nrounds: 1645"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 13.878689731697529,
            "unit": "iter/sec",
            "range": "stddev: 0.0010842538002981232",
            "extra": "mean: 72.05291128571746 msec\nrounds: 14"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.803564708977497,
            "unit": "iter/sec",
            "range": "stddev: 0.0006924101442235686",
            "extra": "mean: 356.6887530000031 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1246.8765269504108,
            "unit": "iter/sec",
            "range": "stddev: 0.00009729521709638955",
            "extra": "mean: 802.0040303796422 usec\nrounds: 790"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 780.8685038637582,
            "unit": "iter/sec",
            "range": "stddev: 0.00006482940295724281",
            "extra": "mean: 1.2806253486367722 msec\nrounds: 697"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.3878616739086254,
            "unit": "iter/sec",
            "range": "stddev: 0.007000988765302564",
            "extra": "mean: 295.1714374000062 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6862580921555625,
            "unit": "iter/sec",
            "range": "stddev: 0.05088407045434905",
            "extra": "mean: 1.4571777169999733 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1224.2929358941333,
            "unit": "iter/sec",
            "range": "stddev: 0.00008167753436403185",
            "extra": "mean: 816.7979824776771 usec\nrounds: 856"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 426.98314540308417,
            "unit": "iter/sec",
            "range": "stddev: 0.0002813784091532418",
            "extra": "mean: 2.342012818927482 msec\nrounds: 243"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8738471492726033,
            "unit": "iter/sec",
            "range": "stddev: 0.019069331604077273",
            "extra": "mean: 1.144364893599993 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.1724068093851505,
            "unit": "iter/sec",
            "range": "stddev: 0.06905332923919115",
            "extra": "mean: 5.800234941799988 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1248.4177956466867,
            "unit": "iter/sec",
            "range": "stddev: 0.00009358508349846524",
            "extra": "mean: 801.0138941362935 usec\nrounds: 614"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 812.6477427094864,
            "unit": "iter/sec",
            "range": "stddev: 0.0000771453411567538",
            "extra": "mean: 1.2305454718496527 msec\nrounds: 746"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.159434581503468,
            "unit": "iter/sec",
            "range": "stddev: 0.0071204949055710485",
            "extra": "mean: 240.41729240000222 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.8252509536819512,
            "unit": "iter/sec",
            "range": "stddev: 0.0447410246787712",
            "extra": "mean: 1.2117526136000039 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4431683a9ba885f5f7e87386acd15ac702e2cc67",
          "message": "Make test faster and more reliable. (#67)\n\n* Make test faster and more reliable.\r\n\r\n* Minor refactoring.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-23T17:09:53+02:00",
          "tree_id": "a523fa73e5f65754beec138660b2bed4fe2b9005",
          "url": "https://github.com/mlrun/storey/commit/4431683a9ba885f5f7e87386acd15ac702e2cc67"
        },
        "date": 1606144426979,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1352.6512821089666,
            "unit": "iter/sec",
            "range": "stddev: 0.00010692409841333652",
            "extra": "mean: 739.2888420146725 usec\nrounds: 576"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 907.948206379494,
            "unit": "iter/sec",
            "range": "stddev: 0.00009598584232834413",
            "extra": "mean: 1.1013844104473414 msec\nrounds: 938"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.167717633076061,
            "unit": "iter/sec",
            "range": "stddev: 0.00985856017947172",
            "extra": "mean: 239.93947959999673 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8512490846261068,
            "unit": "iter/sec",
            "range": "stddev: 0.06315591135569053",
            "extra": "mean: 1.174744288200003 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4957.875111063017,
            "unit": "iter/sec",
            "range": "stddev: 0.00002245285822009004",
            "extra": "mean: 201.69931222523073 usec\nrounds: 2274"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3476.432744861782,
            "unit": "iter/sec",
            "range": "stddev: 0.000052410518151698497",
            "extra": "mean: 287.65118539342217 usec\nrounds: 2492"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 14.801796207443363,
            "unit": "iter/sec",
            "range": "stddev: 0.003647040413489095",
            "extra": "mean: 67.55936819999799 msec\nrounds: 15"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 3.006755271053912,
            "unit": "iter/sec",
            "range": "stddev: 0.015789948325281116",
            "extra": "mean: 332.584434000006 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1362.497939050858,
            "unit": "iter/sec",
            "range": "stddev: 0.00006431307623582397",
            "extra": "mean: 733.946064312302 usec\nrounds: 793"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 828.0498137935213,
            "unit": "iter/sec",
            "range": "stddev: 0.00032571505487539526",
            "extra": "mean: 1.2076568140493 msec\nrounds: 726"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.7709665087393933,
            "unit": "iter/sec",
            "range": "stddev: 0.011688886349340313",
            "extra": "mean: 265.1840046000018 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.7821282989167515,
            "unit": "iter/sec",
            "range": "stddev: 0.02820275778294809",
            "extra": "mean: 1.2785626110000123 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1340.572060188182,
            "unit": "iter/sec",
            "range": "stddev: 0.00006616844788683426",
            "extra": "mean: 745.9502026766287 usec\nrounds: 1046"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 475.8393143846026,
            "unit": "iter/sec",
            "range": "stddev: 0.0014526844940052433",
            "extra": "mean: 2.1015497664233322 msec\nrounds: 274"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.9692637074568893,
            "unit": "iter/sec",
            "range": "stddev: 0.02520263829541737",
            "extra": "mean: 1.0317109702000038 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.18586706020758306,
            "unit": "iter/sec",
            "range": "stddev: 0.06893286051270067",
            "extra": "mean: 5.380189469199996 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1399.8488354394337,
            "unit": "iter/sec",
            "range": "stddev: 0.00006659103341517597",
            "extra": "mean: 714.3628473899361 usec\nrounds: 996"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 873.5885495981125,
            "unit": "iter/sec",
            "range": "stddev: 0.00013907304868062328",
            "extra": "mean: 1.1447036484853677 msec\nrounds: 825"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.6619019697583415,
            "unit": "iter/sec",
            "range": "stddev: 0.00911512230488287",
            "extra": "mean: 214.50472500000615 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9208048228403346,
            "unit": "iter/sec",
            "range": "stddev: 0.017816550012420773",
            "extra": "mean: 1.0860064752000085 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7ea80b0cafa16a66bf2c0d3e7eb67dc96c96dfca",
          "message": "Optimizations and error propagation fix. (#71)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-23T17:34:51+02:00",
          "tree_id": "4533ac97bb1ef33f9c7c2a57b7c416ad7cb317fe",
          "url": "https://github.com/mlrun/storey/commit/7ea80b0cafa16a66bf2c0d3e7eb67dc96c96dfca"
        },
        "date": 1606145916891,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1285.0082574365088,
            "unit": "iter/sec",
            "range": "stddev: 0.000043189366048665015",
            "extra": "mean: 778.2051159693884 usec\nrounds: 526"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 909.2517833203062,
            "unit": "iter/sec",
            "range": "stddev: 0.00005842104779032282",
            "extra": "mean: 1.0998053766233038 msec\nrounds: 616"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.5570209123444165,
            "unit": "iter/sec",
            "range": "stddev: 0.0029340784792695846",
            "extra": "mean: 152.50828285713933 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.1162848280941784,
            "unit": "iter/sec",
            "range": "stddev: 0.015348348130597036",
            "extra": "mean: 895.8287121999945 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4698.703417929871,
            "unit": "iter/sec",
            "range": "stddev: 0.000029843166375477667",
            "extra": "mean: 212.82466907446874 usec\nrounds: 2215"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3956.883799168925,
            "unit": "iter/sec",
            "range": "stddev: 0.00005442432959956181",
            "extra": "mean: 252.72412604333556 usec\nrounds: 2277"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 57.87355326821728,
            "unit": "iter/sec",
            "range": "stddev: 0.0005740465267400766",
            "extra": "mean: 17.279049644065577 msec\nrounds: 59"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 11.506939329283862,
            "unit": "iter/sec",
            "range": "stddev: 0.008523986885106543",
            "extra": "mean: 86.90408208333149 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1322.3885295008333,
            "unit": "iter/sec",
            "range": "stddev: 0.0000511890075818938",
            "extra": "mean: 756.2074062888865 usec\nrounds: 795"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 847.1410416690334,
            "unit": "iter/sec",
            "range": "stddev: 0.00036422288455825914",
            "extra": "mean: 1.180440978316674 msec\nrounds: 784"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.4701946051032735,
            "unit": "iter/sec",
            "range": "stddev: 0.013569623619560425",
            "extra": "mean: 223.70390739999948 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9388449271027632,
            "unit": "iter/sec",
            "range": "stddev: 0.018599478290616936",
            "extra": "mean: 1.0651386306000064 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1253.6417811046338,
            "unit": "iter/sec",
            "range": "stddev: 0.00005609855394993857",
            "extra": "mean: 797.6760308027226 usec\nrounds: 909"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 449.0530850615929,
            "unit": "iter/sec",
            "range": "stddev: 0.00008933482190615014",
            "extra": "mean: 2.2269082058813563 msec\nrounds: 340"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.0041845555367028,
            "unit": "iter/sec",
            "range": "stddev: 0.020306397561326975",
            "extra": "mean: 995.8328819999963 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.19938965738006026,
            "unit": "iter/sec",
            "range": "stddev: 0.10464775999162347",
            "extra": "mean: 5.015305272799992 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1334.337947460458,
            "unit": "iter/sec",
            "range": "stddev: 0.0000768204879848458",
            "extra": "mean: 749.435330010079 usec\nrounds: 1003"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 903.1618913752294,
            "unit": "iter/sec",
            "range": "stddev: 0.00017388825204548496",
            "extra": "mean: 1.107221207570347 msec\nrounds: 819"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.053499435707802,
            "unit": "iter/sec",
            "range": "stddev: 0.005402844865011267",
            "extra": "mean: 165.19370500000312 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.0272705787437768,
            "unit": "iter/sec",
            "range": "stddev: 0.029235473847585434",
            "extra": "mean: 973.4533634000059 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "67229b28fa5494890233e5379249cedffeed9d04",
          "message": "fix crash when querying for aggregates with a smaller window then ingested (#70)",
          "timestamp": "2020-11-23T17:41:53+02:00",
          "tree_id": "40b370ca724c94e33cb308d08bdfd156fa4fa656",
          "url": "https://github.com/mlrun/storey/commit/67229b28fa5494890233e5379249cedffeed9d04"
        },
        "date": 1606146347103,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1151.6992672264264,
            "unit": "iter/sec",
            "range": "stddev: 0.00019184352698098167",
            "extra": "mean: 868.2822230218524 usec\nrounds: 556"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 779.9420474266708,
            "unit": "iter/sec",
            "range": "stddev: 0.00038965280177644465",
            "extra": "mean: 1.2821465431943118 msec\nrounds: 764"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 5.011956166782346,
            "unit": "iter/sec",
            "range": "stddev: 0.008516818199161953",
            "extra": "mean: 199.52289420000966 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7667228515754135,
            "unit": "iter/sec",
            "range": "stddev: 0.020854822106855186",
            "extra": "mean: 1.3042522443999984 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3553.783465435218,
            "unit": "iter/sec",
            "range": "stddev: 0.00009362056424993641",
            "extra": "mean: 281.3902449955639 usec\nrounds: 2098"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2866.5942658019585,
            "unit": "iter/sec",
            "range": "stddev: 0.00010272382496751647",
            "extra": "mean: 348.84601979772674 usec\nrounds: 2374"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 51.57462045888002,
            "unit": "iter/sec",
            "range": "stddev: 0.0010777784063910184",
            "extra": "mean: 19.389381659091242 msec\nrounds: 44"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.495296544660777,
            "unit": "iter/sec",
            "range": "stddev: 0.006540449579240924",
            "extra": "mean: 95.28077608333281 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1125.2287862117043,
            "unit": "iter/sec",
            "range": "stddev: 0.00045384231304624375",
            "extra": "mean: 888.7081562912101 usec\nrounds: 755"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 756.3773306956186,
            "unit": "iter/sec",
            "range": "stddev: 0.0003690771769248515",
            "extra": "mean: 1.3220914475058745 msec\nrounds: 762"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.435276734629451,
            "unit": "iter/sec",
            "range": "stddev: 0.009502411721808664",
            "extra": "mean: 291.09736340000154 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6954946350646177,
            "unit": "iter/sec",
            "range": "stddev: 0.024393140343368647",
            "extra": "mean: 1.4378256130000069 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1097.5802974132462,
            "unit": "iter/sec",
            "range": "stddev: 0.0003043080692558844",
            "extra": "mean: 911.0950719111655 usec\nrounds: 890"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 429.79486772111903,
            "unit": "iter/sec",
            "range": "stddev: 0.00029661961087966215",
            "extra": "mean: 2.3266913476706983 msec\nrounds: 279"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8904399361616044,
            "unit": "iter/sec",
            "range": "stddev: 0.026729872338161424",
            "extra": "mean: 1.1230403752000087 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.1658581763078057,
            "unit": "iter/sec",
            "range": "stddev: 0.12713064658488543",
            "extra": "mean: 6.029247530999998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1138.5013507839224,
            "unit": "iter/sec",
            "range": "stddev: 0.00031946767499463813",
            "extra": "mean: 878.3476623119011 usec\nrounds: 995"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 725.448342313832,
            "unit": "iter/sec",
            "range": "stddev: 0.0008567595633412406",
            "extra": "mean: 1.3784579020616134 msec\nrounds: 776"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.722760088447815,
            "unit": "iter/sec",
            "range": "stddev: 0.00495203025907963",
            "extra": "mean: 211.74058840000498 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.7432272183002383,
            "unit": "iter/sec",
            "range": "stddev: 0.01821914826749673",
            "extra": "mean: 1.3454835551999849 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e5d569ef261d3295a8e0dccb456a4f7e516a7e1",
          "message": "Parallelize downstream processing when there are 2 or more outlets. (#72)\n\n* Parallelize downstream processing when there are 2 or more outlets.\r\n\r\n* Added comments.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-24T17:22:03+02:00",
          "tree_id": "69aabc95533e30fe994f60ddec8e9b6ffd5a0da1",
          "url": "https://github.com/mlrun/storey/commit/6e5d569ef261d3295a8e0dccb456a4f7e516a7e1"
        },
        "date": 1606231577240,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1070.7154492215925,
            "unit": "iter/sec",
            "range": "stddev: 0.0007277619091940869",
            "extra": "mean: 933.9549557513133 usec\nrounds: 565"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 754.6471167130106,
            "unit": "iter/sec",
            "range": "stddev: 0.0006925369418413224",
            "extra": "mean: 1.3251226670760554 msec\nrounds: 814"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.214487415800105,
            "unit": "iter/sec",
            "range": "stddev: 0.0290720951152209",
            "extra": "mean: 237.27677920000474 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.6710957731402643,
            "unit": "iter/sec",
            "range": "stddev: 0.06811191379241036",
            "extra": "mean: 1.4901002807999988 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3355.6833754517097,
            "unit": "iter/sec",
            "range": "stddev: 0.00008829926475541962",
            "extra": "mean: 298.00189353841813 usec\nrounds: 1888"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2791.9398479953175,
            "unit": "iter/sec",
            "range": "stddev: 0.00010129964249957773",
            "extra": "mean: 358.1739057587595 usec\nrounds: 2292"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 44.037713352874746,
            "unit": "iter/sec",
            "range": "stddev: 0.002540995503457748",
            "extra": "mean: 22.707809372094044 msec\nrounds: 43"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.026700479940573,
            "unit": "iter/sec",
            "range": "stddev: 0.010688467856566033",
            "extra": "mean: 110.78245059999858 msec\nrounds: 10"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1126.194375282812,
            "unit": "iter/sec",
            "range": "stddev: 0.00032692186408103896",
            "extra": "mean: 887.9461857984135 usec\nrounds: 845"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 730.7393872601951,
            "unit": "iter/sec",
            "range": "stddev: 0.0007059996408564723",
            "extra": "mean: 1.368476939157967 msec\nrounds: 641"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.0107111577100594,
            "unit": "iter/sec",
            "range": "stddev: 0.01819799616137813",
            "extra": "mean: 332.14743880000697 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.5965253759078708,
            "unit": "iter/sec",
            "range": "stddev: 0.13790578391362543",
            "extra": "mean: 1.676374619400002 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1058.1142256531077,
            "unit": "iter/sec",
            "range": "stddev: 0.0005189542599587767",
            "extra": "mean: 945.077549999635 usec\nrounds: 360"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 363.9393631096955,
            "unit": "iter/sec",
            "range": "stddev: 0.001296326497396444",
            "extra": "mean: 2.7477104742269622 msec\nrounds: 388"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.817524368651923,
            "unit": "iter/sec",
            "range": "stddev: 0.043096291828433365",
            "extra": "mean: 1.2232051280000065 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.15044092402612047,
            "unit": "iter/sec",
            "range": "stddev: 0.08365653264272886",
            "extra": "mean: 6.647127478599998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 951.1234187498985,
            "unit": "iter/sec",
            "range": "stddev: 0.0010384003428228318",
            "extra": "mean: 1.0513882639062153 msec\nrounds: 773"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 547.8994424197502,
            "unit": "iter/sec",
            "range": "stddev: 0.002024607053494312",
            "extra": "mean: 1.8251524323214983 msec\nrounds: 495"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.650493483346285,
            "unit": "iter/sec",
            "range": "stddev: 0.02398990728458902",
            "extra": "mean: 273.93556640000725 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6375816677911965,
            "unit": "iter/sec",
            "range": "stddev: 0.04301958969021389",
            "extra": "mean: 1.5684265256000003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dinaleventol@gmail.com",
            "name": "Dina Nimrodi",
            "username": "dinal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc475e43b3189c34f45c73ca87348227ee5a120e",
          "message": "Query by key (#69)\n\n* queryByKey\r\n\r\n* revert test\r\n\r\n* flip case\r\n\r\n* code review\r\n\r\n* return avg to tets\r\n\r\n* remove type in doc string\r\n\r\n* pass use_windows_from_schema to aggr_store\r\n\r\nCo-authored-by: Dina Nimrodi <dinan@iguazio.com>",
          "timestamp": "2020-11-26T10:30:06+02:00",
          "tree_id": "1d321b09643bc069ffb6d4ee31885f86dc3c0b08",
          "url": "https://github.com/mlrun/storey/commit/fc475e43b3189c34f45c73ca87348227ee5a120e"
        },
        "date": 1606379621950,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1514.1259712850265,
            "unit": "iter/sec",
            "range": "stddev: 0.00008096414489370098",
            "extra": "mean: 660.4470294841506 usec\nrounds: 407"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 1020.6857382123358,
            "unit": "iter/sec",
            "range": "stddev: 0.0002843791488788798",
            "extra": "mean: 979.733489517973 usec\nrounds: 954"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.498986737697261,
            "unit": "iter/sec",
            "range": "stddev: 0.007379962209987989",
            "extra": "mean: 153.8701401250009 msec\nrounds: 8"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.9670990901185916,
            "unit": "iter/sec",
            "range": "stddev: 0.06576111941220429",
            "extra": "mean: 1.034020205600001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5439.818194573766,
            "unit": "iter/sec",
            "range": "stddev: 0.000013448979253060414",
            "extra": "mean: 183.82967302059888 usec\nrounds: 2413"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 4335.241019077953,
            "unit": "iter/sec",
            "range": "stddev: 0.00004747288097770117",
            "extra": "mean: 230.66768274228187 usec\nrounds: 2509"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 60.30428224347044,
            "unit": "iter/sec",
            "range": "stddev: 0.00008359030347621739",
            "extra": "mean: 16.582570305084374 msec\nrounds: 59"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 11.868368010733386,
            "unit": "iter/sec",
            "range": "stddev: 0.008475588249400364",
            "extra": "mean: 84.25758276922579 msec\nrounds: 13"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1407.5078875776182,
            "unit": "iter/sec",
            "range": "stddev: 0.00009735817826084292",
            "extra": "mean: 710.4755922334781 usec\nrounds: 824"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 943.629371365083,
            "unit": "iter/sec",
            "range": "stddev: 0.00021328892795467603",
            "extra": "mean: 1.059738103057739 msec\nrounds: 883"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.28267429544112,
            "unit": "iter/sec",
            "range": "stddev: 0.0270472697142163",
            "extra": "mean: 233.4989614000051 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9125529528151314,
            "unit": "iter/sec",
            "range": "stddev: 0.08361435901967944",
            "extra": "mean: 1.0958268196000063 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1372.2868450881429,
            "unit": "iter/sec",
            "range": "stddev: 0.0003563719032125811",
            "extra": "mean: 728.7106216745591 usec\nrounds: 1015"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 463.6993521075871,
            "unit": "iter/sec",
            "range": "stddev: 0.0015189948938945227",
            "extra": "mean: 2.15656975895015 msec\nrounds: 419"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.1394151686072331,
            "unit": "iter/sec",
            "range": "stddev: 0.02565158608749227",
            "extra": "mean: 877.6432221999926 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.20056158180732,
            "unit": "iter/sec",
            "range": "stddev: 0.09928534434170036",
            "extra": "mean: 4.985999766200001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1340.0261714514752,
            "unit": "iter/sec",
            "range": "stddev: 0.00038134944379320006",
            "extra": "mean: 746.2540816772487 usec\nrounds: 906"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 853.6757474118087,
            "unit": "iter/sec",
            "range": "stddev: 0.0006207338862485244",
            "extra": "mean: 1.1714049544359437 msec\nrounds: 834"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.26554766282768,
            "unit": "iter/sec",
            "range": "stddev: 0.012150123935202668",
            "extra": "mean: 159.60296750000205 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.0402241081453825,
            "unit": "iter/sec",
            "range": "stddev: 0.059245766804582906",
            "extra": "mean: 961.3313056000038 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87283b13e500a9ff8bcc01e741664e55bf3905fa",
          "message": "Context object + minor refactoring (#75)\n\n* create Context, and use it in related steps + minor refactoring\r\n\r\n* refarctoring + change comments+typing",
          "timestamp": "2020-11-26T12:11:00+02:00",
          "tree_id": "aa0903d939f5d4741e37650d998f171d4e3c09fe",
          "url": "https://github.com/mlrun/storey/commit/87283b13e500a9ff8bcc01e741664e55bf3905fa"
        },
        "date": 1606385689502,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1337.3097179650226,
            "unit": "iter/sec",
            "range": "stddev: 0.0002824986401669944",
            "extra": "mean: 747.7699343437772 usec\nrounds: 396"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 938.7204565001085,
            "unit": "iter/sec",
            "range": "stddev: 0.00027207654245966855",
            "extra": "mean: 1.0652798637502414 msec\nrounds: 800"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 7.013512035909663,
            "unit": "iter/sec",
            "range": "stddev: 0.0015432761998533898",
            "extra": "mean: 142.5819182857221 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.1540687402381626,
            "unit": "iter/sec",
            "range": "stddev: 0.0097894443062324",
            "extra": "mean: 866.4995117999922 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5449.232007850304,
            "unit": "iter/sec",
            "range": "stddev: 0.000025906828884001416",
            "extra": "mean: 183.5120983212633 usec\nrounds: 2085"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 4251.400963983667,
            "unit": "iter/sec",
            "range": "stddev: 0.000053311041551157654",
            "extra": "mean: 235.21658118621104 usec\nrounds: 2445"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 61.411193790270495,
            "unit": "iter/sec",
            "range": "stddev: 0.0008152726392154381",
            "extra": "mean: 16.283676285713764 msec\nrounds: 56"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 11.83719679428641,
            "unit": "iter/sec",
            "range": "stddev: 0.011667996289524998",
            "extra": "mean: 84.47946058332671 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1335.9104982688018,
            "unit": "iter/sec",
            "range": "stddev: 0.0000731876418667388",
            "extra": "mean: 748.5531413188935 usec\nrounds: 743"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 876.279560182547,
            "unit": "iter/sec",
            "range": "stddev: 0.00009052941834387654",
            "extra": "mean: 1.14118832098706 msec\nrounds: 891"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.897441002431981,
            "unit": "iter/sec",
            "range": "stddev: 0.006100448592081939",
            "extra": "mean: 204.18826883333927 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 1.0078862070380041,
            "unit": "iter/sec",
            "range": "stddev: 0.01996469717434086",
            "extra": "mean: 992.1754986000053 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1337.9597510447772,
            "unit": "iter/sec",
            "range": "stddev: 0.0000771621250503199",
            "extra": "mean: 747.4066385174341 usec\nrounds: 971"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 472.6495009374822,
            "unit": "iter/sec",
            "range": "stddev: 0.001236121454684828",
            "extra": "mean: 2.1157326899034876 msec\nrounds: 416"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.03368717088146,
            "unit": "iter/sec",
            "range": "stddev: 0.011094699504261745",
            "extra": "mean: 967.4106714000004 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.19031748012564328,
            "unit": "iter/sec",
            "range": "stddev: 0.07255356700367534",
            "extra": "mean: 5.254378101999999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1315.3363965701992,
            "unit": "iter/sec",
            "range": "stddev: 0.00007400776908358894",
            "extra": "mean: 760.2617874845907 usec\nrounds: 767"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 895.3750479316149,
            "unit": "iter/sec",
            "range": "stddev: 0.00010052774379429735",
            "extra": "mean: 1.116850421854034 msec\nrounds: 787"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.146674068644669,
            "unit": "iter/sec",
            "range": "stddev: 0.0027927428446832157",
            "extra": "mean: 162.68960885711945 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.087135933672959,
            "unit": "iter/sec",
            "range": "stddev: 0.02282254200921071",
            "extra": "mean: 919.8481707999804 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4be86060df9ad7d62d0da60940a05ce5ef1a36b4",
          "message": "Update dependencies, fix all warnings. (#76)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-26T12:14:35+02:00",
          "tree_id": "28c7b497d82b295552be3e39143c1c025a0af8c9",
          "url": "https://github.com/mlrun/storey/commit/4be86060df9ad7d62d0da60940a05ce5ef1a36b4"
        },
        "date": 1606385911496,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1559.4777998063214,
            "unit": "iter/sec",
            "range": "stddev: 0.00007201591758470094",
            "extra": "mean: 641.2402921825462 usec\nrounds: 486"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 1090.3955751949281,
            "unit": "iter/sec",
            "range": "stddev: 0.0001015604413671932",
            "extra": "mean: 917.0983657203778 usec\nrounds: 916"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 7.725780930772988,
            "unit": "iter/sec",
            "range": "stddev: 0.003602276994493406",
            "extra": "mean: 129.4367532499976 msec\nrounds: 8"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.1854857648022867,
            "unit": "iter/sec",
            "range": "stddev: 0.012670932923149029",
            "extra": "mean: 843.536067399998 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5952.950610397986,
            "unit": "iter/sec",
            "range": "stddev: 0.000024832478137244392",
            "extra": "mean: 167.98392351068821 usec\nrounds: 2484"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 4693.212156658081,
            "unit": "iter/sec",
            "range": "stddev: 0.00004556163566650013",
            "extra": "mean: 213.07368314499445 usec\nrounds: 3358"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 64.04122807953446,
            "unit": "iter/sec",
            "range": "stddev: 0.0031646399201897884",
            "extra": "mean: 15.61494103076965 msec\nrounds: 65"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 13.214735873926491,
            "unit": "iter/sec",
            "range": "stddev: 0.004509447863443561",
            "extra": "mean: 75.67309778571233 msec\nrounds: 14"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1514.4922309766205,
            "unit": "iter/sec",
            "range": "stddev: 0.0001430901410518631",
            "extra": "mean: 660.2873092027352 usec\nrounds: 815"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 999.1676265297008,
            "unit": "iter/sec",
            "range": "stddev: 0.00010624387577621907",
            "extra": "mean: 1.00083306689308 msec\nrounds: 882"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 5.594518293303293,
            "unit": "iter/sec",
            "range": "stddev: 0.005698592901386681",
            "extra": "mean: 178.74639916666504 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 1.136103390967301,
            "unit": "iter/sec",
            "range": "stddev: 0.021491313676594046",
            "extra": "mean: 880.2015802000028 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1483.663118369346,
            "unit": "iter/sec",
            "range": "stddev: 0.00032698381576005286",
            "extra": "mean: 674.0074533220675 usec\nrounds: 1189"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 512.0171558723223,
            "unit": "iter/sec",
            "range": "stddev: 0.0011827167784392999",
            "extra": "mean: 1.9530595577335736 msec\nrounds: 459"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.1854740395810557,
            "unit": "iter/sec",
            "range": "stddev: 0.020624284002257902",
            "extra": "mean: 843.5444105999977 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.2208545633378592,
            "unit": "iter/sec",
            "range": "stddev: 0.04719735199555892",
            "extra": "mean: 4.527866596399997 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1531.5240169719668,
            "unit": "iter/sec",
            "range": "stddev: 0.00007690053808168862",
            "extra": "mean: 652.9443801848679 usec\nrounds: 868"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 1054.6732982349736,
            "unit": "iter/sec",
            "range": "stddev: 0.00010526095044734705",
            "extra": "mean: 948.1609154925312 usec\nrounds: 923"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 7.213400274333752,
            "unit": "iter/sec",
            "range": "stddev: 0.0018144134331684286",
            "extra": "mean: 138.6308761428552 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.1076425022779477,
            "unit": "iter/sec",
            "range": "stddev: 0.011764098179366795",
            "extra": "mean: 902.8183714000022 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "19ad46b4118dfddc0d20b765940223a840f81df2",
          "message": "Force flush to CSV. (#77)\n\n* Force flush to CSV.\r\n\r\n* Fix.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-26T15:41:15+02:00",
          "tree_id": "974f09b064e916859e3fa4c4e57bf7ff31de712f",
          "url": "https://github.com/mlrun/storey/commit/19ad46b4118dfddc0d20b765940223a840f81df2"
        },
        "date": 1606398332365,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1159.3376940718097,
            "unit": "iter/sec",
            "range": "stddev: 0.000159284132923325",
            "extra": "mean: 862.5614478968712 usec\nrounds: 547"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 807.286446312173,
            "unit": "iter/sec",
            "range": "stddev: 0.00032749402109789086",
            "extra": "mean: 1.2387176875917791 msec\nrounds: 685"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.94822336588375,
            "unit": "iter/sec",
            "range": "stddev: 0.007335103382958189",
            "extra": "mean: 202.0927363333366 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7879171662065444,
            "unit": "iter/sec",
            "range": "stddev: 0.03249668325379502",
            "extra": "mean: 1.2691689467999994 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3774.188301245546,
            "unit": "iter/sec",
            "range": "stddev: 0.00003946471346275818",
            "extra": "mean: 264.95763331945653 usec\nrounds: 2389"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3059.172820673998,
            "unit": "iter/sec",
            "range": "stddev: 0.00006911933611610732",
            "extra": "mean: 326.8857493901504 usec\nrounds: 2458"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 49.613651151847215,
            "unit": "iter/sec",
            "range": "stddev: 0.0011167591347105692",
            "extra": "mean: 20.15574296153707 msec\nrounds: 52"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.591101602570369,
            "unit": "iter/sec",
            "range": "stddev: 0.0015971760877581636",
            "extra": "mean: 94.41888460000314 msec\nrounds: 10"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1163.5016343579327,
            "unit": "iter/sec",
            "range": "stddev: 0.0002530386382340824",
            "extra": "mean: 859.4745125148368 usec\nrounds: 839"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 742.5109597818283,
            "unit": "iter/sec",
            "range": "stddev: 0.0007863717689556397",
            "extra": "mean: 1.3467814674329244 msec\nrounds: 783"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.5025484199052603,
            "unit": "iter/sec",
            "range": "stddev: 0.009878092755752937",
            "extra": "mean: 285.5064028000072 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.7065328830355296,
            "unit": "iter/sec",
            "range": "stddev: 0.013969652880956486",
            "extra": "mean: 1.4153622909999968 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1150.5967944544382,
            "unit": "iter/sec",
            "range": "stddev: 0.00011817722827871347",
            "extra": "mean: 869.1141891057985 usec\nrounds: 973"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 417.74399092941894,
            "unit": "iter/sec",
            "range": "stddev: 0.0012363929343231928",
            "extra": "mean: 2.393810615384669 msec\nrounds: 364"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8918397427488419,
            "unit": "iter/sec",
            "range": "stddev: 0.014392267349456075",
            "extra": "mean: 1.1212776825999982 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.1701166677149477,
            "unit": "iter/sec",
            "range": "stddev: 0.05043067488319318",
            "extra": "mean: 5.878318764599999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1161.8175467920726,
            "unit": "iter/sec",
            "range": "stddev: 0.00014300550710280596",
            "extra": "mean: 860.720345256558 usec\nrounds: 643"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 731.880323622423,
            "unit": "iter/sec",
            "range": "stddev: 0.00017832554182910538",
            "extra": "mean: 1.3663436052639393 msec\nrounds: 760"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.674044342159531,
            "unit": "iter/sec",
            "range": "stddev: 0.002853594752699168",
            "extra": "mean: 213.94747819999793 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.7218953114571782,
            "unit": "iter/sec",
            "range": "stddev: 0.015187175903101431",
            "extra": "mean: 1.3852424086000155 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bb9ddf4a5b85e87fb0dfc15983ec3b9ccb341aef",
          "message": "Fix CSV performance. (#78)\n\n* Fix CSV performance.\r\n\r\n* run_in_executor instead of creating a new thread.\r\n\r\n* Better configurability of WriteToCSV.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-11-29T13:24:46+02:00",
          "tree_id": "5e4aecd8ef9e92f5ba3a09287cf8178fbca56ece",
          "url": "https://github.com/mlrun/storey/commit/bb9ddf4a5b85e87fb0dfc15983ec3b9ccb341aef"
        },
        "date": 1606649302173,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1247.8169820036408,
            "unit": "iter/sec",
            "range": "stddev: 0.000401992697118041",
            "extra": "mean: 801.3995757569215 usec\nrounds: 660"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 919.537895021091,
            "unit": "iter/sec",
            "range": "stddev: 0.0001333270757527988",
            "extra": "mean: 1.0875027613484745 msec\nrounds: 771"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.029616961691588,
            "unit": "iter/sec",
            "range": "stddev: 0.0037862800587751292",
            "extra": "mean: 165.84801428571237 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.979266858082538,
            "unit": "iter/sec",
            "range": "stddev: 0.024010339148946232",
            "extra": "mean: 1.021172106199998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4876.116760795413,
            "unit": "iter/sec",
            "range": "stddev: 0.00001288544312541266",
            "extra": "mean: 205.08122529799218 usec\nrounds: 2348"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3884.8232390397716,
            "unit": "iter/sec",
            "range": "stddev: 0.00004947029939588781",
            "extra": "mean: 257.41196921154494 usec\nrounds: 2436"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 53.2232710365445,
            "unit": "iter/sec",
            "range": "stddev: 0.00019111310066775728",
            "extra": "mean: 18.78877379245206 msec\nrounds: 53"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.331551306350626,
            "unit": "iter/sec",
            "range": "stddev: 0.009661204099476108",
            "extra": "mean: 96.79088554545697 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1291.4883376175508,
            "unit": "iter/sec",
            "range": "stddev: 0.00014219508286580083",
            "extra": "mean: 774.3004492357488 usec\nrounds: 719"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 843.7211529619395,
            "unit": "iter/sec",
            "range": "stddev: 0.00008277505850072792",
            "extra": "mean: 1.1852257069642418 msec\nrounds: 761"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.341652166966659,
            "unit": "iter/sec",
            "range": "stddev: 0.008820689679065255",
            "extra": "mean: 230.3270648000023 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.8708203052541637,
            "unit": "iter/sec",
            "range": "stddev: 0.046622516329376355",
            "extra": "mean: 1.148342538600008 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1178.1866738482156,
            "unit": "iter/sec",
            "range": "stddev: 0.0005461601758829703",
            "extra": "mean: 848.7619340777138 usec\nrounds: 986"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 450.9507630484941,
            "unit": "iter/sec",
            "range": "stddev: 0.000058829532176054406",
            "extra": "mean: 2.217536995036557 msec\nrounds: 403"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.9018436510425014,
            "unit": "iter/sec",
            "range": "stddev: 0.035060843404516005",
            "extra": "mean: 1.108839651799991 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.17273487103180638,
            "unit": "iter/sec",
            "range": "stddev: 0.09772582977702096",
            "extra": "mean: 5.789219015399999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1270.429652453173,
            "unit": "iter/sec",
            "range": "stddev: 0.00034856213671376044",
            "extra": "mean: 787.1352798393999 usec\nrounds: 997"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 888.3437756893413,
            "unit": "iter/sec",
            "range": "stddev: 0.00015785794422210368",
            "extra": "mean: 1.1256903322410463 msec\nrounds: 611"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.807742361161451,
            "unit": "iter/sec",
            "range": "stddev: 0.006670744546329529",
            "extra": "mean: 172.1839464999988 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9348946853907532,
            "unit": "iter/sec",
            "range": "stddev: 0.04229529921425289",
            "extra": "mean: 1.0696391964000043 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f331f04d92178f5fd499303ce32fe9e0cba3837",
          "message": "Makedirs before write. (#79)\n\n* Makedirs before write.\r\n\r\n* Test makedirs in CSV writer also.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-01T13:48:22+02:00",
          "tree_id": "b2f3caaf8117bcf0b1dffc9b5cd30b3615f21a69",
          "url": "https://github.com/mlrun/storey/commit/1f331f04d92178f5fd499303ce32fe9e0cba3837"
        },
        "date": 1606823508132,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1367.610203739988,
            "unit": "iter/sec",
            "range": "stddev: 0.00014215553127457835",
            "extra": "mean: 731.2024999998622 usec\nrounds: 358"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 948.8641671479351,
            "unit": "iter/sec",
            "range": "stddev: 0.0002782830326358246",
            "extra": "mean: 1.0538916260330153 msec\nrounds: 968"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.677534965340164,
            "unit": "iter/sec",
            "range": "stddev: 0.005904732988466708",
            "extra": "mean: 149.755861285716 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0265371841799475,
            "unit": "iter/sec",
            "range": "stddev: 0.017939148166331607",
            "extra": "mean: 974.1488329999981 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5257.296163238501,
            "unit": "iter/sec",
            "range": "stddev: 0.00002681767206443595",
            "extra": "mean: 190.21184444438805 usec\nrounds: 2385"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 4200.648912739057,
            "unit": "iter/sec",
            "range": "stddev: 0.00005098917591538406",
            "extra": "mean: 238.05845734152163 usec\nrounds: 2731"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 54.46924692942549,
            "unit": "iter/sec",
            "range": "stddev: 0.0008536866358139047",
            "extra": "mean: 18.358983396551753 msec\nrounds: 58"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.77994329780356,
            "unit": "iter/sec",
            "range": "stddev: 0.007287738820403848",
            "extra": "mean: 92.76486641666774 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1351.2541090618079,
            "unit": "iter/sec",
            "range": "stddev: 0.00011317777149040478",
            "extra": "mean: 740.0532537098534 usec\nrounds: 741"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 886.0194705967248,
            "unit": "iter/sec",
            "range": "stddev: 0.0001131716030280532",
            "extra": "mean: 1.12864336866831 msec\nrounds: 849"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.823328248561433,
            "unit": "iter/sec",
            "range": "stddev: 0.008147899548662551",
            "extra": "mean: 207.3257195999986 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9811042702362217,
            "unit": "iter/sec",
            "range": "stddev: 0.027616601205402384",
            "extra": "mean: 1.019259655000002 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1322.304247806602,
            "unit": "iter/sec",
            "range": "stddev: 0.00007265058134304168",
            "extra": "mean: 756.2556058174733 usec\nrounds: 997"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 465.6985166336556,
            "unit": "iter/sec",
            "range": "stddev: 0.0012928180551547263",
            "extra": "mean: 2.147311971763603 msec\nrounds: 425"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.0370286003254252,
            "unit": "iter/sec",
            "range": "stddev: 0.022535606592481452",
            "extra": "mean: 964.2935592000015 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.19059947400618446,
            "unit": "iter/sec",
            "range": "stddev: 0.12331483434255644",
            "extra": "mean: 5.246604195599997 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1340.2967979755804,
            "unit": "iter/sec",
            "range": "stddev: 0.0003514726056102291",
            "extra": "mean: 746.1034015081036 usec\nrounds: 1061"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 930.6634835892298,
            "unit": "iter/sec",
            "range": "stddev: 0.00011053074869302834",
            "extra": "mean: 1.0745022423608632 msec\nrounds: 949"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.894782540941612,
            "unit": "iter/sec",
            "range": "stddev: 0.010993996290898788",
            "extra": "mean: 169.64154199999777 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9827601276032105,
            "unit": "iter/sec",
            "range": "stddev: 0.022168485218363797",
            "extra": "mean: 1.0175422993999916 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dinaleventol@gmail.com",
            "name": "Dina Nimrodi",
            "username": "dinal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e0b2788e219a04484c11eac4e998546b2a044fa0",
          "message": "query fixes (#81)\n\n* query fixes\r\n\r\n* add event to QueryByKey\r\n\r\n* use window tuples\r\n\r\n* add types to signuture\r\n\r\nCo-authored-by: Dina Nimrodi <dinan@iguazio.com>",
          "timestamp": "2020-12-01T14:47:29+02:00",
          "tree_id": "4e9a94f45b78918afcb03518270c135014acbc06",
          "url": "https://github.com/mlrun/storey/commit/e0b2788e219a04484c11eac4e998546b2a044fa0"
        },
        "date": 1606827056619,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1331.6265981650604,
            "unit": "iter/sec",
            "range": "stddev: 0.00005576244220422377",
            "extra": "mean: 750.9612690058674 usec\nrounds: 513"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 937.4267358642621,
            "unit": "iter/sec",
            "range": "stddev: 0.00006445284035329198",
            "extra": "mean: 1.0667500314870455 msec\nrounds: 921"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.461010463787175,
            "unit": "iter/sec",
            "range": "stddev: 0.00402457322670349",
            "extra": "mean: 154.77455200000432 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0374387297167182,
            "unit": "iter/sec",
            "range": "stddev: 0.02662149513676625",
            "extra": "mean: 963.91234620001 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4903.89706566727,
            "unit": "iter/sec",
            "range": "stddev: 0.000034712026850500985",
            "extra": "mean: 203.91945153194823 usec\nrounds: 2383"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3914.0585234756104,
            "unit": "iter/sec",
            "range": "stddev: 0.00004902392970484646",
            "extra": "mean: 255.48928152255084 usec\nrounds: 2522"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 53.84703102913766,
            "unit": "iter/sec",
            "range": "stddev: 0.0003932224938413081",
            "extra": "mean: 18.57112603773606 msec\nrounds: 53"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.80859532141887,
            "unit": "iter/sec",
            "range": "stddev: 0.007206271821916308",
            "extra": "mean: 92.51896016666923 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1310.1014881803974,
            "unit": "iter/sec",
            "range": "stddev: 0.000053112249519935864",
            "extra": "mean: 763.2996443572489 usec\nrounds: 762"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 834.4524142632231,
            "unit": "iter/sec",
            "range": "stddev: 0.00019759675403634237",
            "extra": "mean: 1.19839068460596 msec\nrounds: 799"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.591671345503309,
            "unit": "iter/sec",
            "range": "stddev: 0.0011640904530923195",
            "extra": "mean: 217.7856219999967 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9392374871504499,
            "unit": "iter/sec",
            "range": "stddev: 0.014847268983700972",
            "extra": "mean: 1.0646934493999993 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1241.2686365237455,
            "unit": "iter/sec",
            "range": "stddev: 0.00005757353823662237",
            "extra": "mean: 805.62738038767 usec\nrounds: 928"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 441.7149508448553,
            "unit": "iter/sec",
            "range": "stddev: 0.0014231086724878705",
            "extra": "mean: 2.2639034474321713 msec\nrounds: 409"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.9404183411681243,
            "unit": "iter/sec",
            "range": "stddev: 0.004368186896428311",
            "extra": "mean: 1.063356546999995 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.17870237909641018,
            "unit": "iter/sec",
            "range": "stddev: 0.039040849962595554",
            "extra": "mean: 5.595896400800006 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1321.8902840721685,
            "unit": "iter/sec",
            "range": "stddev: 0.00005101650927515506",
            "extra": "mean: 756.4924351508473 usec\nrounds: 1064"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 891.002931178205,
            "unit": "iter/sec",
            "range": "stddev: 0.00006308802579569192",
            "extra": "mean: 1.1223307634663606 msec\nrounds: 854"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.025484943509591,
            "unit": "iter/sec",
            "range": "stddev: 0.0018189126715600491",
            "extra": "mean: 165.96174571428637 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.0081238722675236,
            "unit": "iter/sec",
            "range": "stddev: 0.015642638966623625",
            "extra": "mean: 991.9415931999993 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc9c2aaad90eda7b42cc8af231ae2b75b629a4f2",
          "message": "remove braces (#84)",
          "timestamp": "2020-12-02T11:12:23+02:00",
          "tree_id": "01eed3c224e8e48a72be9a20d75252984afa4ac1",
          "url": "https://github.com/mlrun/storey/commit/fc9c2aaad90eda7b42cc8af231ae2b75b629a4f2"
        },
        "date": 1606900572224,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1169.2233220397657,
            "unit": "iter/sec",
            "range": "stddev: 0.00015278402601219188",
            "extra": "mean: 855.2686053639885 usec\nrounds: 522"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 743.0455044457257,
            "unit": "iter/sec",
            "range": "stddev: 0.0009104276954533157",
            "extra": "mean: 1.3458125969632901 msec\nrounds: 856"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 5.356621528735493,
            "unit": "iter/sec",
            "range": "stddev: 0.014977916448519165",
            "extra": "mean: 186.68483383332557 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.9442724765312068,
            "unit": "iter/sec",
            "range": "stddev: 0.08964490524669311",
            "extra": "mean: 1.0590163590000088 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4298.185975100798,
            "unit": "iter/sec",
            "range": "stddev: 0.00012061722005392445",
            "extra": "mean: 232.6562893725297 usec\nrounds: 2343"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3301.1082346240264,
            "unit": "iter/sec",
            "range": "stddev: 0.00013199579331530943",
            "extra": "mean: 302.9285709300268 usec\nrounds: 2291"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 50.075740086526004,
            "unit": "iter/sec",
            "range": "stddev: 0.0018160640463995526",
            "extra": "mean: 19.969749788462384 msec\nrounds: 52"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.420795877428805,
            "unit": "iter/sec",
            "range": "stddev: 0.009064373833261856",
            "extra": "mean: 95.96196027272507 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1142.1379059853143,
            "unit": "iter/sec",
            "range": "stddev: 0.00023566964297159565",
            "extra": "mean: 875.5510124999372 usec\nrounds: 720"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 715.1911022211154,
            "unit": "iter/sec",
            "range": "stddev: 0.00025749139981693053",
            "extra": "mean: 1.3982276861308465 msec\nrounds: 685"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.6193059972354225,
            "unit": "iter/sec",
            "range": "stddev: 0.01458394407754345",
            "extra": "mean: 276.29606359999457 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.771718462582961,
            "unit": "iter/sec",
            "range": "stddev: 0.09665330726441389",
            "extra": "mean: 1.295809350799999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1122.518676990508,
            "unit": "iter/sec",
            "range": "stddev: 0.00021005681741997125",
            "extra": "mean: 890.8537741937776 usec\nrounds: 310"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 401.5308503191571,
            "unit": "iter/sec",
            "range": "stddev: 0.000522739864841494",
            "extra": "mean: 2.49046866313049 msec\nrounds: 377"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8926053347479757,
            "unit": "iter/sec",
            "range": "stddev: 0.046676553195532045",
            "extra": "mean: 1.1203159571999948 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.161683931132126,
            "unit": "iter/sec",
            "range": "stddev: 0.12279235285710595",
            "extra": "mean: 6.184906520999993 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1071.227384396037,
            "unit": "iter/sec",
            "range": "stddev: 0.00039273633651455735",
            "extra": "mean: 933.5086225076337 usec\nrounds: 702"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 727.4370653626369,
            "unit": "iter/sec",
            "range": "stddev: 0.0005915321973735943",
            "extra": "mean: 1.3746893684905743 msec\nrounds: 768"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.586115138061112,
            "unit": "iter/sec",
            "range": "stddev: 0.010149346230496837",
            "extra": "mean: 179.01528616667406 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9005963826517024,
            "unit": "iter/sec",
            "range": "stddev: 0.07109009718931335",
            "extra": "mean: 1.110375323800008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9aa235fd92f05264b3cc9e2b15c97ef914fd3937",
          "message": "Writer inference fixes. (#82)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-02T11:59:17+02:00",
          "tree_id": "bc7fdfc74b00014ae9cd74e5bc7514bfe7c99511",
          "url": "https://github.com/mlrun/storey/commit/9aa235fd92f05264b3cc9e2b15c97ef914fd3937"
        },
        "date": 1606903381169,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1254.7405238554325,
            "unit": "iter/sec",
            "range": "stddev: 0.00006996087441446218",
            "extra": "mean: 796.9775272159911 usec\nrounds: 643"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 881.9650085288442,
            "unit": "iter/sec",
            "range": "stddev: 0.00013139327356828765",
            "extra": "mean: 1.1338318304351362 msec\nrounds: 690"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.175590878947332,
            "unit": "iter/sec",
            "range": "stddev: 0.0022025938454720323",
            "extra": "mean: 161.927825142856 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.9914557470017145,
            "unit": "iter/sec",
            "range": "stddev: 0.024551188077803435",
            "extra": "mean: 1.0086178863999975 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4552.826519252984,
            "unit": "iter/sec",
            "range": "stddev: 0.000013705211195502635",
            "extra": "mean: 219.64377420734172 usec\nrounds: 2334"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3654.1599181740253,
            "unit": "iter/sec",
            "range": "stddev: 0.000035855851145386744",
            "extra": "mean: 273.66071064007986 usec\nrounds: 2312"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 49.72365684064655,
            "unit": "iter/sec",
            "range": "stddev: 0.00006962646056515824",
            "extra": "mean: 20.111151583335502 msec\nrounds: 48"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.792279072461895,
            "unit": "iter/sec",
            "range": "stddev: 0.007912457840021704",
            "extra": "mean: 102.12127254545128 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1262.2288354236853,
            "unit": "iter/sec",
            "range": "stddev: 0.00007181108703464058",
            "extra": "mean: 792.249370269168 usec\nrounds: 740"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 820.7676877797867,
            "unit": "iter/sec",
            "range": "stddev: 0.00011917066151774499",
            "extra": "mean: 1.2183715500607055 msec\nrounds: 829"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.414697627130864,
            "unit": "iter/sec",
            "range": "stddev: 0.007138693874771498",
            "extra": "mean: 226.5160797999897 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9098826567193111,
            "unit": "iter/sec",
            "range": "stddev: 0.019866699095854562",
            "extra": "mean: 1.0990428189999988 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1203.8433079124459,
            "unit": "iter/sec",
            "range": "stddev: 0.00010802539315344075",
            "extra": "mean: 830.6728902568512 usec\nrounds: 975"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 438.7689437180004,
            "unit": "iter/sec",
            "range": "stddev: 0.000058408462022231583",
            "extra": "mean: 2.2791038753251103 msec\nrounds: 385"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.909526070020061,
            "unit": "iter/sec",
            "range": "stddev: 0.01008387293774405",
            "extra": "mean: 1.0994737071999965 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.16834680067161498,
            "unit": "iter/sec",
            "range": "stddev: 0.05996777596096727",
            "extra": "mean: 5.940118826200006 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1217.0015056618195,
            "unit": "iter/sec",
            "range": "stddev: 0.00017078160235120508",
            "extra": "mean: 821.6916703452955 usec\nrounds: 725"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 823.8836296279801,
            "unit": "iter/sec",
            "range": "stddev: 0.0006717506382744326",
            "extra": "mean: 1.2137636482127265 msec\nrounds: 867"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.704522874315006,
            "unit": "iter/sec",
            "range": "stddev: 0.003154214585725054",
            "extra": "mean: 175.29949866667494 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9527354289393807,
            "unit": "iter/sec",
            "range": "stddev: 0.03256342980964113",
            "extra": "mean: 1.0496093349999966 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0c56a76f3b40df0f05fb63e8cd00a7c16a13268f",
          "message": "validate range when aggregating and getting features (#86)\n\n* validate range when aggregating and getting features\r\n\r\n* add tests",
          "timestamp": "2020-12-03T13:40:15+02:00",
          "tree_id": "f14540f71d228987a4d8f0e9289da8f0b99941f1",
          "url": "https://github.com/mlrun/storey/commit/0c56a76f3b40df0f05fb63e8cd00a7c16a13268f"
        },
        "date": 1606995866372,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 984.67225110627,
            "unit": "iter/sec",
            "range": "stddev: 0.0006477991141902461",
            "extra": "mean: 1.0155663459354212 msec\nrounds: 529"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 690.1055431804201,
            "unit": "iter/sec",
            "range": "stddev: 0.0006476676173034517",
            "extra": "mean: 1.449053713423892 msec\nrounds: 663"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.326673765244137,
            "unit": "iter/sec",
            "range": "stddev: 0.006938083929248112",
            "extra": "mean: 231.12442820000183 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.6805849474464465,
            "unit": "iter/sec",
            "range": "stddev: 0.013344155871232947",
            "extra": "mean: 1.4693242978 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3315.710593852401,
            "unit": "iter/sec",
            "range": "stddev: 0.00012033305410827095",
            "extra": "mean: 301.59447626523314 usec\nrounds: 1917"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2689.4892767038837,
            "unit": "iter/sec",
            "range": "stddev: 0.00018279027872699063",
            "extra": "mean: 371.81780521004896 usec\nrounds: 2572"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 47.10252943751305,
            "unit": "iter/sec",
            "range": "stddev: 0.0009998290112494574",
            "extra": "mean: 21.230282363638572 msec\nrounds: 44"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 8.90386613267608,
            "unit": "iter/sec",
            "range": "stddev: 0.01157987652350575",
            "extra": "mean: 112.31076311110793 msec\nrounds: 9"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1057.1328205637515,
            "unit": "iter/sec",
            "range": "stddev: 0.0002689646738019547",
            "extra": "mean: 945.9549269000242 usec\nrounds: 684"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 644.045476235228,
            "unit": "iter/sec",
            "range": "stddev: 0.001039926694394548",
            "extra": "mean: 1.5526853877547695 msec\nrounds: 637"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.891519044812384,
            "unit": "iter/sec",
            "range": "stddev: 0.012556210132018217",
            "extra": "mean: 345.83898099999715 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.5978487090967901,
            "unit": "iter/sec",
            "range": "stddev: 0.03364256504197357",
            "extra": "mean: 1.672663977999997 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 976.6097368629323,
            "unit": "iter/sec",
            "range": "stddev: 0.0005902014856029686",
            "extra": "mean: 1.0239504709549607 msec\nrounds: 964"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 375.5021133796409,
            "unit": "iter/sec",
            "range": "stddev: 0.0008894228928071075",
            "extra": "mean: 2.663100857142122 msec\nrounds: 406"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8138768511158121,
            "unit": "iter/sec",
            "range": "stddev: 0.04987224204672617",
            "extra": "mean: 1.2286871148000045 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.15057152209041155,
            "unit": "iter/sec",
            "range": "stddev: 0.021193397911007855",
            "extra": "mean: 6.641362098999997 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1057.0500493297097,
            "unit": "iter/sec",
            "range": "stddev: 0.0005456599551198939",
            "extra": "mean: 946.0289989429679 usec\nrounds: 947"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 650.5423162837385,
            "unit": "iter/sec",
            "range": "stddev: 0.000841717413911219",
            "extra": "mean: 1.537179019671709 msec\nrounds: 610"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.199403311150835,
            "unit": "iter/sec",
            "range": "stddev: 0.013571884910580439",
            "extra": "mean: 238.12906880000355 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6403231494762299,
            "unit": "iter/sec",
            "range": "stddev: 0.05550739078864653",
            "extra": "mean: 1.5617114590000027 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2675bafa720ccbbad27c1b4d23f39245c97789a0",
          "message": "Fixes in CSV reader and writer. (#85)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-06T10:49:56+02:00",
          "tree_id": "99000cf7988d0e6c76623c40e80d93587ecb7ada",
          "url": "https://github.com/mlrun/storey/commit/2675bafa720ccbbad27c1b4d23f39245c97789a0"
        },
        "date": 1607244840071,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 965.6987906168948,
            "unit": "iter/sec",
            "range": "stddev: 0.0010339453953447718",
            "extra": "mean: 1.0355195737184193 msec\nrounds: 624"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 631.9025520120633,
            "unit": "iter/sec",
            "range": "stddev: 0.0012111627100367859",
            "extra": "mean: 1.5825224899248542 msec\nrounds: 794"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.324550154671026,
            "unit": "iter/sec",
            "range": "stddev: 0.03194725024359458",
            "extra": "mean: 231.23792399999843 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.708600856410292,
            "unit": "iter/sec",
            "range": "stddev: 0.12111471802103188",
            "extra": "mean: 1.4112317123999958 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3932.9585416657224,
            "unit": "iter/sec",
            "range": "stddev: 0.00014962010230241114",
            "extra": "mean: 254.26151570274905 usec\nrounds: 1815"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2924.2177586897637,
            "unit": "iter/sec",
            "range": "stddev: 0.00037619799810178855",
            "extra": "mean: 341.9717963986594 usec\nrounds: 722"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 42.90662030561823,
            "unit": "iter/sec",
            "range": "stddev: 0.002908877578444619",
            "extra": "mean: 23.306426674418333 msec\nrounds: 43"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.250823981067457,
            "unit": "iter/sec",
            "range": "stddev: 0.009923772910387686",
            "extra": "mean: 108.09847880000518 msec\nrounds: 10"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 990.4569421560748,
            "unit": "iter/sec",
            "range": "stddev: 0.0007965109144383063",
            "extra": "mean: 1.0096350052564136 msec\nrounds: 761"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 692.0299670313794,
            "unit": "iter/sec",
            "range": "stddev: 0.0009247872546552453",
            "extra": "mean: 1.4450241284921927 msec\nrounds: 716"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.3457299004942884,
            "unit": "iter/sec",
            "range": "stddev: 0.05101962863050927",
            "extra": "mean: 426.3065410000024 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.5769543101893239,
            "unit": "iter/sec",
            "range": "stddev: 0.12454497574976542",
            "extra": "mean: 1.733239499800004 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1044.3249912978781,
            "unit": "iter/sec",
            "range": "stddev: 0.0005503407367709927",
            "extra": "mean: 957.5563242599495 usec\nrounds: 845"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 352.39390720114886,
            "unit": "iter/sec",
            "range": "stddev: 0.0014700611025193328",
            "extra": "mean: 2.837733512314085 msec\nrounds: 406"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.7760743480467103,
            "unit": "iter/sec",
            "range": "stddev: 0.03838251321966373",
            "extra": "mean: 1.2885363400000074 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.15207398464830096,
            "unit": "iter/sec",
            "range": "stddev: 0.4625747969375472",
            "extra": "mean: 6.575746682200008 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1240.2292686278151,
            "unit": "iter/sec",
            "range": "stddev: 0.00014060188017883419",
            "extra": "mean: 806.3025323587116 usec\nrounds: 479"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 797.4348617409563,
            "unit": "iter/sec",
            "range": "stddev: 0.00036473104138983527",
            "extra": "mean: 1.2540209213035964 msec\nrounds: 737"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.031524939844831,
            "unit": "iter/sec",
            "range": "stddev: 0.010067645402183937",
            "extra": "mean: 198.74690316666488 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9138878514236021,
            "unit": "iter/sec",
            "range": "stddev: 0.04928535099943016",
            "extra": "mean: 1.0942261661999964 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "176a6cc0c6d9ac88a9e83f5f793c25c18a04dbe0",
          "message": "fix loading aggregations from storage (#87)\n\n* fix loading aggregations from storage\r\n\r\n* add unit tests + fixes\r\n\r\n* review comments",
          "timestamp": "2020-12-06T12:30:02+02:00",
          "tree_id": "78e86d18e7fb5f1a2fefddce637102332c59b0c7",
          "url": "https://github.com/mlrun/storey/commit/176a6cc0c6d9ac88a9e83f5f793c25c18a04dbe0"
        },
        "date": 1607250828356,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1204.4510851200944,
            "unit": "iter/sec",
            "range": "stddev: 0.00011806627761426554",
            "extra": "mean: 830.2537249989618 usec\nrounds: 440"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 857.9362526973607,
            "unit": "iter/sec",
            "range": "stddev: 0.000317864402050211",
            "extra": "mean: 1.1655877658229146 msec\nrounds: 790"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 5.648462917112507,
            "unit": "iter/sec",
            "range": "stddev: 0.009225348260308294",
            "extra": "mean: 177.03931399999342 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.9013563349817088,
            "unit": "iter/sec",
            "range": "stddev: 0.031863561437709964",
            "extra": "mean: 1.1094391432000008 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4533.969877341636,
            "unit": "iter/sec",
            "range": "stddev: 0.00004567254321319892",
            "extra": "mean: 220.55726593982615 usec\nrounds: 2384"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3645.8377043570713,
            "unit": "iter/sec",
            "range": "stddev: 0.00007281140673194981",
            "extra": "mean: 274.28538544239615 usec\nrounds: 2514"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 50.77697568856718,
            "unit": "iter/sec",
            "range": "stddev: 0.0006863872077057729",
            "extra": "mean: 19.693965354166565 msec\nrounds: 48"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.874308703687502,
            "unit": "iter/sec",
            "range": "stddev: 0.009702459356299414",
            "extra": "mean: 101.27291236363268 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1223.2638225527792,
            "unit": "iter/sec",
            "range": "stddev: 0.00014737978114287762",
            "extra": "mean: 817.4851422591252 usec\nrounds: 478"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 754.1221153556836,
            "unit": "iter/sec",
            "range": "stddev: 0.0005341326913119839",
            "extra": "mean: 1.3260451850405521 msec\nrounds: 762"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.047956391968171,
            "unit": "iter/sec",
            "range": "stddev: 0.010064851344950772",
            "extra": "mean: 247.03823439999724 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.8405831993741206,
            "unit": "iter/sec",
            "range": "stddev: 0.04860413884499681",
            "extra": "mean: 1.1896502341999906 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1196.9691435967136,
            "unit": "iter/sec",
            "range": "stddev: 0.000228080635410285",
            "extra": "mean: 835.4434242098749 usec\nrounds: 917"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 407.34699466069816,
            "unit": "iter/sec",
            "range": "stddev: 0.0016526441455282093",
            "extra": "mean: 2.4549094828426448 msec\nrounds: 408"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.9241488709915533,
            "unit": "iter/sec",
            "range": "stddev: 0.018294621894394743",
            "extra": "mean: 1.0820767425999918 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.16633361915090022,
            "unit": "iter/sec",
            "range": "stddev: 0.051828167265168895",
            "extra": "mean: 6.012013717400004 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1245.402520732652,
            "unit": "iter/sec",
            "range": "stddev: 0.00008422198129144523",
            "extra": "mean: 802.9532487309522 usec\nrounds: 985"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 828.4986994662286,
            "unit": "iter/sec",
            "range": "stddev: 0.0004685541512270646",
            "extra": "mean: 1.2070024981864949 msec\nrounds: 827"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.358218859251922,
            "unit": "iter/sec",
            "range": "stddev: 0.006324714010720513",
            "extra": "mean: 186.62918149999066 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9169887746848592,
            "unit": "iter/sec",
            "range": "stddev: 0.032134903692055426",
            "extra": "mean: 1.090525890399988 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aad9b46c7d5c66f7bab30e0b040216aa265600ae",
          "message": "Make DataframeSource fast. (#88)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-07T14:10:11+02:00",
          "tree_id": "ecee4f8aeef0ab2bbf7455cd55cc47c040543612",
          "url": "https://github.com/mlrun/storey/commit/aad9b46c7d5c66f7bab30e0b040216aa265600ae"
        },
        "date": 1607343233524,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1236.2443544355365,
            "unit": "iter/sec",
            "range": "stddev: 0.00009926317942589377",
            "extra": "mean: 808.9015706418295 usec\nrounds: 545"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 860.4875794506424,
            "unit": "iter/sec",
            "range": "stddev: 0.00019745101124743722",
            "extra": "mean: 1.162131823725365 msec\nrounds: 902"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 5.932420787077322,
            "unit": "iter/sec",
            "range": "stddev: 0.0010690768544483445",
            "extra": "mean: 168.5652511666594 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.9390606609488916,
            "unit": "iter/sec",
            "range": "stddev: 0.01774919561742131",
            "extra": "mean: 1.064893932399991 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4881.874675033862,
            "unit": "iter/sec",
            "range": "stddev: 0.000019462393136979416",
            "extra": "mean: 204.83934278650108 usec\nrounds: 2433"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3856.134410003553,
            "unit": "iter/sec",
            "range": "stddev: 0.00004937366006009192",
            "extra": "mean: 259.3270601267964 usec\nrounds: 2528"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 54.054396297497796,
            "unit": "iter/sec",
            "range": "stddev: 0.0003856666435231375",
            "extra": "mean: 18.499882867923 msec\nrounds: 53"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.50414560907754,
            "unit": "iter/sec",
            "range": "stddev: 0.007885441068624632",
            "extra": "mean: 95.20050818181858 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1253.766404369548,
            "unit": "iter/sec",
            "range": "stddev: 0.00023433032523350233",
            "extra": "mean: 797.5967425150832 usec\nrounds: 835"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 817.0400060811659,
            "unit": "iter/sec",
            "range": "stddev: 0.00015801910872257512",
            "extra": "mean: 1.2239302758213515 msec\nrounds: 852"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.236349155983023,
            "unit": "iter/sec",
            "range": "stddev: 0.0032796726613989243",
            "extra": "mean: 236.05230900000151 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.8438337494712111,
            "unit": "iter/sec",
            "range": "stddev: 0.04314848925358135",
            "extra": "mean: 1.1850675570000022 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1207.9485251199146,
            "unit": "iter/sec",
            "range": "stddev: 0.00010141389946210007",
            "extra": "mean: 827.8498455890152 usec\nrounds: 816"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 447.11973232596625,
            "unit": "iter/sec",
            "range": "stddev: 0.00018977388563816303",
            "extra": "mean: 2.236537391892524 msec\nrounds: 370"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.9100916274771768,
            "unit": "iter/sec",
            "range": "stddev: 0.03831624511783622",
            "extra": "mean: 1.098790462200003 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.16872143844958182,
            "unit": "iter/sec",
            "range": "stddev: 0.06652596534297903",
            "extra": "mean: 5.9269290801999945 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1260.5338489327282,
            "unit": "iter/sec",
            "range": "stddev: 0.00015577076962261765",
            "extra": "mean: 793.3146744505771 usec\nrounds: 728"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 840.2475852482345,
            "unit": "iter/sec",
            "range": "stddev: 0.0002803080963167804",
            "extra": "mean: 1.1901254077446348 msec\nrounds: 878"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.279638318165834,
            "unit": "iter/sec",
            "range": "stddev: 0.019088793747249252",
            "extra": "mean: 189.4069138333331 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9047531453124764,
            "unit": "iter/sec",
            "range": "stddev: 0.03736123076833809",
            "extra": "mean: 1.105273858599992 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9abea3c7210169e5059f5fdb1e22f9fc18f6f366",
          "message": "Remove unnecessary async iteration. (#89)\n\nIteration can be suspended on await self._do_downstream(event) anyway.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-07T15:19:09+02:00",
          "tree_id": "18a24b32d248c1aa5ce330bda756c83c1527a625",
          "url": "https://github.com/mlrun/storey/commit/9abea3c7210169e5059f5fdb1e22f9fc18f6f366"
        },
        "date": 1607347379367,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1260.3310797937809,
            "unit": "iter/sec",
            "range": "stddev: 0.00012783220455147917",
            "extra": "mean: 793.4423073686503 usec\nrounds: 475"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 874.4526013804114,
            "unit": "iter/sec",
            "range": "stddev: 0.0003208715937231825",
            "extra": "mean: 1.1435725600465931 msec\nrounds: 866"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 5.445529224481949,
            "unit": "iter/sec",
            "range": "stddev: 0.01306414034262623",
            "extra": "mean: 183.63688059999959 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.9059563626694266,
            "unit": "iter/sec",
            "range": "stddev: 0.045542597666554066",
            "extra": "mean: 1.1038059239999938 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4826.173554339403,
            "unit": "iter/sec",
            "range": "stddev: 0.000011872395803227386",
            "extra": "mean: 207.20348921162613 usec\nrounds: 2410"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3892.3422704916884,
            "unit": "iter/sec",
            "range": "stddev: 0.000050907833624075286",
            "extra": "mean: 256.9147136882384 usec\nrounds: 2389"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 52.526777446568026,
            "unit": "iter/sec",
            "range": "stddev: 0.0001007424787861225",
            "extra": "mean: 19.037908826926095 msec\nrounds: 52"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.349813983827465,
            "unit": "iter/sec",
            "range": "stddev: 0.009354704379435787",
            "extra": "mean: 96.62009400000731 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1212.9718458682758,
            "unit": "iter/sec",
            "range": "stddev: 0.0002931619788331717",
            "extra": "mean: 824.4214434211989 usec\nrounds: 760"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 794.5671982650217,
            "unit": "iter/sec",
            "range": "stddev: 0.0003988102875601674",
            "extra": "mean: 1.2585467940075443 msec\nrounds: 801"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.9078667241532004,
            "unit": "iter/sec",
            "range": "stddev: 0.026897801807360726",
            "extra": "mean: 255.8940901999904 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9109126371459808,
            "unit": "iter/sec",
            "range": "stddev: 0.013093528112577258",
            "extra": "mean: 1.0978001173999985 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1115.6550752456437,
            "unit": "iter/sec",
            "range": "stddev: 0.0004079291845264405",
            "extra": "mean: 896.33437985286 usec\nrounds: 953"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 416.51034060990617,
            "unit": "iter/sec",
            "range": "stddev: 0.0006984253565102905",
            "extra": "mean: 2.4009007760423806 msec\nrounds: 384"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8733779184679086,
            "unit": "iter/sec",
            "range": "stddev: 0.03818003400657884",
            "extra": "mean: 1.1449797147999958 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.16002876595674234,
            "unit": "iter/sec",
            "range": "stddev: 0.06526818993921536",
            "extra": "mean: 6.248876531799988 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1228.4958229991687,
            "unit": "iter/sec",
            "range": "stddev: 0.00027049181627643407",
            "extra": "mean: 814.0035816798026 usec\nrounds: 655"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 809.1323332387545,
            "unit": "iter/sec",
            "range": "stddev: 0.000501298210355312",
            "extra": "mean: 1.2358917805166059 msec\nrounds: 852"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.102287405190896,
            "unit": "iter/sec",
            "range": "stddev: 0.012001721058263063",
            "extra": "mean: 195.99052750000587 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.8366960430385147,
            "unit": "iter/sec",
            "range": "stddev: 0.03055227344292647",
            "extra": "mean: 1.1951771594000093 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f2551f6ea5f5fbf0dfebc85190163ae3c6f5841",
          "message": "Better error handling in ReadCSV. (#90)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-07T18:03:31+02:00",
          "tree_id": "b38cae58ccb6358b1d1b21c42d7cf0f5b414e5a8",
          "url": "https://github.com/mlrun/storey/commit/7f2551f6ea5f5fbf0dfebc85190163ae3c6f5841"
        },
        "date": 1607357212897,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1388.4917034479522,
            "unit": "iter/sec",
            "range": "stddev: 0.000054613835025637564",
            "extra": "mean: 720.2059598316391 usec\nrounds: 473"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 987.0524622819535,
            "unit": "iter/sec",
            "range": "stddev: 0.00008624793383872239",
            "extra": "mean: 1.0131173754312037 msec\nrounds: 871"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.899691688854041,
            "unit": "iter/sec",
            "range": "stddev: 0.0025278865282828116",
            "extra": "mean: 144.9340122857125 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0681493714744672,
            "unit": "iter/sec",
            "range": "stddev: 0.011469429191772074",
            "extra": "mean: 936.1986503999958 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5144.245884395062,
            "unit": "iter/sec",
            "range": "stddev: 0.000025321819628490465",
            "extra": "mean: 194.39195218748668 usec\nrounds: 2217"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 4280.172342593306,
            "unit": "iter/sec",
            "range": "stddev: 0.00005820183946614666",
            "extra": "mean: 233.6354520234369 usec\nrounds: 2199"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 57.77755022206818,
            "unit": "iter/sec",
            "range": "stddev: 0.0011603564589465947",
            "extra": "mean: 17.30776047368739 msec\nrounds: 57"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 11.433399770883899,
            "unit": "iter/sec",
            "range": "stddev: 0.006630518323580901",
            "extra": "mean: 87.46304861538935 msec\nrounds: 13"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1396.3787458445277,
            "unit": "iter/sec",
            "range": "stddev: 0.00006141253877037967",
            "extra": "mean: 716.138084295462 usec\nrounds: 866"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 875.1640711917015,
            "unit": "iter/sec",
            "range": "stddev: 0.00013255323622917697",
            "extra": "mean: 1.142642885965726 msec\nrounds: 798"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.609230834134436,
            "unit": "iter/sec",
            "range": "stddev: 0.0038478566229931148",
            "extra": "mean: 216.95593819999885 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9950674470825711,
            "unit": "iter/sec",
            "range": "stddev: 0.024932140035771006",
            "extra": "mean: 1.0049570035999977 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1337.6258332409077,
            "unit": "iter/sec",
            "range": "stddev: 0.0001086096512055886",
            "extra": "mean: 747.5932171383977 usec\nrounds: 1202"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 466.7758450747712,
            "unit": "iter/sec",
            "range": "stddev: 0.0011964554118027411",
            "extra": "mean: 2.142355930692629 msec\nrounds: 404"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.030818359591282,
            "unit": "iter/sec",
            "range": "stddev: 0.02987087555504195",
            "extra": "mean: 970.1030163999974 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.1948688139153811,
            "unit": "iter/sec",
            "range": "stddev: 0.09439080332895874",
            "extra": "mean: 5.131657446399993 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1394.7281166026453,
            "unit": "iter/sec",
            "range": "stddev: 0.00006947401660146836",
            "extra": "mean: 716.9856175523689 usec\nrounds: 1242"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 932.7539676047279,
            "unit": "iter/sec",
            "range": "stddev: 0.0004334392213862734",
            "extra": "mean: 1.072094072746704 msec\nrounds: 921"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.265782207468646,
            "unit": "iter/sec",
            "range": "stddev: 0.010105674246674386",
            "extra": "mean: 159.59699314285558 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.0523116693321657,
            "unit": "iter/sec",
            "range": "stddev: 0.012926468125699803",
            "extra": "mean: 950.2888062000068 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cda1113999838435cc8c0b32744e8b1ade5d358e",
          "message": "Reify metadata in WriteToV3IOStream. (#80)\n\n* Reify metadata in WriteToV3IOStream.\r\n\r\n* Make WriteToV3IOStream a Writer.\r\n\r\n* Update docstring. Test inference.\r\n\r\n* Setup and teardown in tests.\r\n\r\n* Add test.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-08T11:38:41+02:00",
          "tree_id": "762b5cbd3b5f3048f09887880b284d4e03a7ce37",
          "url": "https://github.com/mlrun/storey/commit/cda1113999838435cc8c0b32744e8b1ade5d358e"
        },
        "date": 1607420551765,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1179.4562021338425,
            "unit": "iter/sec",
            "range": "stddev: 0.00011528200564142525",
            "extra": "mean: 847.8483543439978 usec\nrounds: 587"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 810.6567958409107,
            "unit": "iter/sec",
            "range": "stddev: 0.00014745445556673943",
            "extra": "mean: 1.233567651724525 msec\nrounds: 580"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 5.076685775447414,
            "unit": "iter/sec",
            "range": "stddev: 0.005291953021251602",
            "extra": "mean: 196.9789039999957 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7364892057927399,
            "unit": "iter/sec",
            "range": "stddev: 0.04334335591955018",
            "extra": "mean: 1.3577931517999957 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3387.90208437281,
            "unit": "iter/sec",
            "range": "stddev: 0.0002130822602876547",
            "extra": "mean: 295.1679166327283 usec\nrounds: 2459"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2866.1333090769804,
            "unit": "iter/sec",
            "range": "stddev: 0.00016373572963785543",
            "extra": "mean: 348.90212427768876 usec\nrounds: 2422"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 48.609796524745725,
            "unit": "iter/sec",
            "range": "stddev: 0.0005169580450621341",
            "extra": "mean: 20.571984897960462 msec\nrounds: 49"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.52184296397955,
            "unit": "iter/sec",
            "range": "stddev: 0.008276345666812485",
            "extra": "mean: 105.02168579999989 msec\nrounds: 10"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1187.7726494231556,
            "unit": "iter/sec",
            "range": "stddev: 0.00031043977105409213",
            "extra": "mean: 841.9119605807157 usec\nrounds: 964"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 806.7779124977977,
            "unit": "iter/sec",
            "range": "stddev: 0.00011813896030862366",
            "extra": "mean: 1.2394984846622579 msec\nrounds: 652"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.648405108536063,
            "unit": "iter/sec",
            "range": "stddev: 0.01424291171653466",
            "extra": "mean: 274.092369199991 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.7304017346257088,
            "unit": "iter/sec",
            "range": "stddev: 0.022506778182346095",
            "extra": "mean: 1.3691095633999908 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1137.700100304368,
            "unit": "iter/sec",
            "range": "stddev: 0.00043560007543079547",
            "extra": "mean: 878.9662580960227 usec\nrounds: 1019"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 439.04674654856933,
            "unit": "iter/sec",
            "range": "stddev: 0.00014078531632882846",
            "extra": "mean: 2.2776617931033356 msec\nrounds: 406"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8826635275225488,
            "unit": "iter/sec",
            "range": "stddev: 0.017496552142423776",
            "extra": "mean: 1.1329345428000068 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.16545327629922366,
            "unit": "iter/sec",
            "range": "stddev: 0.043989437984887865",
            "extra": "mean: 6.044002405800001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1172.425055099122,
            "unit": "iter/sec",
            "range": "stddev: 0.0004212876971558483",
            "extra": "mean: 852.9329833500153 usec\nrounds: 1021"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 793.5435874679763,
            "unit": "iter/sec",
            "range": "stddev: 0.00016115738384270978",
            "extra": "mean: 1.2601702235295997 msec\nrounds: 765"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.377558119109885,
            "unit": "iter/sec",
            "range": "stddev: 0.026456974922970757",
            "extra": "mean: 228.4378580000066 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.7478896509408007,
            "unit": "iter/sec",
            "range": "stddev: 0.013234699235490569",
            "extra": "mean: 1.3370956513999885 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd7e73f0acea174f4aabd8547336a82287235599",
          "message": "Infer types in ReadCSV. (#91)\n\n* Infer types in ReadCSV.\r\n\r\n* Add type annotation and docstring line.\r\n\r\n* Add boolean inference.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-09T10:05:09+02:00",
          "tree_id": "35a6d66be88aa59cc08354d9776a8dcd3144a97b",
          "url": "https://github.com/mlrun/storey/commit/dd7e73f0acea174f4aabd8547336a82287235599"
        },
        "date": 1607501352884,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1325.6480579259523,
            "unit": "iter/sec",
            "range": "stddev: 0.00016108758503659247",
            "extra": "mean: 754.3480292684574 usec\nrounds: 615"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 936.4713214508928,
            "unit": "iter/sec",
            "range": "stddev: 0.00012233886974892316",
            "extra": "mean: 1.067838359909069 msec\nrounds: 878"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.478988102900727,
            "unit": "iter/sec",
            "range": "stddev: 0.006041860362263889",
            "extra": "mean: 154.3450897142853 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0874577106672445,
            "unit": "iter/sec",
            "range": "stddev: 0.025040279506683024",
            "extra": "mean: 919.5759892000012 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5199.251967925555,
            "unit": "iter/sec",
            "range": "stddev: 0.000024737236020214932",
            "extra": "mean: 192.33536019586083 usec\nrounds: 2457"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 4113.044068459154,
            "unit": "iter/sec",
            "range": "stddev: 0.00003939863609619256",
            "extra": "mean: 243.12892917158175 usec\nrounds: 2499"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 51.941089271125456,
            "unit": "iter/sec",
            "range": "stddev: 0.0036794684880481253",
            "extra": "mean: 19.252580452830614 msec\nrounds: 53"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.963198539631923,
            "unit": "iter/sec",
            "range": "stddev: 0.0011819648334770755",
            "extra": "mean: 91.21425616666556 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1316.1125273581938,
            "unit": "iter/sec",
            "range": "stddev: 0.00013180823665329697",
            "extra": "mean: 759.813449999811 usec\nrounds: 800"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 781.7780641702134,
            "unit": "iter/sec",
            "range": "stddev: 0.001165061419538196",
            "extra": "mean: 1.2791354040630565 msec\nrounds: 886"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.4898615733383,
            "unit": "iter/sec",
            "range": "stddev: 0.0075318515074059705",
            "extra": "mean: 222.72401579999723 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9189614335817962,
            "unit": "iter/sec",
            "range": "stddev: 0.028068026098947377",
            "extra": "mean: 1.088184948199995 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1264.0516209807943,
            "unit": "iter/sec",
            "range": "stddev: 0.00023840372264356347",
            "extra": "mean: 791.1069321869046 usec\nrounds: 1047"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 457.08685747295283,
            "unit": "iter/sec",
            "range": "stddev: 0.0012732276704925576",
            "extra": "mean: 2.187768000000247 msec\nrounds: 433"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.953008362259551,
            "unit": "iter/sec",
            "range": "stddev: 0.022778749907422582",
            "extra": "mean: 1.0493087360000004 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.17850473444039047,
            "unit": "iter/sec",
            "range": "stddev: 0.1482387276763168",
            "extra": "mean: 5.602092309399995 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1270.130714826867,
            "unit": "iter/sec",
            "range": "stddev: 0.00020636064387245944",
            "extra": "mean: 787.3205397889391 usec\nrounds: 1043"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 883.7065619203772,
            "unit": "iter/sec",
            "range": "stddev: 0.00013593385751766547",
            "extra": "mean: 1.1315973458733928 msec\nrounds: 824"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.019761949717367,
            "unit": "iter/sec",
            "range": "stddev: 0.003576907514683579",
            "extra": "mean: 166.11952571429356 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.0556700881592895,
            "unit": "iter/sec",
            "range": "stddev: 0.09085450009437733",
            "extra": "mean: 947.2656384000061 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd2b7638b48ee2923ae772c93aba5a2cef7605dc",
          "message": "Add release to PyPi support. (#93)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-10T13:21:13+02:00",
          "tree_id": "929c363f5e7e7bd70e663e1caee5c7f983dbfd16",
          "url": "https://github.com/mlrun/storey/commit/fd2b7638b48ee2923ae772c93aba5a2cef7605dc"
        },
        "date": 1607599530508,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1104.8475373928513,
            "unit": "iter/sec",
            "range": "stddev: 0.00011206993866290668",
            "extra": "mean: 905.1022572397058 usec\nrounds: 587"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 757.7694807773489,
            "unit": "iter/sec",
            "range": "stddev: 0.00017424215429433741",
            "extra": "mean: 1.3196625429862414 msec\nrounds: 663"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.622567643158123,
            "unit": "iter/sec",
            "range": "stddev: 0.007055861554458076",
            "extra": "mean: 216.3299873999904 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7227311492771297,
            "unit": "iter/sec",
            "range": "stddev: 0.019214106222301276",
            "extra": "mean: 1.3836403772000039 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3453.996005720628,
            "unit": "iter/sec",
            "range": "stddev: 0.00006920625913863121",
            "extra": "mean: 289.519732606455 usec\nrounds: 2386"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2754.2711569783833,
            "unit": "iter/sec",
            "range": "stddev: 0.00010917142100785037",
            "extra": "mean: 363.07245837663487 usec\nrounds: 1922"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 45.17329725252063,
            "unit": "iter/sec",
            "range": "stddev: 0.0012374331458431824",
            "extra": "mean: 22.136971636362027 msec\nrounds: 44"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 8.927716456239665,
            "unit": "iter/sec",
            "range": "stddev: 0.006703678970422196",
            "extra": "mean: 112.01072579999902 msec\nrounds: 10"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1093.9727691987935,
            "unit": "iter/sec",
            "range": "stddev: 0.00019926502925653433",
            "extra": "mean: 914.0995353407037 usec\nrounds: 764"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 708.8916058203672,
            "unit": "iter/sec",
            "range": "stddev: 0.00035006648105894437",
            "extra": "mean: 1.4106529006543203 msec\nrounds: 765"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.151866398868503,
            "unit": "iter/sec",
            "range": "stddev: 0.006887633940765469",
            "extra": "mean: 317.272331200013 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.638716818361567,
            "unit": "iter/sec",
            "range": "stddev: 0.028486523460176844",
            "extra": "mean: 1.565639061400003 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1060.4886696048127,
            "unit": "iter/sec",
            "range": "stddev: 0.00014555443301790178",
            "extra": "mean: 942.9615126134695 usec\nrounds: 991"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 392.0195837609679,
            "unit": "iter/sec",
            "range": "stddev: 0.00030140722592413873",
            "extra": "mean: 2.5508929691883586 msec\nrounds: 357"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8044405819018972,
            "unit": "iter/sec",
            "range": "stddev: 0.02999748681747551",
            "extra": "mean: 1.2430998913999987 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.15011033736356766,
            "unit": "iter/sec",
            "range": "stddev: 0.10029338389010925",
            "extra": "mean: 6.661766388400002 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1099.7701240737263,
            "unit": "iter/sec",
            "range": "stddev: 0.00010047745588350352",
            "extra": "mean: 909.2809289052502 usec\nrounds: 858"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 677.4270104256194,
            "unit": "iter/sec",
            "range": "stddev: 0.00038318236838529604",
            "extra": "mean: 1.4761737937961934 msec\nrounds: 548"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.336744283613882,
            "unit": "iter/sec",
            "range": "stddev: 0.005437225762319009",
            "extra": "mean: 230.58772540000518 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6678066559021627,
            "unit": "iter/sec",
            "range": "stddev: 0.021791828718864634",
            "extra": "mean: 1.4974394028000007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c61fc8545d222cdbeabc8551ab86a669190a67eb",
          "message": "fix loading aggregates when new times exceeds the stored window by more than a window (#92)\n\n* fix loading aggregates when new times exceeds the stored window\r\n\r\n* minor refactor in initialize_from_data\r\n\r\n* remove redundant conndition",
          "timestamp": "2020-12-10T14:03:18+02:00",
          "tree_id": "c891def013dd8c0cbc088ae6b65fb8d069f022cd",
          "url": "https://github.com/mlrun/storey/commit/c61fc8545d222cdbeabc8551ab86a669190a67eb"
        },
        "date": 1607602021675,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1267.1093695983398,
            "unit": "iter/sec",
            "range": "stddev: 0.000054510831516800895",
            "extra": "mean: 789.1978577326671 usec\nrounds: 485"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 900.4315818770912,
            "unit": "iter/sec",
            "range": "stddev: 0.00009829546793973182",
            "extra": "mean: 1.1105785493611215 msec\nrounds: 861"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.276937646040103,
            "unit": "iter/sec",
            "range": "stddev: 0.0010871048034899722",
            "extra": "mean: 159.31335571428917 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0255002357128766,
            "unit": "iter/sec",
            "range": "stddev: 0.014931814819438697",
            "extra": "mean: 975.1338567999937 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4571.824825932539,
            "unit": "iter/sec",
            "range": "stddev: 0.000013380624589342615",
            "extra": "mean: 218.73104024628168 usec\nrounds: 2112"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3701.960780907369,
            "unit": "iter/sec",
            "range": "stddev: 0.00005016079506995765",
            "extra": "mean: 270.12711889262505 usec\nrounds: 2456"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 50.69384585714245,
            "unit": "iter/sec",
            "range": "stddev: 0.00009439346238611628",
            "extra": "mean: 19.726260320001074 msec\nrounds: 50"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.054244394289878,
            "unit": "iter/sec",
            "range": "stddev: 0.007332738653734633",
            "extra": "mean: 99.46048263636116 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1258.3972890249838,
            "unit": "iter/sec",
            "range": "stddev: 0.00010820742135417019",
            "extra": "mean: 794.6615975109164 usec\nrounds: 723"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 851.6256112294678,
            "unit": "iter/sec",
            "range": "stddev: 0.00006721200534717445",
            "extra": "mean: 1.1742249021331428 msec\nrounds: 797"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.563820012716156,
            "unit": "iter/sec",
            "range": "stddev: 0.0016631534520954781",
            "extra": "mean: 219.1146884000034 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9238405746420215,
            "unit": "iter/sec",
            "range": "stddev: 0.0057539714855589464",
            "extra": "mean: 1.082437844200001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1222.7167866463471,
            "unit": "iter/sec",
            "range": "stddev: 0.00005098798188778237",
            "extra": "mean: 817.8508800413119 usec\nrounds: 967"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 450.75056758919834,
            "unit": "iter/sec",
            "range": "stddev: 0.00004023050098144234",
            "extra": "mean: 2.2185218875006996 msec\nrounds: 400"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.9494159259018405,
            "unit": "iter/sec",
            "range": "stddev: 0.006681410584894289",
            "extra": "mean: 1.0532791505999968 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.17900572201889933,
            "unit": "iter/sec",
            "range": "stddev: 0.0167510376576995",
            "extra": "mean: 5.586413600200001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1278.298378065361,
            "unit": "iter/sec",
            "range": "stddev: 0.000056115941386297434",
            "extra": "mean: 782.2899701347104 usec\nrounds: 1038"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 881.8045761639164,
            "unit": "iter/sec",
            "range": "stddev: 0.00006708256062447281",
            "extra": "mean: 1.1340381157356487 msec\nrounds: 769"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.846596919857328,
            "unit": "iter/sec",
            "range": "stddev: 0.0020870727966802727",
            "extra": "mean: 171.039668666675 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9639368370462825,
            "unit": "iter/sec",
            "range": "stddev: 0.01706659145553631",
            "extra": "mean: 1.0374123714000008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d6312f645fbe6d3d529df8403e53bd38e7be5d1",
          "message": "Lock grpcio-tools version to avoid segfaults. Update v3io-py. (#96)\n\n* Lock grpcio-tools version to avoid segfaults. Update v3io-py.\r\n\r\n* Use latest grpcio-tools that doesn't segfault.\r\n\r\n* Use grpcio 1.30.0 as in frames Pipfile.lock.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-10T14:20:56+02:00",
          "tree_id": "68a8596092e1216c40a14f280f6d3ba55ecf4065",
          "url": "https://github.com/mlrun/storey/commit/4d6312f645fbe6d3d529df8403e53bd38e7be5d1"
        },
        "date": 1607603063497,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1367.9938199836483,
            "unit": "iter/sec",
            "range": "stddev: 0.00006681845667137136",
            "extra": "mean: 730.9974543685827 usec\nrounds: 515"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 951.8069698794804,
            "unit": "iter/sec",
            "range": "stddev: 0.00006764834134228214",
            "extra": "mean: 1.0506331973242662 msec\nrounds: 897"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.536171577820751,
            "unit": "iter/sec",
            "range": "stddev: 0.0013977581711263896",
            "extra": "mean: 152.9947597142812 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0645322287910362,
            "unit": "iter/sec",
            "range": "stddev: 0.013154077195395217",
            "extra": "mean: 939.3797322000069 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5305.814145005231,
            "unit": "iter/sec",
            "range": "stddev: 0.000018808937789400927",
            "extra": "mean: 188.47248936176487 usec\nrounds: 2350"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 4217.567467192775,
            "unit": "iter/sec",
            "range": "stddev: 0.000022355350942041857",
            "extra": "mean: 237.1034981132389 usec\nrounds: 2385"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 57.00559542775133,
            "unit": "iter/sec",
            "range": "stddev: 0.0006319854506207795",
            "extra": "mean: 17.54213761818164 msec\nrounds: 55"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 11.127726594096165,
            "unit": "iter/sec",
            "range": "stddev: 0.0017043839608748214",
            "extra": "mean: 89.86561554545668 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1344.9877825139229,
            "unit": "iter/sec",
            "range": "stddev: 0.00008343842598094965",
            "extra": "mean: 743.5011774834827 usec\nrounds: 755"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 879.3947758764773,
            "unit": "iter/sec",
            "range": "stddev: 0.00009541898706856827",
            "extra": "mean: 1.1371457136566652 msec\nrounds: 908"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.890409488471927,
            "unit": "iter/sec",
            "range": "stddev: 0.0018045781849866287",
            "extra": "mean: 204.48185419999731 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9859410061670508,
            "unit": "iter/sec",
            "range": "stddev: 0.00648926709895321",
            "extra": "mean: 1.0142594675999987 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1311.0573189549384,
            "unit": "iter/sec",
            "range": "stddev: 0.00006363089521425946",
            "extra": "mean: 762.7431581687928 usec\nrounds: 961"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 467.616451235386,
            "unit": "iter/sec",
            "range": "stddev: 0.0010643022162285633",
            "extra": "mean: 2.1385047454128725 msec\nrounds: 436"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.0061431014847895,
            "unit": "iter/sec",
            "range": "stddev: 0.014472085920546872",
            "extra": "mean: 993.8944058000061 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.19005601913251488,
            "unit": "iter/sec",
            "range": "stddev: 0.05176613818367887",
            "extra": "mean: 5.261606575600001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1390.4741455705107,
            "unit": "iter/sec",
            "range": "stddev: 0.0000554492997958865",
            "extra": "mean: 719.17913985355 usec\nrounds: 1094"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 925.6685281914276,
            "unit": "iter/sec",
            "range": "stddev: 0.00007127676718505145",
            "extra": "mean: 1.0803003122011736 msec\nrounds: 836"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.279224548240919,
            "unit": "iter/sec",
            "range": "stddev: 0.00063411176674983",
            "extra": "mean: 159.25533357142692 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.0549931771766008,
            "unit": "iter/sec",
            "range": "stddev: 0.0028533861161613486",
            "extra": "mean: 947.8734286000076 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2ea9832a2a75747b39487f00c6827495a788ac86",
          "message": "add benchmark tests (#98)\n\n* add benchmark tests\r\n\r\n* rename test",
          "timestamp": "2020-12-13T12:26:50+02:00",
          "tree_id": "0d468c34801e62e8e30fb6406ca18f4de32fff4b",
          "url": "https://github.com/mlrun/storey/commit/2ea9832a2a75747b39487f00c6827495a788ac86"
        },
        "date": 1607855754285,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1072.6992588493226,
            "unit": "iter/sec",
            "range": "stddev: 0.00010126322353392654",
            "extra": "mean: 932.2277346147264 usec\nrounds: 520"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 761.6551581718411,
            "unit": "iter/sec",
            "range": "stddev: 0.00022748938821100516",
            "extra": "mean: 1.3129301223407255 msec\nrounds: 752"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.633383867519751,
            "unit": "iter/sec",
            "range": "stddev: 0.005227274651193495",
            "extra": "mean: 215.8249842000032 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7103138870304624,
            "unit": "iter/sec",
            "range": "stddev: 0.03833692621438924",
            "extra": "mean: 1.4078283111999952 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3329.3143797611765,
            "unit": "iter/sec",
            "range": "stddev: 0.00006836418484261163",
            "extra": "mean: 300.362142451604 usec\nrounds: 2113"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2764.010684518345,
            "unit": "iter/sec",
            "range": "stddev: 0.00004329379545628364",
            "extra": "mean: 361.7931021761804 usec\nrounds: 2114"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 45.19614990645718,
            "unit": "iter/sec",
            "range": "stddev: 0.0012979200476030675",
            "extra": "mean: 22.12577845833567 msec\nrounds: 48"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.237834633677727,
            "unit": "iter/sec",
            "range": "stddev: 0.0018296248960408916",
            "extra": "mean: 108.25047639999639 msec\nrounds: 10"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1058.5643388073033,
            "unit": "iter/sec",
            "range": "stddev: 0.00035610427687788525",
            "extra": "mean: 944.67569267137 usec\nrounds: 846"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 693.3256849294262,
            "unit": "iter/sec",
            "range": "stddev: 0.0003670881893656768",
            "extra": "mean: 1.442323603086752 msec\nrounds: 713"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.1267377783224335,
            "unit": "iter/sec",
            "range": "stddev: 0.014217518934443419",
            "extra": "mean: 319.8221504000003 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6173217980832373,
            "unit": "iter/sec",
            "range": "stddev: 0.035272347155489124",
            "extra": "mean: 1.6199006791999977 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 997.9428502882342,
            "unit": "iter/sec",
            "range": "stddev: 0.00030669177060974853",
            "extra": "mean: 1.0020613903002278 msec\nrounds: 866"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 379.9668947886547,
            "unit": "iter/sec",
            "range": "stddev: 0.001395280445098842",
            "extra": "mean: 2.6318082278094788 msec\nrounds: 338"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.7751024361040173,
            "unit": "iter/sec",
            "range": "stddev: 0.025866399095525443",
            "extra": "mean: 1.2901520539999978 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.14930881403005275,
            "unit": "iter/sec",
            "range": "stddev: 0.09288909952330553",
            "extra": "mean: 6.697528250400012 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1026.7553169325233,
            "unit": "iter/sec",
            "range": "stddev: 0.0003911174993927676",
            "extra": "mean: 973.9418764224606 usec\nrounds: 615"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 706.9735858309535,
            "unit": "iter/sec",
            "range": "stddev: 0.00025578989846316875",
            "extra": "mean: 1.4144800032728704 msec\nrounds: 611"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.18568763115962,
            "unit": "iter/sec",
            "range": "stddev: 0.01758011195285658",
            "extra": "mean: 238.909371200009 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6778793153108827,
            "unit": "iter/sec",
            "range": "stddev: 0.024101158769879404",
            "extra": "mean: 1.4751888387999998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.026032233369107968,
            "unit": "iter/sec",
            "range": "stddev: 0.3851720920170321",
            "extra": "mean: 38.413915003800014 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8aaf9081e81b30362532c32004985f51b0082af2",
          "message": "Lock dependency versions. (#97)\n\n* Lock dependency versions.\r\n\r\nWe don't use a Pipfile.lock to avoid targeting a specific version of Python.\r\n\r\n* Don't lock dev and internal dependencies for now.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-13T12:56:40+02:00",
          "tree_id": "6af5a65ccfa217675a7040ae2896f6abed26cc29",
          "url": "https://github.com/mlrun/storey/commit/8aaf9081e81b30362532c32004985f51b0082af2"
        },
        "date": 1607857535665,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 938.6591697941451,
            "unit": "iter/sec",
            "range": "stddev: 0.0005286159493594781",
            "extra": "mean: 1.0653494177437242 msec\nrounds: 541"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 713.0720794391807,
            "unit": "iter/sec",
            "range": "stddev: 0.0004866539742325903",
            "extra": "mean: 1.402382772841819 msec\nrounds: 788"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.355872523609972,
            "unit": "iter/sec",
            "range": "stddev: 0.023257980406967218",
            "extra": "mean: 229.57512979999706 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.6525198223691819,
            "unit": "iter/sec",
            "range": "stddev: 0.09054596431064606",
            "extra": "mean: 1.5325204932000076 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3341.8609365830634,
            "unit": "iter/sec",
            "range": "stddev: 0.00011057330051720127",
            "extra": "mean: 299.2344741377734 usec\nrounds: 2320"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2723.2825967344056,
            "unit": "iter/sec",
            "range": "stddev: 0.0001068259964714035",
            "extra": "mean: 367.2039035534318 usec\nrounds: 2167"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 44.260200362448835,
            "unit": "iter/sec",
            "range": "stddev: 0.002374847501483911",
            "extra": "mean: 22.59366184090794 msec\nrounds: 44"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.362593028186934,
            "unit": "iter/sec",
            "range": "stddev: 0.0034447220208248556",
            "extra": "mean: 106.80801750000342 msec\nrounds: 10"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 711.6162874256088,
            "unit": "iter/sec",
            "range": "stddev: 0.001451292509402479",
            "extra": "mean: 1.4052517032987928 msec\nrounds: 91"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 668.4334576074046,
            "unit": "iter/sec",
            "range": "stddev: 0.0006257486182530473",
            "extra": "mean: 1.4960352277688296 msec\nrounds: 641"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.8110881873553843,
            "unit": "iter/sec",
            "range": "stddev: 0.03397871082776914",
            "extra": "mean: 355.7341261999966 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.565891645560799,
            "unit": "iter/sec",
            "range": "stddev: 0.052925971446770095",
            "extra": "mean: 1.7671227484000043 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1011.4810461751142,
            "unit": "iter/sec",
            "range": "stddev: 0.0002366258156236304",
            "extra": "mean: 988.649272056526 usec\nrounds: 136"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 362.37516495520794,
            "unit": "iter/sec",
            "range": "stddev: 0.001501123069178516",
            "extra": "mean: 2.7595710101259474 msec\nrounds: 395"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.7954334824301622,
            "unit": "iter/sec",
            "range": "stddev: 0.02071077745396778",
            "extra": "mean: 1.257176146200004 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.13833464990362193,
            "unit": "iter/sec",
            "range": "stddev: 0.1625723833313694",
            "extra": "mean: 7.228846862999996 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 824.4618995787968,
            "unit": "iter/sec",
            "range": "stddev: 0.0010839040617139323",
            "extra": "mean: 1.2129123256161172 msec\nrounds: 648"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 640.0331256625243,
            "unit": "iter/sec",
            "range": "stddev: 0.0008848639343467191",
            "extra": "mean: 1.5624191309861646 msec\nrounds: 710"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.4051691981685988,
            "unit": "iter/sec",
            "range": "stddev: 0.024460560836106045",
            "extra": "mean: 293.67116339999484 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.5723347810072653,
            "unit": "iter/sec",
            "range": "stddev: 0.12828983495946894",
            "extra": "mean: 1.74722912740001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.024977519867946597,
            "unit": "iter/sec",
            "range": "stddev: 0.17347239447504217",
            "extra": "mean: 40.03600058320002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "74473d72b2104267c7695890e847baf94a854050",
          "message": "optimize aggregations (#94)\n\n* optimize aggregations - save an accumulative and sliding aggregations per window\r\n\r\n* always recalculate aggregations when aggr max_value provided\r\n\r\n* optimize type checks\r\n\r\n* minor refactoring\r\n\r\n* fix break",
          "timestamp": "2020-12-13T13:16:24+02:00",
          "tree_id": "ca502aff84142697d9c7cf32485699b4784c5593",
          "url": "https://github.com/mlrun/storey/commit/74473d72b2104267c7695890e847baf94a854050"
        },
        "date": 1607858564117,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1084.4452887980779,
            "unit": "iter/sec",
            "range": "stddev: 0.0007214073937487936",
            "extra": "mean: 922.1304295658189 usec\nrounds: 575"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 795.7996199199154,
            "unit": "iter/sec",
            "range": "stddev: 0.0003263455903096611",
            "extra": "mean: 1.256597735119092 msec\nrounds: 672"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 5.060585604124257,
            "unit": "iter/sec",
            "range": "stddev: 0.013740088119054278",
            "extra": "mean: 197.60558919999767 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7323560922940733,
            "unit": "iter/sec",
            "range": "stddev: 0.02712991110224297",
            "extra": "mean: 1.3654559722000044 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3813.6758389692404,
            "unit": "iter/sec",
            "range": "stddev: 0.00007909518345640092",
            "extra": "mean: 262.2142107049874 usec\nrounds: 2653"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3115.42514569849,
            "unit": "iter/sec",
            "range": "stddev: 0.000141229766594321",
            "extra": "mean: 320.9834784124772 usec\nrounds: 2872"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 49.27645514692937,
            "unit": "iter/sec",
            "range": "stddev: 0.0036312991703560233",
            "extra": "mean: 20.29366757446866 msec\nrounds: 47"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.277930829252941,
            "unit": "iter/sec",
            "range": "stddev: 0.009306123367240179",
            "extra": "mean: 97.29584841666868 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1068.8883364255366,
            "unit": "iter/sec",
            "range": "stddev: 0.0006882187893212594",
            "extra": "mean: 935.5514190978023 usec\nrounds: 754"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 740.1954270998643,
            "unit": "iter/sec",
            "range": "stddev: 0.0006709298501306473",
            "extra": "mean: 1.3509945662837548 msec\nrounds: 611"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.09623002604758,
            "unit": "iter/sec",
            "range": "stddev: 0.014648800152551655",
            "extra": "mean: 322.9734197999903 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6551194432249797,
            "unit": "iter/sec",
            "range": "stddev: 0.060928058400839834",
            "extra": "mean: 1.5264392018000024 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1089.9300585026278,
            "unit": "iter/sec",
            "range": "stddev: 0.00044822033348832353",
            "extra": "mean: 917.4900647972074 usec\nrounds: 1034"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 391.81460324155574,
            "unit": "iter/sec",
            "range": "stddev: 0.0011474427767262873",
            "extra": "mean: 2.5522274864867525 msec\nrounds: 407"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.4699592176954768,
            "unit": "iter/sec",
            "range": "stddev: 0.06927427111035958",
            "extra": "mean: 680.2909822000004 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.2825648534767521,
            "unit": "iter/sec",
            "range": "stddev: 0.03566711956282683",
            "extra": "mean: 3.5390105587999985 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1195.788067645699,
            "unit": "iter/sec",
            "range": "stddev: 0.00021440337191319916",
            "extra": "mean: 836.2685889388645 usec\nrounds: 669"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 725.3720447399522,
            "unit": "iter/sec",
            "range": "stddev: 0.000798216288036659",
            "extra": "mean: 1.378602893854977 msec\nrounds: 537"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.580540112720089,
            "unit": "iter/sec",
            "range": "stddev: 0.007890857694076124",
            "extra": "mean: 218.31486579999932 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6861847076003276,
            "unit": "iter/sec",
            "range": "stddev: 0.05786602508560269",
            "extra": "mean: 1.4573335559999918 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.04169218437958153,
            "unit": "iter/sec",
            "range": "stddev: 0.22657092456158034",
            "extra": "mean: 23.985310793400004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b581020b6039f93af19efbbd32e5ccc88cc062a",
          "message": "Fix nontermination on error when awaiting result. (#99)\n\n* Fix nontermination on error when awaiting result.\r\n\r\n* Fix nontermination when _ConcurrentJobExecution and Complete are combined.\r\n\r\n* Fix nontermination in _ConcurrentByKeyJobExecution+Complete.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-14T12:33:03+02:00",
          "tree_id": "c3caa6f7b945f8fda07c6ed666f0150ed377ce0f",
          "url": "https://github.com/mlrun/storey/commit/7b581020b6039f93af19efbbd32e5ccc88cc062a"
        },
        "date": 1607942415914,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1138.4763642876053,
            "unit": "iter/sec",
            "range": "stddev: 0.00023655975999716634",
            "extra": "mean: 878.3669396823569 usec\nrounds: 630"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 776.2067025560776,
            "unit": "iter/sec",
            "range": "stddev: 0.00042161867428594215",
            "extra": "mean: 1.2883166258510301 msec\nrounds: 882"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.869875739301121,
            "unit": "iter/sec",
            "range": "stddev: 0.009999753691721765",
            "extra": "mean: 205.34404849999532 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7568236024282539,
            "unit": "iter/sec",
            "range": "stddev: 0.03160511479584323",
            "extra": "mean: 1.3213118576 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3630.556129797035,
            "unit": "iter/sec",
            "range": "stddev: 0.0001369329822560694",
            "extra": "mean: 275.4398952250615 usec\nrounds: 2157"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2974.1385913258414,
            "unit": "iter/sec",
            "range": "stddev: 0.00012237150880576466",
            "extra": "mean: 336.23180941080824 usec\nrounds: 2104"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 49.2435877412439,
            "unit": "iter/sec",
            "range": "stddev: 0.0015051137975136614",
            "extra": "mean: 20.307212489362374 msec\nrounds: 47"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.687899015631062,
            "unit": "iter/sec",
            "range": "stddev: 0.004949723014194737",
            "extra": "mean: 103.22155488889153 msec\nrounds: 9"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1135.8166090354318,
            "unit": "iter/sec",
            "range": "stddev: 0.00029347204858438735",
            "extra": "mean: 880.4238219841043 usec\nrounds: 1028"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 727.8062116578825,
            "unit": "iter/sec",
            "range": "stddev: 0.0006780659937206709",
            "extra": "mean: 1.3739921204053516 msec\nrounds: 789"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.3434333394791094,
            "unit": "iter/sec",
            "range": "stddev: 0.0099401578170586",
            "extra": "mean: 299.0937453999891 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6413018572996527,
            "unit": "iter/sec",
            "range": "stddev: 0.024590165641013965",
            "extra": "mean: 1.559328089600001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1054.4563373926946,
            "unit": "iter/sec",
            "range": "stddev: 0.0005388121036433371",
            "extra": "mean: 948.3560054014695 usec\nrounds: 1111"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 394.1424296775343,
            "unit": "iter/sec",
            "range": "stddev: 0.0011686269158145742",
            "extra": "mean: 2.53715389337338 msec\nrounds: 347"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.4917999007106364,
            "unit": "iter/sec",
            "range": "stddev: 0.009855006169685276",
            "extra": "mean: 670.331188199998 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.2767413009356838,
            "unit": "iter/sec",
            "range": "stddev: 0.03727268071943024",
            "extra": "mean: 3.6134830494000085 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1107.742688281846,
            "unit": "iter/sec",
            "range": "stddev: 0.00042575185191633314",
            "extra": "mean: 902.7367190760164 usec\nrounds: 865"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 738.6495822593849,
            "unit": "iter/sec",
            "range": "stddev: 0.0006180141315536497",
            "extra": "mean: 1.3538219258734232 msec\nrounds: 715"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.40419034435395,
            "unit": "iter/sec",
            "range": "stddev: 0.006347560224476054",
            "extra": "mean: 227.05648979998614 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.7233616446949163,
            "unit": "iter/sec",
            "range": "stddev: 0.027257685878713155",
            "extra": "mean: 1.3824343706000035 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.041221695488769194,
            "unit": "iter/sec",
            "range": "stddev: 0.07663998480215911",
            "extra": "mean: 24.259070087799977 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b581020b6039f93af19efbbd32e5ccc88cc062a",
          "message": "Fix nontermination on error when awaiting result. (#99)\n\n* Fix nontermination on error when awaiting result.\r\n\r\n* Fix nontermination when _ConcurrentJobExecution and Complete are combined.\r\n\r\n* Fix nontermination in _ConcurrentByKeyJobExecution+Complete.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-14T12:33:03+02:00",
          "tree_id": "c3caa6f7b945f8fda07c6ed666f0150ed377ce0f",
          "url": "https://github.com/mlrun/storey/commit/7b581020b6039f93af19efbbd32e5ccc88cc062a"
        },
        "date": 1607955995795,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1590.3879673114423,
            "unit": "iter/sec",
            "range": "stddev: 0.000025282382814866195",
            "extra": "mean: 628.7773930347978 usec\nrounds: 603"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 1119.1385834844998,
            "unit": "iter/sec",
            "range": "stddev: 0.000043932279666028846",
            "extra": "mean: 893.5443874041449 usec\nrounds: 1048"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 7.353412416661099,
            "unit": "iter/sec",
            "range": "stddev: 0.000955396411757455",
            "extra": "mean: 135.9912845000011 msec\nrounds: 8"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.1641955351340936,
            "unit": "iter/sec",
            "range": "stddev: 0.01652897157990949",
            "extra": "mean: 858.9622360000021 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5558.189470378951,
            "unit": "iter/sec",
            "range": "stddev: 0.000009374218672570494",
            "extra": "mean: 179.91470160009158 usec\nrounds: 2500"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 4489.808591738135,
            "unit": "iter/sec",
            "range": "stddev: 0.00000931243269491716",
            "extra": "mean: 222.7266440355915 usec\nrounds: 2666"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 60.871531808968236,
            "unit": "iter/sec",
            "range": "stddev: 0.00009104386476723128",
            "extra": "mean: 16.428040666666277 msec\nrounds: 60"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 12.011912265136766,
            "unit": "iter/sec",
            "range": "stddev: 0.006791666387375434",
            "extra": "mean: 83.25069130769364 msec\nrounds: 13"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1578.2018066532814,
            "unit": "iter/sec",
            "range": "stddev: 0.000035964604458850225",
            "extra": "mean: 633.6325277187394 usec\nrounds: 938"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 1033.0853676021259,
            "unit": "iter/sec",
            "range": "stddev: 0.00005662141292823754",
            "extra": "mean: 967.9742171947322 usec\nrounds: 884"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 5.142733094257552,
            "unit": "iter/sec",
            "range": "stddev: 0.0012049073888908818",
            "extra": "mean: 194.44913466666472 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 1.0502802678671306,
            "unit": "iter/sec",
            "range": "stddev: 0.010000563600923261",
            "extra": "mean: 952.1268090000035 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1519.5822885203097,
            "unit": "iter/sec",
            "range": "stddev: 0.00007211180608027176",
            "extra": "mean: 658.0755827140813 usec\nrounds: 1076"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 514.3695112669152,
            "unit": "iter/sec",
            "range": "stddev: 0.0012021705179053595",
            "extra": "mean: 1.9441276710529658 msec\nrounds: 456"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 2.1785502800300898,
            "unit": "iter/sec",
            "range": "stddev: 0.0063148774374788205",
            "extra": "mean: 459.020849399991 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.4026849568762011,
            "unit": "iter/sec",
            "range": "stddev: 0.022806526348141655",
            "extra": "mean: 2.4833309089999944 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1594.546953474862,
            "unit": "iter/sec",
            "range": "stddev: 0.000038158841453901894",
            "extra": "mean: 627.1373808220474 usec\nrounds: 1095"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 1089.6093012127585,
            "unit": "iter/sec",
            "range": "stddev: 0.00003887569032210587",
            "extra": "mean: 917.7601539257957 usec\nrounds: 968"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.804568611473305,
            "unit": "iter/sec",
            "range": "stddev: 0.0011214527978002729",
            "extra": "mean: 146.96008771428686 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.09297034395037,
            "unit": "iter/sec",
            "range": "stddev: 0.015534287009284976",
            "extra": "mean: 914.9379080000074 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.05446269461532351,
            "unit": "iter/sec",
            "range": "stddev: 0.037540530280321185",
            "extra": "mean: 18.361192134600003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguazio.com",
            "name": "Gal Topper"
          },
          "committer": {
            "email": "galt@iguazio.com",
            "name": "Gal Topper"
          },
          "distinct": true,
          "id": "767a9cc001e8a8f461271ba3d3a6f181ce6ad998",
          "message": "Release actions.",
          "timestamp": "2020-12-14T17:10:17+02:00",
          "tree_id": "1342511be8be6bbe8269a6cead7c43d3fbabdc6b",
          "url": "https://github.com/mlrun/storey/commit/767a9cc001e8a8f461271ba3d3a6f181ce6ad998"
        },
        "date": 1607959030599,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1306.6351539075747,
            "unit": "iter/sec",
            "range": "stddev: 0.00025476835029131716",
            "extra": "mean: 765.3245797110517 usec\nrounds: 552"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 932.3137979454436,
            "unit": "iter/sec",
            "range": "stddev: 0.000632674612528882",
            "extra": "mean: 1.0726002363192713 msec\nrounds: 804"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.519273516894848,
            "unit": "iter/sec",
            "range": "stddev: 0.004861489593774518",
            "extra": "mean: 153.39132457143836 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0523910271728356,
            "unit": "iter/sec",
            "range": "stddev: 0.015054276345309888",
            "extra": "mean: 950.2171475999944 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4898.184611696015,
            "unit": "iter/sec",
            "range": "stddev: 0.000015698917189043943",
            "extra": "mean: 204.15727035117732 usec\nrounds: 2334"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3927.5217793336783,
            "unit": "iter/sec",
            "range": "stddev: 0.00001497733760078674",
            "extra": "mean: 254.61348305232173 usec\nrounds: 2478"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 54.17042399999812,
            "unit": "iter/sec",
            "range": "stddev: 0.00026282750560322225",
            "extra": "mean: 18.460257944446486 msec\nrounds: 54"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.746237939681391,
            "unit": "iter/sec",
            "range": "stddev: 0.006855119052620167",
            "extra": "mean: 93.05582154545598 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1329.617096373451,
            "unit": "iter/sec",
            "range": "stddev: 0.00007094158425728842",
            "extra": "mean: 752.0962258439018 usec\nrounds: 828"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 884.4428266165156,
            "unit": "iter/sec",
            "range": "stddev: 0.0003806091137473689",
            "extra": "mean: 1.1306553345291461 msec\nrounds: 837"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.767076208757916,
            "unit": "iter/sec",
            "range": "stddev: 0.0020322942475176045",
            "extra": "mean: 209.7721866000029 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9571698435757627,
            "unit": "iter/sec",
            "range": "stddev: 0.008643751374401962",
            "extra": "mean: 1.0447466629999895 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1281.7045177911325,
            "unit": "iter/sec",
            "range": "stddev: 0.00004749774512122274",
            "extra": "mean: 780.2110284540331 usec\nrounds: 984"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 461.0012521745115,
            "unit": "iter/sec",
            "range": "stddev: 0.00016293298959711602",
            "extra": "mean: 2.1691915049754598 msec\nrounds: 402"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.8727415584221008,
            "unit": "iter/sec",
            "range": "stddev: 0.012799958120069356",
            "extra": "mean: 533.9765091999993 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.3473422512578267,
            "unit": "iter/sec",
            "range": "stddev: 0.048166823207687635",
            "extra": "mean: 2.8790047751999963 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1295.2941660375147,
            "unit": "iter/sec",
            "range": "stddev: 0.00021418338949493642",
            "extra": "mean: 772.0254025841398 usec\nrounds: 1006"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 918.9146549682234,
            "unit": "iter/sec",
            "range": "stddev: 0.00023838529083552876",
            "extra": "mean: 1.088240343750509 msec\nrounds: 768"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.75630339037941,
            "unit": "iter/sec",
            "range": "stddev: 0.007376437397420709",
            "extra": "mean: 173.7226015000033 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.0222120124049985,
            "unit": "iter/sec",
            "range": "stddev: 0.0057667340315037535",
            "extra": "mean: 978.2706403999896 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.047388182013820626,
            "unit": "iter/sec",
            "range": "stddev: 0.04199098338068542",
            "extra": "mean: 21.102307738000015 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a688d36c2d9fd68ccda007e43ad1a535a249f28",
          "message": "Fix certain cases of branch nesting in build_flow. (#102)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-15T14:45:45+02:00",
          "tree_id": "85e9b681c32210212a6fbc6da4cfe890b0592bd1",
          "url": "https://github.com/mlrun/storey/commit/7a688d36c2d9fd68ccda007e43ad1a535a249f28"
        },
        "date": 1608036809525,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 988.5396195714252,
            "unit": "iter/sec",
            "range": "stddev: 0.000664724873944022",
            "extra": "mean: 1.0115932434084365 msec\nrounds: 493"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 737.3110833401898,
            "unit": "iter/sec",
            "range": "stddev: 0.0010804070021350185",
            "extra": "mean: 1.356279625514062 msec\nrounds: 729"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.626126859158891,
            "unit": "iter/sec",
            "range": "stddev: 0.024884151898445565",
            "extra": "mean: 216.16354899999806 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.71511944763349,
            "unit": "iter/sec",
            "range": "stddev: 0.03421006428037412",
            "extra": "mean: 1.398367787799998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3459.737065468759,
            "unit": "iter/sec",
            "range": "stddev: 0.000047247929559128974",
            "extra": "mean: 289.03930590011765 usec\nrounds: 1932"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2726.6654496810124,
            "unit": "iter/sec",
            "range": "stddev: 0.00005101387181263265",
            "extra": "mean: 366.7483299489448 usec\nrounds: 2167"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 44.709704703375984,
            "unit": "iter/sec",
            "range": "stddev: 0.0024233750265321087",
            "extra": "mean: 22.366508717390186 msec\nrounds: 46"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 8.958032052507107,
            "unit": "iter/sec",
            "range": "stddev: 0.01264446669735608",
            "extra": "mean: 111.63166129999809 msec\nrounds: 10"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1058.4226822324854,
            "unit": "iter/sec",
            "range": "stddev: 0.0005072107965304154",
            "extra": "mean: 944.8021256410937 usec\nrounds: 780"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 639.2413135046035,
            "unit": "iter/sec",
            "range": "stddev: 0.0006618974161475623",
            "extra": "mean: 1.5643544603172752 msec\nrounds: 252"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.9964249109039316,
            "unit": "iter/sec",
            "range": "stddev: 0.016925796426200568",
            "extra": "mean: 333.7310393999928 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6112213804397815,
            "unit": "iter/sec",
            "range": "stddev: 0.06699105635770436",
            "extra": "mean: 1.636068423000006 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 878.7837003240451,
            "unit": "iter/sec",
            "range": "stddev: 0.0024075012354776077",
            "extra": "mean: 1.1379364451471474 msec\nrounds: 948"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 357.3055977303622,
            "unit": "iter/sec",
            "range": "stddev: 0.0016612946191838277",
            "extra": "mean: 2.798724694916876 msec\nrounds: 354"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.432045599017203,
            "unit": "iter/sec",
            "range": "stddev: 0.03170222024286048",
            "extra": "mean: 698.3017864000203 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.26768053097599304,
            "unit": "iter/sec",
            "range": "stddev: 0.06466318752206797",
            "extra": "mean: 3.73579653459999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 862.8396141054336,
            "unit": "iter/sec",
            "range": "stddev: 0.003870330243453794",
            "extra": "mean: 1.1589639414467197 msec\nrounds: 871"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 743.9223420396967,
            "unit": "iter/sec",
            "range": "stddev: 0.00020540521314521188",
            "extra": "mean: 1.344226330477165 msec\nrounds: 817"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.173725779508682,
            "unit": "iter/sec",
            "range": "stddev: 0.030452948192083922",
            "extra": "mean: 239.5940827999766 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.7031522172424725,
            "unit": "iter/sec",
            "range": "stddev: 0.031004602447983177",
            "extra": "mean: 1.422167171600006 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.037043313649790785,
            "unit": "iter/sec",
            "range": "stddev: 0.18264860154331397",
            "extra": "mean: 26.99542512459999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "468e4c6f6cb53127c4af69b4380c06470ddeec93",
          "message": "Deep copy event body when branching. (#103)\n\n* Deep copy event body when branching.\r\n\r\n* Deep copy whole event except for AwaitableResult.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-16T11:53:41+02:00",
          "tree_id": "f4983151ccc8e3552ed0e8852a084e2c70f0636d",
          "url": "https://github.com/mlrun/storey/commit/468e4c6f6cb53127c4af69b4380c06470ddeec93"
        },
        "date": 1608112811621,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1268.4884952280827,
            "unit": "iter/sec",
            "range": "stddev: 0.0004388129405602164",
            "extra": "mean: 788.3398263065786 usec\nrounds: 593"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 948.3668589660903,
            "unit": "iter/sec",
            "range": "stddev: 0.00018619325283496347",
            "extra": "mean: 1.0544442696892635 msec\nrounds: 838"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.562893427003233,
            "unit": "iter/sec",
            "range": "stddev: 0.006915912946423574",
            "extra": "mean: 152.3718175714188 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.076055875712127,
            "unit": "iter/sec",
            "range": "stddev: 0.012616854158923966",
            "extra": "mean: 929.3197710000015 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4777.504724383605,
            "unit": "iter/sec",
            "range": "stddev: 0.0001031779098530512",
            "extra": "mean: 209.31428804165554 usec\nrounds: 2333"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3651.6701446994525,
            "unit": "iter/sec",
            "range": "stddev: 0.000060711662808791916",
            "extra": "mean: 273.8472973665326 usec\nrounds: 2734"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 52.242180224195664,
            "unit": "iter/sec",
            "range": "stddev: 0.0020841381271493116",
            "extra": "mean: 19.141620730768345 msec\nrounds: 52"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 11.785801382785946,
            "unit": "iter/sec",
            "range": "stddev: 0.006573596057528361",
            "extra": "mean: 84.84785781818584 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1296.279582928631,
            "unit": "iter/sec",
            "range": "stddev: 0.00019827423343946054",
            "extra": "mean: 771.4385177160171 usec\nrounds: 1016"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 891.9304117886695,
            "unit": "iter/sec",
            "range": "stddev: 0.00026041288692290183",
            "extra": "mean: 1.1211636993009448 msec\nrounds: 858"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.562394929356443,
            "unit": "iter/sec",
            "range": "stddev: 0.011510897076997076",
            "extra": "mean: 219.1831298000011 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 1.0269411153981343,
            "unit": "iter/sec",
            "range": "stddev: 0.01622346889222725",
            "extra": "mean: 973.7656668 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1288.3185590995367,
            "unit": "iter/sec",
            "range": "stddev: 0.00006181346206349997",
            "extra": "mean: 776.2055377816995 usec\nrounds: 1019"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 454.4267122678043,
            "unit": "iter/sec",
            "range": "stddev: 0.0006903929695225865",
            "extra": "mean: 2.2005748627969663 msec\nrounds: 379"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.9137326105782089,
            "unit": "iter/sec",
            "range": "stddev: 0.02298887720913867",
            "extra": "mean: 522.5390394000044 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.3493868748091187,
            "unit": "iter/sec",
            "range": "stddev: 0.022140820638293115",
            "extra": "mean: 2.862156743999992 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1347.6043120673135,
            "unit": "iter/sec",
            "range": "stddev: 0.0002282205406821016",
            "extra": "mean: 742.0575839995157 usec\nrounds: 1125"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 930.7263380693323,
            "unit": "iter/sec",
            "range": "stddev: 0.00033931900607494245",
            "extra": "mean: 1.074429678303041 msec\nrounds: 802"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.099168637832261,
            "unit": "iter/sec",
            "range": "stddev: 0.0035207545271360896",
            "extra": "mean: 163.95677171428653 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.0342632626347492,
            "unit": "iter/sec",
            "range": "stddev: 0.011580407363433498",
            "extra": "mean: 966.871816999992 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.04601065664497899,
            "unit": "iter/sec",
            "range": "stddev: 0.6656456436678561",
            "extra": "mean: 21.7340953796 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f015d8ad7ab56bb00d970fd331abd8f2b1db0c39",
          "message": "Add verbose logging of event progression. (#100)\n\n* Add verbose logging of event progression.\r\n\r\n* Fix.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-16T12:23:22+02:00",
          "tree_id": "bda9daa1d1ff1eb10be3a31866760fca62e573ba",
          "url": "https://github.com/mlrun/storey/commit/f015d8ad7ab56bb00d970fd331abd8f2b1db0c39"
        },
        "date": 1608114582625,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1289.717851890704,
            "unit": "iter/sec",
            "range": "stddev: 0.00033677941332431867",
            "extra": "mean: 775.3633855141396 usec\nrounds: 428"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 894.1957670603234,
            "unit": "iter/sec",
            "range": "stddev: 0.00031797984692219045",
            "extra": "mean: 1.1183233435419953 msec\nrounds: 751"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.27319543417398,
            "unit": "iter/sec",
            "range": "stddev: 0.003646511456143092",
            "extra": "mean: 159.40839249999783 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.9873044125029343,
            "unit": "iter/sec",
            "range": "stddev: 0.038179615393249856",
            "extra": "mean: 1.0128588380000054 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4491.039338123194,
            "unit": "iter/sec",
            "range": "stddev: 0.00017394510874513798",
            "extra": "mean: 222.66560693674535 usec\nrounds: 2422"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3795.660144184698,
            "unit": "iter/sec",
            "range": "stddev: 0.00008420585071403041",
            "extra": "mean: 263.4587824023425 usec\nrounds: 2739"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 49.943167272686594,
            "unit": "iter/sec",
            "range": "stddev: 0.0014171129310905453",
            "extra": "mean: 20.022758960000715 msec\nrounds: 50"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.143903143682024,
            "unit": "iter/sec",
            "range": "stddev: 0.002558114303105415",
            "extra": "mean: 98.5813829090861 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1259.3448885858293,
            "unit": "iter/sec",
            "range": "stddev: 0.00036330673683696756",
            "extra": "mean: 794.0636509216642 usec\nrounds: 868"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 825.2125139680144,
            "unit": "iter/sec",
            "range": "stddev: 0.0003758968277480931",
            "extra": "mean: 1.211809058967761 msec\nrounds: 814"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.324509325430722,
            "unit": "iter/sec",
            "range": "stddev: 0.009383621737936016",
            "extra": "mean: 231.2401072 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.8861385038582573,
            "unit": "iter/sec",
            "range": "stddev: 0.01952585554482211",
            "extra": "mean: 1.1284917602000006 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1217.3902139777763,
            "unit": "iter/sec",
            "range": "stddev: 0.0003430817697548596",
            "extra": "mean: 821.4293071508583 usec\nrounds: 993"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 415.47084800120814,
            "unit": "iter/sec",
            "range": "stddev: 0.0013421247161269699",
            "extra": "mean: 2.4069077404850607 msec\nrounds: 289"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.7978906917712663,
            "unit": "iter/sec",
            "range": "stddev: 0.008190917762440054",
            "extra": "mean: 556.2073403999932 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.3306021975031528,
            "unit": "iter/sec",
            "range": "stddev: 0.0492807572943592",
            "extra": "mean: 3.024783282000004 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1201.4926711343887,
            "unit": "iter/sec",
            "range": "stddev: 0.0006256529595059933",
            "extra": "mean: 832.2980439454952 usec\nrounds: 1024"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 870.4942849737733,
            "unit": "iter/sec",
            "range": "stddev: 0.00021994260798410462",
            "extra": "mean: 1.148772619489545 msec\nrounds: 862"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.298094510551607,
            "unit": "iter/sec",
            "range": "stddev: 0.02018959964429676",
            "extra": "mean: 188.74710483333482 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9773136166706643,
            "unit": "iter/sec",
            "range": "stddev: 0.014869249255105773",
            "extra": "mean: 1.023213002400007 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.0450820507117611,
            "unit": "iter/sec",
            "range": "stddev: 0.1320722860342429",
            "extra": "mean: 22.181777097799987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a611df15fc09718541c5126a7af31303244fcd56",
          "message": "Create Driver base class. (#105)\n\n* Create Driver base class.\r\n\r\n* NoopDriver -> Driver\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-16T18:59:49+02:00",
          "tree_id": "7d801c3349043af179b0f309d52513b44c277008",
          "url": "https://github.com/mlrun/storey/commit/a611df15fc09718541c5126a7af31303244fcd56"
        },
        "date": 1608138345370,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1470.9646327245523,
            "unit": "iter/sec",
            "range": "stddev: 0.0002637086977088172",
            "extra": "mean: 679.8259983639297 usec\nrounds: 611"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 1060.1855705637101,
            "unit": "iter/sec",
            "range": "stddev: 0.0002903019266771531",
            "extra": "mean: 943.231098182454 usec\nrounds: 550"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.921523632678098,
            "unit": "iter/sec",
            "range": "stddev: 0.001902079946388399",
            "extra": "mean: 144.47685987500947 msec\nrounds: 8"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0645131505450696,
            "unit": "iter/sec",
            "range": "stddev: 0.03612998419362363",
            "extra": "mean: 939.3965677999972 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5427.333563120736,
            "unit": "iter/sec",
            "range": "stddev: 0.000023824538130949802",
            "extra": "mean: 184.25254102587286 usec\nrounds: 2340"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 4310.006708638363,
            "unit": "iter/sec",
            "range": "stddev: 0.000026708308728167365",
            "extra": "mean: 232.018200341949 usec\nrounds: 2341"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 59.61918500225378,
            "unit": "iter/sec",
            "range": "stddev: 0.00009893671206366053",
            "extra": "mean: 16.773124288133044 msec\nrounds: 59"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 11.809114844217707,
            "unit": "iter/sec",
            "range": "stddev: 0.006347150236054741",
            "extra": "mean: 84.68035184615438 msec\nrounds: 13"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1525.0987561258228,
            "unit": "iter/sec",
            "range": "stddev: 0.00007886763511225963",
            "extra": "mean: 655.6952433298677 usec\nrounds: 937"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 1006.1992202574537,
            "unit": "iter/sec",
            "range": "stddev: 0.00008519002765371938",
            "extra": "mean: 993.8389733040467 usec\nrounds: 899"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 5.164594201233809,
            "unit": "iter/sec",
            "range": "stddev: 0.002364358268477415",
            "extra": "mean: 193.62605483333084 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 1.0232753316691936,
            "unit": "iter/sec",
            "range": "stddev: 0.017085468341137423",
            "extra": "mean: 977.254087 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1484.1540148487181,
            "unit": "iter/sec",
            "range": "stddev: 0.00004202979565831052",
            "extra": "mean: 673.7845196624903 usec\nrounds: 1068"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 510.57285838155576,
            "unit": "iter/sec",
            "range": "stddev: 0.001181414454535887",
            "extra": "mean: 1.9585843304907733 msec\nrounds: 469"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 2.131393629176297,
            "unit": "iter/sec",
            "range": "stddev: 0.003858847382764538",
            "extra": "mean: 469.17659239999807 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.3944284613577983,
            "unit": "iter/sec",
            "range": "stddev: 0.007935555022664628",
            "extra": "mean: 2.535313999800002 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1566.0037851727654,
            "unit": "iter/sec",
            "range": "stddev: 0.000041464952185331004",
            "extra": "mean: 638.5680606063654 usec\nrounds: 825"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 1016.2888130546235,
            "unit": "iter/sec",
            "range": "stddev: 0.0005375871411835392",
            "extra": "mean: 983.9722598090352 usec\nrounds: 943"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.848631746595733,
            "unit": "iter/sec",
            "range": "stddev: 0.0021736248751169766",
            "extra": "mean: 146.01456714285632 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.0913293329447409,
            "unit": "iter/sec",
            "range": "stddev: 0.023613805263251707",
            "extra": "mean: 916.3136826000027 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.05317426030287068,
            "unit": "iter/sec",
            "range": "stddev: 0.04775393943637262",
            "extra": "mean: 18.806091411600015 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52964c12f9acdd2070e6a7e9927a427bd9bd9c79",
          "message": "Re-add NoopDriver. (#107)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-17T10:40:09+02:00",
          "tree_id": "1e8fa01246af9adc55555518cc9a7b8dd5ca7f4f",
          "url": "https://github.com/mlrun/storey/commit/52964c12f9acdd2070e6a7e9927a427bd9bd9c79"
        },
        "date": 1608194779921,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1084.1998586771492,
            "unit": "iter/sec",
            "range": "stddev: 0.00029794479734825217",
            "extra": "mean: 922.3391720601375 usec\nrounds: 680"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 886.9730041345946,
            "unit": "iter/sec",
            "range": "stddev: 0.00015422351856963267",
            "extra": "mean: 1.1274300292551565 msec\nrounds: 752"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 5.193750975775896,
            "unit": "iter/sec",
            "range": "stddev: 0.019739807054323835",
            "extra": "mean: 192.53907333333586 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8058592543603514,
            "unit": "iter/sec",
            "range": "stddev: 0.040767524561007386",
            "extra": "mean: 1.2409114799999998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4226.050711559267,
            "unit": "iter/sec",
            "range": "stddev: 0.00004956610189189903",
            "extra": "mean: 236.62754383537307 usec\nrounds: 2863"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3374.233770559719,
            "unit": "iter/sec",
            "range": "stddev: 0.00009383734848031001",
            "extra": "mean: 296.36358000000683 usec\nrounds: 2800"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 57.54967891658764,
            "unit": "iter/sec",
            "range": "stddev: 0.0015079004155534514",
            "extra": "mean: 17.376291559322123 msec\nrounds: 59"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.27226410007441,
            "unit": "iter/sec",
            "range": "stddev: 0.013031606930978134",
            "extra": "mean: 97.34952199999961 msec\nrounds: 13"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1199.9887137904504,
            "unit": "iter/sec",
            "range": "stddev: 0.00022429249801186486",
            "extra": "mean: 833.3411710525689 usec\nrounds: 912"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 837.7583318186436,
            "unit": "iter/sec",
            "range": "stddev: 0.00018373654974872424",
            "extra": "mean: 1.1936616587616085 msec\nrounds: 759"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.4428083665942273,
            "unit": "iter/sec",
            "range": "stddev: 0.027401494420029197",
            "extra": "mean: 290.4605465999964 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.7302855300526216,
            "unit": "iter/sec",
            "range": "stddev: 0.0460858700195716",
            "extra": "mean: 1.3693274189999953 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1292.6892133123015,
            "unit": "iter/sec",
            "range": "stddev: 0.00010977809268149086",
            "extra": "mean: 773.5811436359603 usec\nrounds: 1100"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 432.5939031174943,
            "unit": "iter/sec",
            "range": "stddev: 0.0009578097598148665",
            "extra": "mean: 2.311636832589376 msec\nrounds: 448"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.6926184450235682,
            "unit": "iter/sec",
            "range": "stddev: 0.05146019357847807",
            "extra": "mean: 590.8006042000068 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.32089279528734455,
            "unit": "iter/sec",
            "range": "stddev: 0.08191165702217709",
            "extra": "mean: 3.1163055533999966 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1369.6505898761197,
            "unit": "iter/sec",
            "range": "stddev: 0.00011714172768678871",
            "extra": "mean: 730.113218211695 usec\nrounds: 1219"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 845.9946928736766,
            "unit": "iter/sec",
            "range": "stddev: 0.000551545329491202",
            "extra": "mean: 1.1820405121020297 msec\nrounds: 785"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.285570601126984,
            "unit": "iter/sec",
            "range": "stddev: 0.009754464706428902",
            "extra": "mean: 189.19433216666923 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.7833702408847993,
            "unit": "iter/sec",
            "range": "stddev: 0.037240425996793454",
            "extra": "mean: 1.2765355994000003 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.04728568747811246,
            "unit": "iter/sec",
            "range": "stddev: 0.24567242194025474",
            "extra": "mean: 21.14804824319999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49800175d307eb862ab8a04d0b33580750d10ae4",
          "message": "Avoid error when writing to a relative path. (#109)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-17T17:53:19+02:00",
          "tree_id": "e632c6e7d5efc3eb085393b2c91e0714180da402",
          "url": "https://github.com/mlrun/storey/commit/49800175d307eb862ab8a04d0b33580750d10ae4"
        },
        "date": 1608220779885,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1295.9510743035214,
            "unit": "iter/sec",
            "range": "stddev: 0.0002267994327140828",
            "extra": "mean: 771.6340684677673 usec\nrounds: 555"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 874.9555078749124,
            "unit": "iter/sec",
            "range": "stddev: 0.0005884409818776875",
            "extra": "mean: 1.1429152579755684 msec\nrounds: 721"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 5.990380724507605,
            "unit": "iter/sec",
            "range": "stddev: 0.0056508512226376255",
            "extra": "mean: 166.93429783333139 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.9894794909136392,
            "unit": "iter/sec",
            "range": "stddev: 0.06916011936157587",
            "extra": "mean: 1.0106323669999937 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4586.590093784428,
            "unit": "iter/sec",
            "range": "stddev: 0.00005217343041883602",
            "extra": "mean: 218.02689570083052 usec\nrounds: 2512"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3685.5199532471306,
            "unit": "iter/sec",
            "range": "stddev: 0.00005506348187406242",
            "extra": "mean: 271.3321356784269 usec\nrounds: 2587"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 48.07426267767574,
            "unit": "iter/sec",
            "range": "stddev: 0.0015737851441596945",
            "extra": "mean: 20.80115105882571 msec\nrounds: 51"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.059315034591696,
            "unit": "iter/sec",
            "range": "stddev: 0.0021068898306328744",
            "extra": "mean: 99.41034718181382 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1289.1779649873622,
            "unit": "iter/sec",
            "range": "stddev: 0.00014325237661651954",
            "extra": "mean: 775.6880951729602 usec\nrounds: 725"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 819.3435524343686,
            "unit": "iter/sec",
            "range": "stddev: 0.0002495276050008405",
            "extra": "mean: 1.220489252681466 msec\nrounds: 839"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.124294455916315,
            "unit": "iter/sec",
            "range": "stddev: 0.01234413268060338",
            "extra": "mean: 242.4657140000022 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.8697766145553875,
            "unit": "iter/sec",
            "range": "stddev: 0.03626588900513745",
            "extra": "mean: 1.1497204952000004 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1246.679611057367,
            "unit": "iter/sec",
            "range": "stddev: 0.00009730333027913298",
            "extra": "mean: 802.1307087487003 usec\nrounds: 903"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 415.1482241707834,
            "unit": "iter/sec",
            "range": "stddev: 0.0011691883345207297",
            "extra": "mean: 2.408778218905787 msec\nrounds: 402"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.7583071756158133,
            "unit": "iter/sec",
            "range": "stddev: 0.00511714448437534",
            "extra": "mean: 568.7288398000021 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.3297360119896282,
            "unit": "iter/sec",
            "range": "stddev: 0.010046120160047727",
            "extra": "mean: 3.0327291034000097 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1292.849302345514,
            "unit": "iter/sec",
            "range": "stddev: 0.00008768258935477644",
            "extra": "mean: 773.4853537730803 usec\nrounds: 848"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 855.7542518773618,
            "unit": "iter/sec",
            "range": "stddev: 0.00027833985090141346",
            "extra": "mean: 1.1685597796402303 msec\nrounds: 835"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.67861883398566,
            "unit": "iter/sec",
            "range": "stddev: 0.007570990555508525",
            "extra": "mean: 176.09915883333352 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9512032301571142,
            "unit": "iter/sec",
            "range": "stddev: 0.02501659281254011",
            "extra": "mean: 1.0513000463999957 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.044112390619481016,
            "unit": "iter/sec",
            "range": "stddev: 0.5849636072326623",
            "extra": "mean: 22.669367630199975 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Michaelliv@users.noreply.github.com",
            "name": "Michael",
            "username": "Michaelliv"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de40cf6e559d5f78badde1b271f57e8f4f30c026",
          "message": "Group by key (#108)\n\n* Black\r\n\r\n* Changed _Batching implementation to support grouping by key\r\n\r\n* Added GroupByKey implementation\r\n\r\n* Added GroupByKey tests\r\n\r\n* Black formatter\r\n\r\n* fixed linting\r\n\r\n* Partially rolling back formatter\r\n\r\n* Removed typing documentation\r\n\r\n* Exposed group by key in Batch class, removed GroupByKey class.\r\nUpdated test to show actual grouping.\r\n\r\n* removed redundant init\r\n\r\n* _sleep_and_emit now takes responsibility to continue sleeping as long as self._batch contains event. Also, events with different keys will not cancel _sleep_and_emit when unnecessary.\r\n\r\n* flake\r\n\r\n* missing import in tests\r\n\r\n* Fixed issue with key extraction\r\n\r\n* PR review changes\r\n\r\n* Change key extraction mechanism to use '$key' as indication for using Event.key as grouping key.\r\nAdded relevant test.\r\nFixed issue where size of batch dictionary was changing while being iterated.\r\n\r\n* Extended documentation of Batch\r\n\r\n* Changed weird None-then-init sequence in _Batch __init__ method, now _create_key_extractor returns a key extration lambda.\r\n\r\n* changed double quotes to single quotes\r\n\r\n* Changed type in Batch docs",
          "timestamp": "2020-12-20T15:18:20+02:00",
          "tree_id": "3b378b277b8b514677ed7e1fc90a4c383534a0ab",
          "url": "https://github.com/mlrun/storey/commit/de40cf6e559d5f78badde1b271f57e8f4f30c026"
        },
        "date": 1608470728128,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1176.2564608007017,
            "unit": "iter/sec",
            "range": "stddev: 0.0001517386940448544",
            "extra": "mean: 850.1547352345931 usec\nrounds: 491"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 820.0337489736683,
            "unit": "iter/sec",
            "range": "stddev: 0.00033637593448387394",
            "extra": "mean: 1.2194620053766965 msec\nrounds: 744"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.9910114927531515,
            "unit": "iter/sec",
            "range": "stddev: 0.010791028191282468",
            "extra": "mean: 200.36018780000404 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7261846819646313,
            "unit": "iter/sec",
            "range": "stddev: 0.021697213489701998",
            "extra": "mean: 1.3770601677999934 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3375.873413112178,
            "unit": "iter/sec",
            "range": "stddev: 0.000047074296473612726",
            "extra": "mean: 296.2196378916092 usec\nrounds: 2201"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2741.9138772207366,
            "unit": "iter/sec",
            "range": "stddev: 0.00007531002954288704",
            "extra": "mean: 364.7087562843592 usec\nrounds: 2347"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 45.986844942518196,
            "unit": "iter/sec",
            "range": "stddev: 0.0007708716446215915",
            "extra": "mean: 21.74534915909021 msec\nrounds: 44"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.421123104257545,
            "unit": "iter/sec",
            "range": "stddev: 0.003320399507830505",
            "extra": "mean: 106.1444573999978 msec\nrounds: 10"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1149.3189879898796,
            "unit": "iter/sec",
            "range": "stddev: 0.00028142253177810335",
            "extra": "mean: 870.0804654319393 usec\nrounds: 810"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 717.55764963451,
            "unit": "iter/sec",
            "range": "stddev: 0.0005219487490643425",
            "extra": "mean: 1.3936162488259345 msec\nrounds: 639"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.9245627504217326,
            "unit": "iter/sec",
            "range": "stddev: 0.02711872204551741",
            "extra": "mean: 341.9314562000068 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6481674084666948,
            "unit": "iter/sec",
            "range": "stddev: 0.01409060548697973",
            "extra": "mean: 1.542811296800005 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1163.6900971407595,
            "unit": "iter/sec",
            "range": "stddev: 0.00008884193076639686",
            "extra": "mean: 859.3353182750686 usec\nrounds: 974"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 397.06278689118716,
            "unit": "iter/sec",
            "range": "stddev: 0.00140785726062149",
            "extra": "mean: 2.5184933794212365 msec\nrounds: 311"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.4662329438576016,
            "unit": "iter/sec",
            "range": "stddev: 0.01341572357398636",
            "extra": "mean: 682.0198688000005 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.2778373688460145,
            "unit": "iter/sec",
            "range": "stddev: 0.04690975539037354",
            "extra": "mean: 3.5992278654000245 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1189.6406455097883,
            "unit": "iter/sec",
            "range": "stddev: 0.00010615873975617245",
            "extra": "mean: 840.5899746065561 usec\nrounds: 827"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 754.6515587320253,
            "unit": "iter/sec",
            "range": "stddev: 0.0005933364252317548",
            "extra": "mean: 1.325114867158311 msec\nrounds: 813"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.199972423484831,
            "unit": "iter/sec",
            "range": "stddev: 0.01505743425821863",
            "extra": "mean: 238.0968014000132 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6821216554482837,
            "unit": "iter/sec",
            "range": "stddev: 0.006244358781092634",
            "extra": "mean: 1.4660141515999954 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.039324006753043185,
            "unit": "iter/sec",
            "range": "stddev: 0.10525717122831464",
            "extra": "mean: 25.429758627599984 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dinaleventol@gmail.com",
            "name": "Dina Nimrodi",
            "username": "dinal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b82103ca454d997af8cf9c2ff32ce5f52e4b7950",
          "message": "split windows to explicit and hidden (#104)\n\n* split windows to explicit and hidden\r\n\r\n* fix is_fixed_window\r\n\r\n* fixes\r\n\r\n* code review\r\n\r\n* window start time\r\n\r\n* add test\r\n\r\n* return missing set\r\n\r\n* pass windows to calulate features\r\n\r\n* make windows mandatory in calculate features\r\n\r\nCo-authored-by: Dina Nimrodi <dinan@iguazio.com>",
          "timestamp": "2020-12-22T14:34:44+02:00",
          "tree_id": "cc0a0e0980fe8034fc86db6cb3430e827453fe95",
          "url": "https://github.com/mlrun/storey/commit/b82103ca454d997af8cf9c2ff32ce5f52e4b7950"
        },
        "date": 1608640842356,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1358.3812061634028,
            "unit": "iter/sec",
            "range": "stddev: 0.0008538493787928562",
            "extra": "mean: 736.1703735760517 usec\nrounds: 439"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 1037.4073271353004,
            "unit": "iter/sec",
            "range": "stddev: 0.00008838213083489042",
            "extra": "mean: 963.9415240698202 usec\nrounds: 914"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.696644053461776,
            "unit": "iter/sec",
            "range": "stddev: 0.002338183904097937",
            "extra": "mean: 149.3285281428476 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0768207841173314,
            "unit": "iter/sec",
            "range": "stddev: 0.01596021776968341",
            "extra": "mean: 928.659638399995 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4914.928663990872,
            "unit": "iter/sec",
            "range": "stddev: 0.0000147699308509272",
            "extra": "mean: 203.46175262450507 usec\nrounds: 2381"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3901.753191326032,
            "unit": "iter/sec",
            "range": "stddev: 0.000014342002450269702",
            "extra": "mean: 256.29504250117486 usec\nrounds: 2447"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 54.14716471924644,
            "unit": "iter/sec",
            "range": "stddev: 0.0002718896644819776",
            "extra": "mean: 18.46818767307595 msec\nrounds: 52"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.68247766417258,
            "unit": "iter/sec",
            "range": "stddev: 0.006286956065618977",
            "extra": "mean: 93.61124183332947 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1442.8868685209964,
            "unit": "iter/sec",
            "range": "stddev: 0.00012120518674127044",
            "extra": "mean: 693.0550286489411 usec\nrounds: 733"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 958.3893847875728,
            "unit": "iter/sec",
            "range": "stddev: 0.00005714670914882244",
            "extra": "mean: 1.043417232987874 msec\nrounds: 867"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.952390358715331,
            "unit": "iter/sec",
            "range": "stddev: 0.0013231119068877215",
            "extra": "mean: 201.92269340000166 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9877594275659398,
            "unit": "iter/sec",
            "range": "stddev: 0.014752351210193677",
            "extra": "mean: 1.0123922608000044 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1412.4884729348357,
            "unit": "iter/sec",
            "range": "stddev: 0.000049774570793876806",
            "extra": "mean: 707.9703793420864 usec\nrounds: 1094"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 445.23890630309086,
            "unit": "iter/sec",
            "range": "stddev: 0.0011083148540979087",
            "extra": "mean: 2.2459852134289053 msec\nrounds: 417"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.9679466153011769,
            "unit": "iter/sec",
            "range": "stddev: 0.00814019692236143",
            "extra": "mean: 508.1438654000067 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.36355352483255954,
            "unit": "iter/sec",
            "range": "stddev: 0.01342637018593175",
            "extra": "mean: 2.750626611200005 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1514.7624744535392,
            "unit": "iter/sec",
            "range": "stddev: 0.00005980381777631963",
            "extra": "mean: 660.1695096524996 usec\nrounds: 777"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 987.7894060918421,
            "unit": "iter/sec",
            "range": "stddev: 0.0000698947075071023",
            "extra": "mean: 1.012361535599444 msec\nrounds: 941"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.098019155696854,
            "unit": "iter/sec",
            "range": "stddev: 0.0011572282712265449",
            "extra": "mean: 163.98767771429286 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.0250895791750174,
            "unit": "iter/sec",
            "range": "stddev: 0.01179800433530383",
            "extra": "mean: 975.5245008000088 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.05007217356079286,
            "unit": "iter/sec",
            "range": "stddev: 0.04244765578130538",
            "extra": "mean: 19.971172187799983 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e5d74d450498c150aeb5836505fceadfdeb94b86",
          "message": "Step-specific recovery. (#111)\n\n* Step-specific recovery.\r\n\r\n* Simplify.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-23T17:52:08+02:00",
          "tree_id": "9b541db40d676f1c33a422116d6f99883e781b53",
          "url": "https://github.com/mlrun/storey/commit/e5d74d450498c150aeb5836505fceadfdeb94b86"
        },
        "date": 1608739198695,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1208.1330964593294,
            "unit": "iter/sec",
            "range": "stddev: 0.00026260135328452696",
            "extra": "mean: 827.7233716472927 usec\nrounds: 522"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 831.0374848684291,
            "unit": "iter/sec",
            "range": "stddev: 0.00024260224276989367",
            "extra": "mean: 1.2033151551019643 msec\nrounds: 735"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.953728161498272,
            "unit": "iter/sec",
            "range": "stddev: 0.004850538447435137",
            "extra": "mean: 201.86816219999173 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7551107496750326,
            "unit": "iter/sec",
            "range": "stddev: 0.03348223691471677",
            "extra": "mean: 1.3243090506000044 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3288.919407258647,
            "unit": "iter/sec",
            "range": "stddev: 0.000049280656184908475",
            "extra": "mean: 304.05123269150334 usec\nrounds: 1921"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2640.17838369792,
            "unit": "iter/sec",
            "range": "stddev: 0.00005493464121306651",
            "extra": "mean: 378.76228597833136 usec\nrounds: 2161"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 43.24465308645988,
            "unit": "iter/sec",
            "range": "stddev: 0.0009551006537431868",
            "extra": "mean: 23.124246088890583 msec\nrounds: 45"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 8.56269753126382,
            "unit": "iter/sec",
            "range": "stddev: 0.00403385417780683",
            "extra": "mean: 116.7856270000003 msec\nrounds: 9"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1215.9371371012858,
            "unit": "iter/sec",
            "range": "stddev: 0.00010335226503396444",
            "extra": "mean: 822.4109367889973 usec\nrounds: 791"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 789.6405711205673,
            "unit": "iter/sec",
            "range": "stddev: 0.00014940455907747538",
            "extra": "mean: 1.2663989624810117 msec\nrounds: 693"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.0966029701836173,
            "unit": "iter/sec",
            "range": "stddev: 0.01250813865762888",
            "extra": "mean: 322.9345219999914 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6314617609872826,
            "unit": "iter/sec",
            "range": "stddev: 0.019221649991048508",
            "extra": "mean: 1.5836271676000024 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1129.4483148056463,
            "unit": "iter/sec",
            "range": "stddev: 0.00020429098380702387",
            "extra": "mean: 885.3880136800047 usec\nrounds: 731"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 382.2002845544964,
            "unit": "iter/sec",
            "range": "stddev: 0.0010143638821838966",
            "extra": "mean: 2.616429239883033 msec\nrounds: 346"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.4468699883534655,
            "unit": "iter/sec",
            "range": "stddev: 0.014989985537714646",
            "extra": "mean: 691.1471023999866 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.2743301676565443,
            "unit": "iter/sec",
            "range": "stddev: 0.027519863473083862",
            "extra": "mean: 3.6452425503999963 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1148.1373907147836,
            "unit": "iter/sec",
            "range": "stddev: 0.0006086983171536905",
            "extra": "mean: 870.9759024374606 usec\nrounds: 1025"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 791.8000983858593,
            "unit": "iter/sec",
            "range": "stddev: 0.00014155494885218352",
            "extra": "mean: 1.2629450312504016 msec\nrounds: 704"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.55317191936382,
            "unit": "iter/sec",
            "range": "stddev: 0.00449262952140956",
            "extra": "mean: 219.62711219999846 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6708922113078889,
            "unit": "iter/sec",
            "range": "stddev: 0.010130466592924627",
            "extra": "mean: 1.4905524064000133 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.039126491051487126,
            "unit": "iter/sec",
            "range": "stddev: 0.2639341377362774",
            "extra": "mean: 25.558131412399984 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "katyak@iguazio.com",
            "name": "Katya Katsenelenbogen",
            "username": "katyakats"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8c3d721079323c173669610d44d56c60edb0ce16",
          "message": "IG-17592: adding a test (#113)",
          "timestamp": "2020-12-24T10:40:09+02:00",
          "tree_id": "eef00043a1382556d0e1f1cea27bf2f85d6863e6",
          "url": "https://github.com/mlrun/storey/commit/8c3d721079323c173669610d44d56c60edb0ce16"
        },
        "date": 1608799607764,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1405.2619944906073,
            "unit": "iter/sec",
            "range": "stddev: 0.0000418311039334661",
            "extra": "mean: 711.6110760274915 usec\nrounds: 342"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 977.0523824168553,
            "unit": "iter/sec",
            "range": "stddev: 0.00015746929039236023",
            "extra": "mean: 1.0234865786073628 msec\nrounds: 935"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.392132338513314,
            "unit": "iter/sec",
            "range": "stddev: 0.002596065946648308",
            "extra": "mean: 156.44231800003385 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0439452502963023,
            "unit": "iter/sec",
            "range": "stddev: 0.0109468712224953",
            "extra": "mean: 957.9046408000522 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4772.216859098523,
            "unit": "iter/sec",
            "range": "stddev: 0.00001163391782679198",
            "extra": "mean: 209.5462191944272 usec\nrounds: 2386"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3752.6595763699106,
            "unit": "iter/sec",
            "range": "stddev: 0.000010450607098834227",
            "extra": "mean: 266.4776752724631 usec\nrounds: 2479"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 49.687498841794984,
            "unit": "iter/sec",
            "range": "stddev: 0.00010635399665059749",
            "extra": "mean: 20.1257866326498 msec\nrounds: 49"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.014050276967764,
            "unit": "iter/sec",
            "range": "stddev: 0.00027970023035322485",
            "extra": "mean: 99.85969436362748 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1389.0373011034171,
            "unit": "iter/sec",
            "range": "stddev: 0.00008225169389248046",
            "extra": "mean: 719.9230713283398 usec\nrounds: 715"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 902.3818450431263,
            "unit": "iter/sec",
            "range": "stddev: 0.00013192935597459876",
            "extra": "mean: 1.1081783232819897 msec\nrounds: 829"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.687403514193581,
            "unit": "iter/sec",
            "range": "stddev: 0.002781435988193528",
            "extra": "mean: 213.33772459997817 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9393557298870323,
            "unit": "iter/sec",
            "range": "stddev: 0.012446411419036468",
            "extra": "mean: 1.0645594295999672 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1351.0478136668207,
            "unit": "iter/sec",
            "range": "stddev: 0.00004700740636448115",
            "extra": "mean: 740.1662545798014 usec\nrounds: 1037"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 424.0929981544511,
            "unit": "iter/sec",
            "range": "stddev: 0.0004942782916924344",
            "extra": "mean: 2.3579733793100925 msec\nrounds: 348"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.8378021957602475,
            "unit": "iter/sec",
            "range": "stddev: 0.0077262597809042415",
            "extra": "mean: 544.1281996000271 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.3390389940973558,
            "unit": "iter/sec",
            "range": "stddev: 0.02217698578363023",
            "extra": "mean: 2.949513234199981 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1399.8419512268301,
            "unit": "iter/sec",
            "range": "stddev: 0.0001020522753130293",
            "extra": "mean: 714.3663605191957 usec\nrounds: 1079"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 929.863810722215,
            "unit": "iter/sec",
            "range": "stddev: 0.00006700865745439672",
            "extra": "mean: 1.0754263027220199 msec\nrounds: 882"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.794343548887613,
            "unit": "iter/sec",
            "range": "stddev: 0.003437592641110819",
            "extra": "mean: 172.58210383331138 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9697969504257614,
            "unit": "iter/sec",
            "range": "stddev: 0.02567273327025639",
            "extra": "mean: 1.0311436837999737 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.04717241609835239,
            "unit": "iter/sec",
            "range": "stddev: 0.05506828260018129",
            "extra": "mean: 21.19882937340001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Michaelliv@users.noreply.github.com",
            "name": "Michael",
            "username": "Michaelliv"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c508112a4b418d0f1205659072dafd3b70da1ad2",
          "message": "Fixed issue where inference caused column duplication, fixed issue with column ordering (#112)",
          "timestamp": "2020-12-24T10:51:20+02:00",
          "tree_id": "91cc827814ed198019660622b327579855384a63",
          "url": "https://github.com/mlrun/storey/commit/c508112a4b418d0f1205659072dafd3b70da1ad2"
        },
        "date": 1608800305945,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1166.1411975371298,
            "unit": "iter/sec",
            "range": "stddev: 0.0004486110169013395",
            "extra": "mean: 857.5290900552891 usec\nrounds: 533"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 758.4268153372475,
            "unit": "iter/sec",
            "range": "stddev: 0.0005721118232909272",
            "extra": "mean: 1.3185187809522967 msec\nrounds: 735"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.31777164793142,
            "unit": "iter/sec",
            "range": "stddev: 0.01290047039989649",
            "extra": "mean: 231.60094639999897 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7236286977697112,
            "unit": "iter/sec",
            "range": "stddev: 0.033777083294754644",
            "extra": "mean: 1.3819241871999963 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3540.2992596363374,
            "unit": "iter/sec",
            "range": "stddev: 0.000055926975439079234",
            "extra": "mean: 282.4619973235598 usec\nrounds: 2242"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2869.59658947848,
            "unit": "iter/sec",
            "range": "stddev: 0.0000826101999793506",
            "extra": "mean: 348.4810386472266 usec\nrounds: 2484"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 45.11708633462498,
            "unit": "iter/sec",
            "range": "stddev: 0.001227680160445989",
            "extra": "mean: 22.164551863637364 msec\nrounds: 44"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.088370981545257,
            "unit": "iter/sec",
            "range": "stddev: 0.0029181488186267365",
            "extra": "mean: 110.0307196999978 msec\nrounds: 10"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1225.0882567791016,
            "unit": "iter/sec",
            "range": "stddev: 0.00013814704077840512",
            "extra": "mean: 816.2677215020536 usec\nrounds: 772"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 729.1177412823428,
            "unit": "iter/sec",
            "range": "stddev: 0.0006788468002692254",
            "extra": "mean: 1.371520597264909 msec\nrounds: 658"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.1458326356663138,
            "unit": "iter/sec",
            "range": "stddev: 0.012641946386170038",
            "extra": "mean: 317.88086519999865 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6402585718560302,
            "unit": "iter/sec",
            "range": "stddev: 0.01956686319665141",
            "extra": "mean: 1.5618689759999995 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1198.6786859006982,
            "unit": "iter/sec",
            "range": "stddev: 0.00019347121750998893",
            "extra": "mean: 834.2519240246529 usec\nrounds: 974"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 381.81263825708106,
            "unit": "iter/sec",
            "range": "stddev: 0.0011710023735254866",
            "extra": "mean: 2.6190856451605526 msec\nrounds: 341"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.4646151762055954,
            "unit": "iter/sec",
            "range": "stddev: 0.008298805896892874",
            "extra": "mean: 682.7732064000031 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.2742114279567076,
            "unit": "iter/sec",
            "range": "stddev: 0.12256419471880756",
            "extra": "mean: 3.6468210221999926 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1184.476585431824,
            "unit": "iter/sec",
            "range": "stddev: 0.0001937520800502483",
            "extra": "mean: 844.2547639178789 usec\nrounds: 970"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 770.1614110697365,
            "unit": "iter/sec",
            "range": "stddev: 0.0006119894108727431",
            "extra": "mean: 1.298429115801872 msec\nrounds: 829"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.468579125109407,
            "unit": "iter/sec",
            "range": "stddev: 0.003795766354142",
            "extra": "mean: 223.78478079998558 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6722761836929071,
            "unit": "iter/sec",
            "range": "stddev: 0.03101130682029245",
            "extra": "mean: 1.487483900599989 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.040356454452269014,
            "unit": "iter/sec",
            "range": "stddev: 0.07559552655511625",
            "extra": "mean: 24.7791837408 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f44fdf617de54c85ded39ce9ba4bf04e018c795",
          "message": "Store recovered exception in event. (#115)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-24T12:35:22+02:00",
          "tree_id": "d516b670d825c7808808e03821ae7b46d2848963",
          "url": "https://github.com/mlrun/storey/commit/0f44fdf617de54c85ded39ce9ba4bf04e018c795"
        },
        "date": 1608806490717,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1347.8948363806667,
            "unit": "iter/sec",
            "range": "stddev: 0.00005708098191498504",
            "extra": "mean: 741.8976414251833 usec\nrounds: 449"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 980.0146059399033,
            "unit": "iter/sec",
            "range": "stddev: 0.00005723415385377316",
            "extra": "mean: 1.0203929553079765 msec\nrounds: 895"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.259004449690632,
            "unit": "iter/sec",
            "range": "stddev: 0.0027287072656416015",
            "extra": "mean: 159.76981771428964 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.9679421145309669,
            "unit": "iter/sec",
            "range": "stddev: 0.03308274463570236",
            "extra": "mean: 1.033119630799996 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4727.533065064749,
            "unit": "iter/sec",
            "range": "stddev: 0.00001576002974983795",
            "extra": "mean: 211.52681244891596 usec\nrounds: 2442"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3700.5640355285527,
            "unit": "iter/sec",
            "range": "stddev: 0.000017422800433288373",
            "extra": "mean: 270.22907600007784 usec\nrounds: 2500"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 47.13889164750982,
            "unit": "iter/sec",
            "range": "stddev: 0.0014725734239230375",
            "extra": "mean: 21.21390565305806 msec\nrounds: 49"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.0034778909698,
            "unit": "iter/sec",
            "range": "stddev: 0.00048371135173174297",
            "extra": "mean: 99.9652331818223 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1390.8046594666944,
            "unit": "iter/sec",
            "range": "stddev: 0.00009264778414590792",
            "extra": "mean: 719.0082325316994 usec\nrounds: 873"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 682.60730148216,
            "unit": "iter/sec",
            "range": "stddev: 0.0008186918405998774",
            "extra": "mean: 1.4649711449448 msec\nrounds: 821"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.4169332049552,
            "unit": "iter/sec",
            "range": "stddev: 0.011122853469689376",
            "extra": "mean: 226.4014313999894 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9104688711159982,
            "unit": "iter/sec",
            "range": "stddev: 0.02948260021910276",
            "extra": "mean: 1.0983351894000066 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1329.7645770026036,
            "unit": "iter/sec",
            "range": "stddev: 0.00004557250138553293",
            "extra": "mean: 752.0128128650265 usec\nrounds: 1026"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 415.91262552279915,
            "unit": "iter/sec",
            "range": "stddev: 0.00025841193906764483",
            "extra": "mean: 2.4043511512616553 msec\nrounds: 357"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.8115312200274418,
            "unit": "iter/sec",
            "range": "stddev: 0.01146016851481974",
            "extra": "mean: 552.019191799991 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.335703848474939,
            "unit": "iter/sec",
            "range": "stddev: 0.17927525180826515",
            "extra": "mean: 2.9788160145999996 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1409.7274781655371,
            "unit": "iter/sec",
            "range": "stddev: 0.00006369544259352697",
            "extra": "mean: 709.3569611775525 usec\nrounds: 747"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 935.6718204502525,
            "unit": "iter/sec",
            "range": "stddev: 0.00013744100419354604",
            "extra": "mean: 1.068750792899579 msec\nrounds: 845"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.746467299368717,
            "unit": "iter/sec",
            "range": "stddev: 0.004833544220065943",
            "extra": "mean: 174.01995833333217 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9485974015390436,
            "unit": "iter/sec",
            "range": "stddev: 0.02342645627195651",
            "extra": "mean: 1.054188002600006 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.04780219509643596,
            "unit": "iter/sec",
            "range": "stddev: 0.12952793855462352",
            "extra": "mean: 20.919541414 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a7fab2fb599dc59f0fe8ccd99be95b6d1eb25b5e",
          "message": "Allow for setting the recovery step after init. (#118)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-24T18:14:41+02:00",
          "tree_id": "134ef4cb03d3816527d367a5abba083905bafdeb",
          "url": "https://github.com/mlrun/storey/commit/a7fab2fb599dc59f0fe8ccd99be95b6d1eb25b5e"
        },
        "date": 1608826860318,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1425.119935699412,
            "unit": "iter/sec",
            "range": "stddev: 0.00003811529850553463",
            "extra": "mean: 701.6953274948229 usec\nrounds: 571"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 1040.697280068543,
            "unit": "iter/sec",
            "range": "stddev: 0.00007407875880119435",
            "extra": "mean: 960.8942188588571 usec\nrounds: 859"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.562324180980075,
            "unit": "iter/sec",
            "range": "stddev: 0.00497343960542957",
            "extra": "mean: 152.38503500000076 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0943033317439834,
            "unit": "iter/sec",
            "range": "stddev: 0.009927948445754838",
            "extra": "mean: 913.823407999962 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5180.433930856688,
            "unit": "iter/sec",
            "range": "stddev: 0.000018557913817911988",
            "extra": "mean: 193.03402250603168 usec\nrounds: 2577"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 4038.16962405478,
            "unit": "iter/sec",
            "range": "stddev: 0.000021380285848641085",
            "extra": "mean: 247.63694770104445 usec\nrounds: 2371"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 53.52506468250055,
            "unit": "iter/sec",
            "range": "stddev: 0.0008072218879182335",
            "extra": "mean: 18.68283589999919 msec\nrounds: 50"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.56602313697811,
            "unit": "iter/sec",
            "range": "stddev: 0.0028948818546432093",
            "extra": "mean: 94.64298790907253 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1426.8970286307301,
            "unit": "iter/sec",
            "range": "stddev: 0.00010507818783860456",
            "extra": "mean: 700.8214187393842 usec\nrounds: 683"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 939.3207608334845,
            "unit": "iter/sec",
            "range": "stddev: 0.00006953319079211868",
            "extra": "mean: 1.0645990610413776 msec\nrounds: 901"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.797585704420992,
            "unit": "iter/sec",
            "range": "stddev: 0.005472001598328736",
            "extra": "mean: 208.43817320001108 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9508662277325636,
            "unit": "iter/sec",
            "range": "stddev: 0.01502262374283591",
            "extra": "mean: 1.0516726442000164 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1394.4966012235068,
            "unit": "iter/sec",
            "range": "stddev: 0.000048231885987957336",
            "extra": "mean: 717.1046520462062 usec\nrounds: 1026"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 450.4540185449431,
            "unit": "iter/sec",
            "range": "stddev: 0.0010598987751789968",
            "extra": "mean: 2.219982415142395 msec\nrounds: 383"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.9546142427338542,
            "unit": "iter/sec",
            "range": "stddev: 0.015710857539743175",
            "extra": "mean: 511.6099013999473 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.36312408600191914,
            "unit": "iter/sec",
            "range": "stddev: 0.04397757501149922",
            "extra": "mean: 2.753879565000034 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1534.8027308597989,
            "unit": "iter/sec",
            "range": "stddev: 0.00006041230300328486",
            "extra": "mean: 651.5495313458288 usec\nrounds: 973"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 1012.7118655788054,
            "unit": "iter/sec",
            "range": "stddev: 0.00009050535664720123",
            "extra": "mean: 987.4476976019827 usec\nrounds: 668"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.190374292703589,
            "unit": "iter/sec",
            "range": "stddev: 0.0019041868574100548",
            "extra": "mean: 161.54112057144434 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9719701857631993,
            "unit": "iter/sec",
            "range": "stddev: 0.04331473707406939",
            "extra": "mean: 1.028838141999995 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.05206455087902095,
            "unit": "iter/sec",
            "range": "stddev: 0.19714420593980117",
            "extra": "mean: 19.206926461800002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dinaleventol@gmail.com",
            "name": "Dina Nimrodi",
            "username": "dinal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "44b59b078e2e80da3b9a448bf6196c32ec304693",
          "message": "don't update cache on out of order events (#114)\n\nCo-authored-by: Dina Nimrodi <dinan@iguazio.com>",
          "timestamp": "2020-12-27T10:54:17+02:00",
          "tree_id": "3140c902cd56b47c3fef9d496ed738ab8b8c0144",
          "url": "https://github.com/mlrun/storey/commit/44b59b078e2e80da3b9a448bf6196c32ec304693"
        },
        "date": 1609059678968,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1177.654545036895,
            "unit": "iter/sec",
            "range": "stddev: 0.00023938339190945215",
            "extra": "mean: 849.1454511973806 usec\nrounds: 543"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 792.9576384489449,
            "unit": "iter/sec",
            "range": "stddev: 0.000707448759331021",
            "extra": "mean: 1.2611014151475202 msec\nrounds: 713"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.160901917365999,
            "unit": "iter/sec",
            "range": "stddev: 0.04639125909948836",
            "extra": "mean: 240.33250959999464 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7134466825393512,
            "unit": "iter/sec",
            "range": "stddev: 0.015114823779298802",
            "extra": "mean: 1.4016464362000078 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3324.4602065438585,
            "unit": "iter/sec",
            "range": "stddev: 0.00019479611324837933",
            "extra": "mean: 300.80071285906894 usec\nrounds: 2403"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2737.6515827353683,
            "unit": "iter/sec",
            "range": "stddev: 0.00011002036287330543",
            "extra": "mean: 365.2765773067565 usec\nrounds: 2406"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 44.654390634364475,
            "unit": "iter/sec",
            "range": "stddev: 0.0017024534575778708",
            "extra": "mean: 22.39421444999934 msec\nrounds: 40"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.22384229903687,
            "unit": "iter/sec",
            "range": "stddev: 0.006687379105111853",
            "extra": "mean: 108.4146896249969 msec\nrounds: 8"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1144.4291589596605,
            "unit": "iter/sec",
            "range": "stddev: 0.00048531423249825",
            "extra": "mean: 873.798078431562 usec\nrounds: 612"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 756.8969098926251,
            "unit": "iter/sec",
            "range": "stddev: 0.0003229208069958644",
            "extra": "mean: 1.3211838850575597 msec\nrounds: 609"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.192712093673138,
            "unit": "iter/sec",
            "range": "stddev: 0.0068675683456584525",
            "extra": "mean: 313.2133341999918 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6403490861096227,
            "unit": "iter/sec",
            "range": "stddev: 0.02014767885112522",
            "extra": "mean: 1.5616482036000092 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1135.779464291889,
            "unit": "iter/sec",
            "range": "stddev: 0.0002451022746323469",
            "extra": "mean: 880.4526155290702 usec\nrounds: 1069"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 373.51163597371533,
            "unit": "iter/sec",
            "range": "stddev: 0.0012024476673539418",
            "extra": "mean: 2.6772927632979333 msec\nrounds: 376"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.4949662144946037,
            "unit": "iter/sec",
            "range": "stddev: 0.009397916892721733",
            "extra": "mean: 668.9114377999942 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.2747588735839385,
            "unit": "iter/sec",
            "range": "stddev: 0.07837231921568154",
            "extra": "mean: 3.639554882999988 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1175.914638147083,
            "unit": "iter/sec",
            "range": "stddev: 0.00015243478706820955",
            "extra": "mean: 850.4018638425354 usec\nrounds: 661"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 725.4503538067402,
            "unit": "iter/sec",
            "range": "stddev: 0.000541167127372614",
            "extra": "mean: 1.37845407994163 msec\nrounds: 688"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.321719055651509,
            "unit": "iter/sec",
            "range": "stddev: 0.004283631176341279",
            "extra": "mean: 231.3894047999952 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6654249910860649,
            "unit": "iter/sec",
            "range": "stddev: 0.029365204205628215",
            "extra": "mean: 1.5027989831999888 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.04055034716120587,
            "unit": "iter/sec",
            "range": "stddev: 0.12322849208998803",
            "extra": "mean: 24.660701325800005 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd41f97bf38e2d20bb418eb31a3f030eb41a6840",
          "message": "Basic Recover step. (#106)\n\n* Create Driver base class.\r\n\r\n* Basic Recover step.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-27T11:17:18+02:00",
          "tree_id": "9710e6caeaf13eca5dbbed55c070f9f0653eb24d",
          "url": "https://github.com/mlrun/storey/commit/cd41f97bf38e2d20bb418eb31a3f030eb41a6840"
        },
        "date": 1609061025093,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1344.8715078441326,
            "unit": "iter/sec",
            "range": "stddev: 0.00004697003643877228",
            "extra": "mean: 743.5654589805599 usec\nrounds: 451"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 945.5495606723852,
            "unit": "iter/sec",
            "range": "stddev: 0.000320710454558144",
            "extra": "mean: 1.0575860236124428 msec\nrounds: 847"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.060700890897339,
            "unit": "iter/sec",
            "range": "stddev: 0.0029204008904626364",
            "extra": "mean: 164.99741828571604 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0044517579139496,
            "unit": "iter/sec",
            "range": "stddev: 0.010136218405699634",
            "extra": "mean: 995.5679723999936 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4620.644803541449,
            "unit": "iter/sec",
            "range": "stddev: 0.00001259236204306089",
            "extra": "mean: 216.42001117107284 usec\nrounds: 2417"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3640.1826925360465,
            "unit": "iter/sec",
            "range": "stddev: 0.000010460879494674034",
            "extra": "mean: 274.71148688510436 usec\nrounds: 2440"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 46.34825181000707,
            "unit": "iter/sec",
            "range": "stddev: 0.00007787683656692515",
            "extra": "mean: 21.575786808513232 msec\nrounds: 47"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.353864530937521,
            "unit": "iter/sec",
            "range": "stddev: 0.0002929631859270727",
            "extra": "mean: 106.90768470000194 msec\nrounds: 10"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1350.9601276519265,
            "unit": "iter/sec",
            "range": "stddev: 0.00010410170505843226",
            "extra": "mean: 740.2142961377236 usec\nrounds: 699"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 889.7512747933438,
            "unit": "iter/sec",
            "range": "stddev: 0.00005085887239563325",
            "extra": "mean: 1.1239096007277571 msec\nrounds: 824"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.480008540258273,
            "unit": "iter/sec",
            "range": "stddev: 0.0009635462306614341",
            "extra": "mean: 223.21386019999636 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9069366445053842,
            "unit": "iter/sec",
            "range": "stddev: 0.006775809614246176",
            "extra": "mean: 1.1026128517999951 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1320.7671846315852,
            "unit": "iter/sec",
            "range": "stddev: 0.00009039273456232016",
            "extra": "mean: 757.1357099388716 usec\nrounds: 986"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 400.0578334010879,
            "unit": "iter/sec",
            "range": "stddev: 0.0011656813102008938",
            "extra": "mean: 2.4996385934966185 msec\nrounds: 369"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.7322472626178425,
            "unit": "iter/sec",
            "range": "stddev: 0.013045670933220734",
            "extra": "mean: 577.2847915999932 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.3269647759004147,
            "unit": "iter/sec",
            "range": "stddev: 0.027619569314644387",
            "extra": "mean: 3.058433426800002 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1378.4028724020618,
            "unit": "iter/sec",
            "range": "stddev: 0.000057521307360230346",
            "extra": "mean: 725.4773042204698 usec\nrounds: 1019"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 917.3812903361204,
            "unit": "iter/sec",
            "range": "stddev: 0.0000600024502270008",
            "extra": "mean: 1.0900592921767664 msec\nrounds: 818"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.649340838206325,
            "unit": "iter/sec",
            "range": "stddev: 0.0004065498389259808",
            "extra": "mean: 177.0118016666705 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9489029867030205,
            "unit": "iter/sec",
            "range": "stddev: 0.024532646399060505",
            "extra": "mean: 1.0538485114000082 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.04501768585104819,
            "unit": "iter/sec",
            "range": "stddev: 0.0626837656914208",
            "extra": "mean: 22.213491899799997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "525fac4393df3f344196b841b7c829a44eaa4ef6",
          "message": "Handle redundant completions gracefully. (#117)\n\n* Handle redundant completions gracefully.\r\n\r\n* Fix async double completion.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-27T11:17:53+02:00",
          "tree_id": "6fd45714e84de0d4124da7a21c626b9ef1a54ada",
          "url": "https://github.com/mlrun/storey/commit/525fac4393df3f344196b841b7c829a44eaa4ef6"
        },
        "date": 1609061055574,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1285.2199744956863,
            "unit": "iter/sec",
            "range": "stddev: 0.00008913666482432787",
            "extra": "mean: 778.0769205617077 usec\nrounds: 428"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 903.3333068512705,
            "unit": "iter/sec",
            "range": "stddev: 0.00011462843836152902",
            "extra": "mean: 1.1070111025637683 msec\nrounds: 780"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 5.903056604283702,
            "unit": "iter/sec",
            "range": "stddev: 0.005159836575075496",
            "extra": "mean: 169.40376266667081 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.971482529056017,
            "unit": "iter/sec",
            "range": "stddev: 0.025322705805335178",
            "extra": "mean: 1.0293545895999727 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4780.992336495932,
            "unit": "iter/sec",
            "range": "stddev: 0.000012251412743871052",
            "extra": "mean: 209.16159860087046 usec\nrounds: 2287"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3766.700211405283,
            "unit": "iter/sec",
            "range": "stddev: 0.000011668705373362722",
            "extra": "mean: 265.48436134420143 usec\nrounds: 2261"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 49.29013871226691,
            "unit": "iter/sec",
            "range": "stddev: 0.00009498998353035585",
            "extra": "mean: 20.28803379591887 msec\nrounds: 49"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.05264079976711,
            "unit": "iter/sec",
            "range": "stddev: 0.0004037396645210687",
            "extra": "mean: 99.4763485454655 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1345.1946092206529,
            "unit": "iter/sec",
            "range": "stddev: 0.00040610167052264454",
            "extra": "mean: 743.386862499662 usec\nrounds: 640"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 874.5155279860512,
            "unit": "iter/sec",
            "range": "stddev: 0.00014166218592738536",
            "extra": "mean: 1.1434902731835201 msec\nrounds: 798"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.358032910780419,
            "unit": "iter/sec",
            "range": "stddev: 0.004815915398064109",
            "extra": "mean: 229.46132359999183 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.8479337738379576,
            "unit": "iter/sec",
            "range": "stddev: 0.064064960163994",
            "extra": "mean: 1.1793373856000016 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1309.6547156720771,
            "unit": "iter/sec",
            "range": "stddev: 0.00009253993247947023",
            "extra": "mean: 763.5600345903606 usec\nrounds: 954"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 387.53467213155983,
            "unit": "iter/sec",
            "range": "stddev: 0.001568959544577465",
            "extra": "mean: 2.5804142749336276 msec\nrounds: 371"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.7787518944139071,
            "unit": "iter/sec",
            "range": "stddev: 0.013311030510812654",
            "extra": "mean: 562.1919521999985 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.32981269301482685,
            "unit": "iter/sec",
            "range": "stddev: 0.0283258108216306",
            "extra": "mean: 3.032023997800002 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1252.5294829820907,
            "unit": "iter/sec",
            "range": "stddev: 0.0007513736267857168",
            "extra": "mean: 798.3844001972275 usec\nrounds: 1017"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 890.1750915486398,
            "unit": "iter/sec",
            "range": "stddev: 0.0002757579553665278",
            "extra": "mean: 1.1233745018188475 msec\nrounds: 825"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.333679003143621,
            "unit": "iter/sec",
            "range": "stddev: 0.012180583037369724",
            "extra": "mean: 187.4878483333191 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.924629262490919,
            "unit": "iter/sec",
            "range": "stddev: 0.024721798921994005",
            "extra": "mean: 1.0815145492000056 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.04591257949341706,
            "unit": "iter/sec",
            "range": "stddev: 0.03147933547489095",
            "extra": "mean: 21.780523138400007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Michaelliv@users.noreply.github.com",
            "name": "Michael",
            "username": "Michaelliv"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9f4e1a7563aa562bb7fd919aafc4b1032501f0bd",
          "message": "Common steps (#110)\n\n* Black\r\n\r\n* Changed _Batching implementation to support grouping by key\r\n\r\n* Added GroupByKey implementation\r\n\r\n* Added GroupByKey tests\r\n\r\n* Black formatter\r\n\r\n* fixed linting\r\n\r\n* Partially rolling back formatter\r\n\r\n* Removed typing documentation\r\n\r\n* Added common steps\r\n\r\n* Exposed group by key in Batch class, removed GroupByKey class.\r\nUpdated test to show actual grouping.\r\n\r\n* removed redundant init\r\n\r\n* _sleep_and_emit now takes responsibility to continue sleeping as long as self._batch contains event. Also, events with different keys will not cancel _sleep_and_emit when unnecessary.\r\n\r\n* flake\r\n\r\n* missing import in tests\r\n\r\n* Fixed issue with key extraction\r\n\r\n* PR review changes\r\n\r\n* Change key extraction mechanism to use '$key' as indication for using Event.key as grouping key.\r\nAdded relevant test.\r\nFixed issue where size of batch dictionary was changing while being iterated.\r\n\r\n* Added flatten step\r\n\r\n* Added flatten, ForEach, Sample and Assertion steps.\r\nAdded relevant tests.\r\n\r\n* Fixed linting issues\r\n\r\n* Added docs, removed unnecessary code\r\n\r\n* minor additions to documentation\r\n\r\n* Moved variable responsible to type casting to class __init__\r\n\r\n* Docs update\r\n\r\n* Added assertion step, fixed flatten after assertion step proved it self useful.\r\nAdded tests to missing steps.\r\n\r\n* Linting\r\n\r\n* Linting\r\n\r\n* Docs\r\n\r\n* Cleaned up assertion code, normalized build_flow style in all tests\r\n\r\n* Removed casting feature from flatten\r\n\r\n* Made error more informative\r\n\r\n* Changed sample condition function to PR suggestions, fixed bug in Sample where time delta always fired\r\n\r\n* Removed unnecessary complexity from sample step. Added partition step and tests\r\n\r\n* Fixed missing event parts in flatten\r\n\r\n* Updated sample docs and class members\r\n\r\n* Fixed linting, fixed broken Sample class, fixed broken assertion message\r\n\r\n* Fixed default argument of path in copy function, added test\r\n\r\n* Added information to Partition flow docstring\r\n\r\n* Fixed terminology, implementation, documentation and tests for SampleWindow\r\n\r\n* Removed unnecessary return in test code. Removed out of place type hint.\r\n\r\n* Fixed Partition docstring\r\n\r\n* Fixed documentation and insured correct event form is sent into _do\r\n\r\n* Fixed naming for internal parts of assertion module.\r\nFixed exposed API to match internal API\r\n\r\n* Fixed terminology and implementation of Assertion operators\r\n\r\n* Linter\r\n\r\n* Fixed naming, behavior with full_body parameter changes.\r\n\r\n* Linter\r\n\r\n* Naming to Assertion operators\r\n\r\n* removed redundant double _do_downstream call.\r\n\r\n* typo in docs\r\n\r\n* aligned terminology of API with operations",
          "timestamp": "2020-12-27T16:03:53+02:00",
          "tree_id": "7d97c432074433cb974e609f95f88999909b571f",
          "url": "https://github.com/mlrun/storey/commit/9f4e1a7563aa562bb7fd919aafc4b1032501f0bd"
        },
        "date": 1609078280560,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1167.1038263095536,
            "unit": "iter/sec",
            "range": "stddev: 0.00046055782401026345",
            "extra": "mean: 856.8217989328806 usec\nrounds: 562"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 760.0956067659298,
            "unit": "iter/sec",
            "range": "stddev: 0.0005876319365662812",
            "extra": "mean: 1.315623970325023 msec\nrounds: 674"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.226492164291182,
            "unit": "iter/sec",
            "range": "stddev: 0.020300192088495858",
            "extra": "mean: 236.6028283333416 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.6970042531648415,
            "unit": "iter/sec",
            "range": "stddev: 0.02052404102263651",
            "extra": "mean: 1.4347114747999967 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3377.8751152801965,
            "unit": "iter/sec",
            "range": "stddev: 0.0001242321264002793",
            "extra": "mean: 296.0441004690754 usec\nrounds: 2130"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2612.360120175933,
            "unit": "iter/sec",
            "range": "stddev: 0.0002449779030955868",
            "extra": "mean: 382.7956154577393 usec\nrounds: 2096"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 43.10007246944103,
            "unit": "iter/sec",
            "range": "stddev: 0.000814502284305182",
            "extra": "mean: 23.201817136363832 msec\nrounds: 44"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 8.683261193749104,
            "unit": "iter/sec",
            "range": "stddev: 0.0012051973297504005",
            "extra": "mean: 115.16410455554175 msec\nrounds: 9"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1170.326286083073,
            "unit": "iter/sec",
            "range": "stddev: 0.0002896431654798151",
            "extra": "mean: 854.462564749244 usec\nrounds: 834"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 714.2344035620168,
            "unit": "iter/sec",
            "range": "stddev: 0.0004044163227759923",
            "extra": "mean: 1.4001005762433427 msec\nrounds: 623"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.9944238886395818,
            "unit": "iter/sec",
            "range": "stddev: 0.0076313889480312536",
            "extra": "mean: 333.95405499998105 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6227532160787974,
            "unit": "iter/sec",
            "range": "stddev: 0.04254361105010685",
            "extra": "mean: 1.6057725182000013 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1145.126067719566,
            "unit": "iter/sec",
            "range": "stddev: 0.0003481678365235779",
            "extra": "mean: 873.2662963401281 usec\nrounds: 847"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 349.02860804081007,
            "unit": "iter/sec",
            "range": "stddev: 0.0018895823101270515",
            "extra": "mean: 2.8650946568914923 msec\nrounds: 341"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.4338928014055958,
            "unit": "iter/sec",
            "range": "stddev: 0.01471184877856831",
            "extra": "mean: 697.4022040000023 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.25955867886625167,
            "unit": "iter/sec",
            "range": "stddev: 0.07845973571553015",
            "extra": "mean: 3.852693365400012 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1098.0576991944347,
            "unit": "iter/sec",
            "range": "stddev: 0.0003792396249437327",
            "extra": "mean: 910.6989557412397 usec\nrounds: 836"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 745.8228895300164,
            "unit": "iter/sec",
            "range": "stddev: 0.0003693696057438351",
            "extra": "mean: 1.3408008979587023 msec\nrounds: 735"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.282203654408451,
            "unit": "iter/sec",
            "range": "stddev: 0.006338327845302909",
            "extra": "mean: 233.52462439999044 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6501352023702373,
            "unit": "iter/sec",
            "range": "stddev: 0.024607348707059544",
            "extra": "mean: 1.5381415994000007 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.03902133393648638,
            "unit": "iter/sec",
            "range": "stddev: 0.14907996301645166",
            "extra": "mean: 25.62700705279999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "katyak@iguazio.com",
            "name": "Katya Katsenelenbogen",
            "username": "katyakats"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb6dae270e609fbfd8c8170e95e04a1a85d9bce6",
          "message": "surrounding saved engine words with backtick in update expressions (#120)\n\n* surrounding saved engine words with backtick in update expressions\r\n\r\n* move dictionary from method to class\r\n\r\n* bug fix",
          "timestamp": "2020-12-28T10:08:01+02:00",
          "tree_id": "747b02ca94be212eb539c3acb937719b8665cf6b",
          "url": "https://github.com/mlrun/storey/commit/cb6dae270e609fbfd8c8170e95e04a1a85d9bce6"
        },
        "date": 1609143274083,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1224.0946487786648,
            "unit": "iter/sec",
            "range": "stddev: 0.0005626529165956145",
            "extra": "mean: 816.9302929293465 usec\nrounds: 495"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 887.412937987903,
            "unit": "iter/sec",
            "range": "stddev: 0.0003791462693774949",
            "extra": "mean: 1.1268711072292612 msec\nrounds: 830"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 5.510766762971327,
            "unit": "iter/sec",
            "range": "stddev: 0.013244243328774219",
            "extra": "mean: 181.46295116667469 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.9228082440777622,
            "unit": "iter/sec",
            "range": "stddev: 0.02926084639887914",
            "extra": "mean: 1.0836487497999996 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4518.770180098201,
            "unit": "iter/sec",
            "range": "stddev: 0.000013663769175375817",
            "extra": "mean: 221.29915002189117 usec\nrounds: 2333"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3585.182375674044,
            "unit": "iter/sec",
            "range": "stddev: 0.0000158011120525229",
            "extra": "mean: 278.925838413448 usec\nrounds: 2395"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 47.32879650969805,
            "unit": "iter/sec",
            "range": "stddev: 0.00011040958532064211",
            "extra": "mean: 21.128785723403972 msec\nrounds: 47"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.535941493688439,
            "unit": "iter/sec",
            "range": "stddev: 0.00024007437626365625",
            "extra": "mean: 104.8664151999958 msec\nrounds: 10"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1293.1018137858002,
            "unit": "iter/sec",
            "range": "stddev: 0.0003240626810382918",
            "extra": "mean: 773.3343108322698 usec\nrounds: 637"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 827.5217166356634,
            "unit": "iter/sec",
            "range": "stddev: 0.0006946275913734376",
            "extra": "mean: 1.2084275009307996 msec\nrounds: 537"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.1697763990348315,
            "unit": "iter/sec",
            "range": "stddev: 0.002886194182708009",
            "extra": "mean: 239.82101299999385 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.8752012662061804,
            "unit": "iter/sec",
            "range": "stddev: 0.016706745494599485",
            "extra": "mean: 1.1425943250000046 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1323.342981525791,
            "unit": "iter/sec",
            "range": "stddev: 0.00007283804674328567",
            "extra": "mean: 755.6619968974467 usec\nrounds: 967"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 389.013003463263,
            "unit": "iter/sec",
            "range": "stddev: 0.0013184230107651206",
            "extra": "mean: 2.570608157304018 msec\nrounds: 356"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.6735379294614199,
            "unit": "iter/sec",
            "range": "stddev: 0.016051470637062044",
            "extra": "mean: 597.5365018000048 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.3136645784144775,
            "unit": "iter/sec",
            "range": "stddev: 0.04884370206754081",
            "extra": "mean: 3.188118993400002 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1379.5252239029783,
            "unit": "iter/sec",
            "range": "stddev: 0.00012798051749691005",
            "extra": "mean: 724.8870717787831 usec\nrounds: 1017"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 884.1216441654819,
            "unit": "iter/sec",
            "range": "stddev: 0.00019922259808186781",
            "extra": "mean: 1.1310660773879087 msec\nrounds: 827"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.355990721371123,
            "unit": "iter/sec",
            "range": "stddev: 0.0033545168412956847",
            "extra": "mean: 186.706820833327 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9052716198097138,
            "unit": "iter/sec",
            "range": "stddev: 0.04225176722931637",
            "extra": "mean: 1.1046408371999974 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.04503715197742148,
            "unit": "iter/sec",
            "range": "stddev: 0.022220137587504952",
            "extra": "mean: 22.2038907012 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e9cddfb9d6dd1dff439245ed36353e14983dc1ee",
          "message": "Call context push_error method on error. (#121)\n\n* Call context push_error method on error.\r\n\r\n* Fix.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-28T12:26:38+02:00",
          "tree_id": "c6bbebaae12e20cea825d73c68ad3fa4f25818e7",
          "url": "https://github.com/mlrun/storey/commit/e9cddfb9d6dd1dff439245ed36353e14983dc1ee"
        },
        "date": 1609151627924,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1200.8286652043214,
            "unit": "iter/sec",
            "range": "stddev: 0.00039985824099408293",
            "extra": "mean: 832.758268499403 usec\nrounds: 473"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 800.2143298437821,
            "unit": "iter/sec",
            "range": "stddev: 0.0003473117169309385",
            "extra": "mean: 1.249665199316313 msec\nrounds: 878"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.97535819106605,
            "unit": "iter/sec",
            "range": "stddev: 0.01277642841646758",
            "extra": "mean: 200.9905541666607 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7465480903351811,
            "unit": "iter/sec",
            "range": "stddev: 0.02082110116678862",
            "extra": "mean: 1.3394984367999996 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3459.1629308042543,
            "unit": "iter/sec",
            "range": "stddev: 0.00006816997100710814",
            "extra": "mean: 289.0872792070249 usec\nrounds: 2371"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2663.206751517271,
            "unit": "iter/sec",
            "range": "stddev: 0.00006988663128646511",
            "extra": "mean: 375.4871826718989 usec\nrounds: 2343"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 41.433640256643095,
            "unit": "iter/sec",
            "range": "stddev: 0.0011208191531710333",
            "extra": "mean: 24.134978095236733 msec\nrounds: 42"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 8.453501707349437,
            "unit": "iter/sec",
            "range": "stddev: 0.002645964694563692",
            "extra": "mean: 118.29417377778542 msec\nrounds: 9"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1118.779726010608,
            "unit": "iter/sec",
            "range": "stddev: 0.0001775866268974813",
            "extra": "mean: 893.8309988560859 usec\nrounds: 874"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 703.5187325522418,
            "unit": "iter/sec",
            "range": "stddev: 0.00045575825700388883",
            "extra": "mean: 1.4214262587894093 msec\nrounds: 711"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.1512977371816877,
            "unit": "iter/sec",
            "range": "stddev: 0.006720132882040349",
            "extra": "mean: 317.329583999998 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6329132620628819,
            "unit": "iter/sec",
            "range": "stddev: 0.03603901341160519",
            "extra": "mean: 1.5799953326000094 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1140.2013258811694,
            "unit": "iter/sec",
            "range": "stddev: 0.00018849553712652517",
            "extra": "mean: 877.0380960811293 usec\nrounds: 791"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 373.8719872265079,
            "unit": "iter/sec",
            "range": "stddev: 0.0011176421155400429",
            "extra": "mean: 2.674712292349832 msec\nrounds: 366"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.4235828647555744,
            "unit": "iter/sec",
            "range": "stddev: 0.031943725769722604",
            "extra": "mean: 702.452962000001 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.277709810538755,
            "unit": "iter/sec",
            "range": "stddev: 0.12582912946789726",
            "extra": "mean: 3.6008810710000034 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1178.288940135299,
            "unit": "iter/sec",
            "range": "stddev: 0.000283659140441364",
            "extra": "mean: 848.6882681638116 usec\nrounds: 757"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 781.1763761344116,
            "unit": "iter/sec",
            "range": "stddev: 0.00027649414458388063",
            "extra": "mean: 1.2801206367100084 msec\nrounds: 790"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.56645263063891,
            "unit": "iter/sec",
            "range": "stddev: 0.009558266152105605",
            "extra": "mean: 218.9883659999964 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.7251966140477761,
            "unit": "iter/sec",
            "range": "stddev: 0.03963814072993378",
            "extra": "mean: 1.378936388600016 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.04042551773484335,
            "unit": "iter/sec",
            "range": "stddev: 0.3833549712545571",
            "extra": "mean: 24.73685078220001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd065302778a61918df80ee2ade78650215bc756",
          "message": "Fix wrong error in ConcurrentByKeyJobExecution. (#119)\n\n* Fix wrong error in ConcurrentByKeyJobExecution.\r\n\r\n* Add test.\r\n\r\n* CR change.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-28T13:54:20+02:00",
          "tree_id": "5eff6905154aa39b25ff9435fa4890278ff0eec0",
          "url": "https://github.com/mlrun/storey/commit/bd065302778a61918df80ee2ade78650215bc756"
        },
        "date": 1609156932771,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1044.6587037344414,
            "unit": "iter/sec",
            "range": "stddev: 0.0006940770524247029",
            "extra": "mean: 957.2504363628087 usec\nrounds: 495"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 665.7020560201298,
            "unit": "iter/sec",
            "range": "stddev: 0.0008327675240179059",
            "extra": "mean: 1.5021735188538485 msec\nrounds: 663"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.13765473844991,
            "unit": "iter/sec",
            "range": "stddev: 0.021265580239880698",
            "extra": "mean: 241.682804200002 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.6232089826854914,
            "unit": "iter/sec",
            "range": "stddev: 0.08345609095447476",
            "extra": "mean: 1.604598181 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3246.6937492852903,
            "unit": "iter/sec",
            "range": "stddev: 0.000053261826451327564",
            "extra": "mean: 308.00564427123277 usec\nrounds: 1920"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2541.864631932975,
            "unit": "iter/sec",
            "range": "stddev: 0.00007741979650311169",
            "extra": "mean: 393.4119808888267 usec\nrounds: 2093"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 39.90412587998983,
            "unit": "iter/sec",
            "range": "stddev: 0.0009682764691561996",
            "extra": "mean: 25.060065292683337 msec\nrounds: 41"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 8.104236225288345,
            "unit": "iter/sec",
            "range": "stddev: 0.0015826163582844679",
            "extra": "mean: 123.39225711111605 msec\nrounds: 9"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1057.3317430404486,
            "unit": "iter/sec",
            "range": "stddev: 0.0003190842964446059",
            "extra": "mean: 945.7769584448621 usec\nrounds: 746"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 671.1334983581005,
            "unit": "iter/sec",
            "range": "stddev: 0.0006620707487506511",
            "extra": "mean: 1.490016520478351 msec\nrounds: 586"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.5924701690459337,
            "unit": "iter/sec",
            "range": "stddev: 0.020452239347297674",
            "extra": "mean: 385.7325001999982 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.5506213271679159,
            "unit": "iter/sec",
            "range": "stddev: 0.05742898156895873",
            "extra": "mean: 1.8161301618000039 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 840.7280811689905,
            "unit": "iter/sec",
            "range": "stddev: 0.0009061507341495037",
            "extra": "mean: 1.1894452230137833 msec\nrounds: 843"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 333.28460883894786,
            "unit": "iter/sec",
            "range": "stddev: 0.001640978353169033",
            "extra": "mean: 3.000438584558902 msec\nrounds: 272"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.273226886355603,
            "unit": "iter/sec",
            "range": "stddev: 0.019010132382049086",
            "extra": "mean: 785.4059717999917 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.23152971247562745,
            "unit": "iter/sec",
            "range": "stddev: 0.0505349113542665",
            "extra": "mean: 4.319100081399995 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 938.8169854452467,
            "unit": "iter/sec",
            "range": "stddev: 0.000716406179618029",
            "extra": "mean: 1.0651703319212278 msec\nrounds: 943"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 652.9758059923995,
            "unit": "iter/sec",
            "range": "stddev: 0.0007635463748444446",
            "extra": "mean: 1.531450309219634 msec\nrounds: 705"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.663807000331376,
            "unit": "iter/sec",
            "range": "stddev: 0.011542905033138024",
            "extra": "mean: 272.94014120000156 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.5767845407302158,
            "unit": "iter/sec",
            "range": "stddev: 0.06368905286958268",
            "extra": "mean: 1.7337496576000262 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.036187961177865054,
            "unit": "iter/sec",
            "range": "stddev: 0.2730772693908801",
            "extra": "mean: 27.633499303399994 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "92a33e87ca380eca8eade28ef9f3f27c4d8d6fd3",
          "message": "Relax constraint on PyArrow version. (#123)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-28T18:15:39+02:00",
          "tree_id": "3a41c79198f10bb3eef78af5bc804771e615f3d4",
          "url": "https://github.com/mlrun/storey/commit/92a33e87ca380eca8eade28ef9f3f27c4d8d6fd3"
        },
        "date": 1609172533503,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1202.1191983278866,
            "unit": "iter/sec",
            "range": "stddev: 0.00026354556971162245",
            "extra": "mean: 831.8642622054213 usec\nrounds: 553"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 825.9720131394018,
            "unit": "iter/sec",
            "range": "stddev: 0.0003437550680278227",
            "extra": "mean: 1.210694774268613 msec\nrounds: 855"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 5.006798862351801,
            "unit": "iter/sec",
            "range": "stddev: 0.00762415460705632",
            "extra": "mean: 199.72841480000625 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7150301968828444,
            "unit": "iter/sec",
            "range": "stddev: 0.06556368731588133",
            "extra": "mean: 1.3985423334000076 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3345.2660251379107,
            "unit": "iter/sec",
            "range": "stddev: 0.00006517105167265505",
            "extra": "mean: 298.9298885306959 usec\nrounds: 2171"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2694.7154221577107,
            "unit": "iter/sec",
            "range": "stddev: 0.0000747457297935804",
            "extra": "mean: 371.09669977666164 usec\nrounds: 2235"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 43.72737085783604,
            "unit": "iter/sec",
            "range": "stddev: 0.0014594428010446766",
            "extra": "mean: 22.868971547618163 msec\nrounds: 42"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.00274190028095,
            "unit": "iter/sec",
            "range": "stddev: 0.002691776964839492",
            "extra": "mean: 111.07727079999847 msec\nrounds: 10"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1307.4727761819074,
            "unit": "iter/sec",
            "range": "stddev: 0.00019783726070192418",
            "extra": "mean: 764.834280466021 usec\nrounds: 1116"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 804.8651864439438,
            "unit": "iter/sec",
            "range": "stddev: 0.00031163389552874205",
            "extra": "mean: 1.24244409727572 msec\nrounds: 771"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.311879108527592,
            "unit": "iter/sec",
            "range": "stddev: 0.014467355975845426",
            "extra": "mean: 301.9433884000023 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6875457840347197,
            "unit": "iter/sec",
            "range": "stddev: 0.02842481066118372",
            "extra": "mean: 1.4544485956000017 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1242.513552226089,
            "unit": "iter/sec",
            "range": "stddev: 0.00024172807164868647",
            "extra": "mean: 804.8201954887322 usec\nrounds: 931"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 423.0881255349094,
            "unit": "iter/sec",
            "range": "stddev: 0.0009965770484847915",
            "extra": "mean: 2.363573779660448 msec\nrounds: 354"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.6413736663829852,
            "unit": "iter/sec",
            "range": "stddev: 0.018432994735646507",
            "extra": "mean: 609.245792400003 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.30362954676384096,
            "unit": "iter/sec",
            "range": "stddev: 0.05671123164683952",
            "extra": "mean: 3.293487114999999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1296.4748480242852,
            "unit": "iter/sec",
            "range": "stddev: 0.0002721103302252793",
            "extra": "mean: 771.3223295645981 usec\nrounds: 619"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 866.0625368339317,
            "unit": "iter/sec",
            "range": "stddev: 0.00020030002862014636",
            "extra": "mean: 1.154651029769402 msec\nrounds: 739"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.779052183197367,
            "unit": "iter/sec",
            "range": "stddev: 0.0034078154257351427",
            "extra": "mean: 209.2465119999929 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.697712475023312,
            "unit": "iter/sec",
            "range": "stddev: 0.04415254641985527",
            "extra": "mean: 1.4332551527999953 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.04322114953620442,
            "unit": "iter/sec",
            "range": "stddev: 0.7660081888140459",
            "extra": "mean: 23.136820994599987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e374674b688456deeba7831d5c1b0e1c26ae1974",
          "message": "Support v3io filesystem in CSV and parquet (#116)\n\n* support v3io filesystem for csv and parquet\r\n\r\n* optimize imports + add v3iofs to requirenment\r\n\r\n* rename and fix test\r\n\r\n* add comment and delete v3iofs from namesapce\r\n\r\n* fix lint",
          "timestamp": "2020-12-29T15:57:05+02:00",
          "tree_id": "fcaf0f5ea0889318becabb4f8c96990cbf39a22c",
          "url": "https://github.com/mlrun/storey/commit/e374674b688456deeba7831d5c1b0e1c26ae1974"
        },
        "date": 1609250578112,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1475.577599722458,
            "unit": "iter/sec",
            "range": "stddev: 0.00007464430518489382",
            "extra": "mean: 677.7007188155272 usec\nrounds: 473"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 1012.5729942267659,
            "unit": "iter/sec",
            "range": "stddev: 0.00017028217731836467",
            "extra": "mean: 987.5831230948768 usec\nrounds: 918"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.6129356262962915,
            "unit": "iter/sec",
            "range": "stddev: 0.012469800610237383",
            "extra": "mean: 151.21877128570662 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0246235122802914,
            "unit": "iter/sec",
            "range": "stddev: 0.013613347740860192",
            "extra": "mean: 975.9682342000019 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5191.921192073264,
            "unit": "iter/sec",
            "range": "stddev: 0.00002104080707546817",
            "extra": "mean: 192.60692969044757 usec\nrounds: 2745"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 4321.098248114507,
            "unit": "iter/sec",
            "range": "stddev: 0.00003926585655278799",
            "extra": "mean: 231.42264826687187 usec\nrounds: 2482"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 56.065543742725104,
            "unit": "iter/sec",
            "range": "stddev: 0.0008733494543318681",
            "extra": "mean: 17.83626686274236 msec\nrounds: 51"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 11.005411773671995,
            "unit": "iter/sec",
            "range": "stddev: 0.006590291740712628",
            "extra": "mean: 90.86438750000052 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1435.3480778901446,
            "unit": "iter/sec",
            "range": "stddev: 0.000306218884680961",
            "extra": "mean: 696.6951190473087 usec\nrounds: 714"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 974.4765731927188,
            "unit": "iter/sec",
            "range": "stddev: 0.00009154703031879016",
            "extra": "mean: 1.0261919347364687 msec\nrounds: 950"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.834659644046206,
            "unit": "iter/sec",
            "range": "stddev: 0.00643785115087",
            "extra": "mean: 206.839793000006 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9348602759972241,
            "unit": "iter/sec",
            "range": "stddev: 0.026289839976677425",
            "extra": "mean: 1.0696785666000097 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1393.9643298295136,
            "unit": "iter/sec",
            "range": "stddev: 0.00005755587198470364",
            "extra": "mean: 717.3784713144728 usec\nrounds: 244"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 443.90740947484323,
            "unit": "iter/sec",
            "range": "stddev: 0.0010926068347518565",
            "extra": "mean: 2.2527220286388823 msec\nrounds: 419"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.908838028762416,
            "unit": "iter/sec",
            "range": "stddev: 0.020383673115956718",
            "extra": "mean: 523.8789173999976 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.3447953592547235,
            "unit": "iter/sec",
            "range": "stddev: 0.06072060058823658",
            "extra": "mean: 2.900271053999984 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1464.5952063911907,
            "unit": "iter/sec",
            "range": "stddev: 0.00014062934658260642",
            "extra": "mean: 682.782516040068 usec\nrounds: 1091"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 938.2869117820868,
            "unit": "iter/sec",
            "range": "stddev: 0.00012733634051780688",
            "extra": "mean: 1.0657720868137248 msec\nrounds: 910"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.837062228660841,
            "unit": "iter/sec",
            "range": "stddev: 0.005770340728579109",
            "extra": "mean: 171.31905757143582 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9978497296262441,
            "unit": "iter/sec",
            "range": "stddev: 0.016794661055522547",
            "extra": "mean: 1.0021549039999855 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.05206189950299688,
            "unit": "iter/sec",
            "range": "stddev: 0.39479076878715574",
            "extra": "mean: 19.20790462019996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ef7f40b38b3e0dfb849e3d69f0bf5a3c486b3e9e",
          "message": "Fix non-termination in certain cases. (#122)\n\n* Fix non-termination in certain cases.\r\n\r\n* Fix.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-29T16:14:20+02:00",
          "tree_id": "799c7e4b6d788b1a84c1dd96d2ee4efc4174ca3e",
          "url": "https://github.com/mlrun/storey/commit/ef7f40b38b3e0dfb849e3d69f0bf5a3c486b3e9e"
        },
        "date": 1609251654059,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1264.487219357173,
            "unit": "iter/sec",
            "range": "stddev: 0.00020337480353027816",
            "extra": "mean: 790.8344067790339 usec\nrounds: 649"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 891.2893693602609,
            "unit": "iter/sec",
            "range": "stddev: 0.0004047785889675698",
            "extra": "mean: 1.121970074340467 msec\nrounds: 834"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 5.939537186391912,
            "unit": "iter/sec",
            "range": "stddev: 0.005051796077150167",
            "extra": "mean: 168.36328633333628 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.9730210598630904,
            "unit": "iter/sec",
            "range": "stddev: 0.02313553194385398",
            "extra": "mean: 1.027726984800006 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4553.6785753938375,
            "unit": "iter/sec",
            "range": "stddev: 0.000012857495409073073",
            "extra": "mean: 219.60267582424004 usec\nrounds: 2366"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3635.120938741679,
            "unit": "iter/sec",
            "range": "stddev: 0.000053136047752699365",
            "extra": "mean: 275.0940111351994 usec\nrounds: 2335"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 46.71649912242596,
            "unit": "iter/sec",
            "range": "stddev: 0.0000879658829599663",
            "extra": "mean: 21.405713586957468 msec\nrounds: 46"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.541941302424117,
            "unit": "iter/sec",
            "range": "stddev: 0.000266548801083827",
            "extra": "mean: 104.80047699999488 msec\nrounds: 10"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1310.9755500121678,
            "unit": "iter/sec",
            "range": "stddev: 0.00032191446205919225",
            "extra": "mean: 762.7907324364048 usec\nrounds: 669"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 860.6244806890476,
            "unit": "iter/sec",
            "range": "stddev: 0.00022026268942305352",
            "extra": "mean: 1.1619469611175401 msec\nrounds: 823"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.364485944630304,
            "unit": "iter/sec",
            "range": "stddev: 0.0019995509094205117",
            "extra": "mean: 229.12205760000575 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.8543383018574567,
            "unit": "iter/sec",
            "range": "stddev: 0.02665894284411863",
            "extra": "mean: 1.1704965091999895 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1266.9451212955419,
            "unit": "iter/sec",
            "range": "stddev: 0.00009313515433176499",
            "extra": "mean: 789.3001703005325 usec\nrounds: 963"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 370.3107523851931,
            "unit": "iter/sec",
            "range": "stddev: 0.0015684573178071123",
            "extra": "mean: 2.700434685082574 msec\nrounds: 362"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.7113769385380095,
            "unit": "iter/sec",
            "range": "stddev: 0.02389122342595425",
            "extra": "mean: 584.324807399986 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.3184803898674233,
            "unit": "iter/sec",
            "range": "stddev: 0.07949955124698792",
            "extra": "mean: 3.139910750599995 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1358.2435923023029,
            "unit": "iter/sec",
            "range": "stddev: 0.00012929885209613128",
            "extra": "mean: 736.2449605265143 usec\nrounds: 988"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 834.6666681704684,
            "unit": "iter/sec",
            "range": "stddev: 0.0006940421775629917",
            "extra": "mean: 1.1980830649340903 msec\nrounds: 847"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.509316474531206,
            "unit": "iter/sec",
            "range": "stddev: 0.00224227498661328",
            "extra": "mean: 181.5107199999962 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.8932988057384642,
            "unit": "iter/sec",
            "range": "stddev: 0.025706635903119508",
            "extra": "mean: 1.1194462520000001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.04526952484500444,
            "unit": "iter/sec",
            "range": "stddev: 0.021772873408049776",
            "extra": "mean: 22.08991597380001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3849d72e2fbf2aa201cfb34924f2bf178d988a0",
          "message": "Use release tag for pypi version. Separate release from push CI. (#101)\n\n* Use release tag for pypi version. Separate release from push CI.\r\n\r\n* Fix lint.\r\n\r\n* Set version at build time.\r\n\r\n* Add set-version.py\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-29T16:21:58+02:00",
          "tree_id": "8276b16869a236a86f7faff52e3912e701a70b12",
          "url": "https://github.com/mlrun/storey/commit/e3849d72e2fbf2aa201cfb34924f2bf178d988a0"
        },
        "date": 1609252047847,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1419.1650079829956,
            "unit": "iter/sec",
            "range": "stddev: 0.00004926719215694635",
            "extra": "mean: 704.6396961416498 usec\nrounds: 622"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 1042.0731758167897,
            "unit": "iter/sec",
            "range": "stddev: 0.00009268964277150671",
            "extra": "mean: 959.6255073125627 usec\nrounds: 1094"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.848489329649853,
            "unit": "iter/sec",
            "range": "stddev: 0.003594305956229978",
            "extra": "mean: 146.01760357143283 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0711256722372389,
            "unit": "iter/sec",
            "range": "stddev: 0.0050424709010413",
            "extra": "mean: 933.5972668000011 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5315.114708055428,
            "unit": "iter/sec",
            "range": "stddev: 0.000026452107686290234",
            "extra": "mean: 188.1426939825833 usec\nrounds: 2526"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 4113.094019923366,
            "unit": "iter/sec",
            "range": "stddev: 0.00005937391927097254",
            "extra": "mean: 243.12597649266274 usec\nrounds: 2127"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 53.03929761119377,
            "unit": "iter/sec",
            "range": "stddev: 0.0027486192631939474",
            "extra": "mean: 18.853944999998514 msec\nrounds: 56"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.99192949728077,
            "unit": "iter/sec",
            "range": "stddev: 0.0070555030879425095",
            "extra": "mean: 90.97583824999826 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1459.3138684042028,
            "unit": "iter/sec",
            "range": "stddev: 0.0000677349324283256",
            "extra": "mean: 685.2535439093207 usec\nrounds: 706"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 956.592820965526,
            "unit": "iter/sec",
            "range": "stddev: 0.00007837224609269425",
            "extra": "mean: 1.0453768605441358 msec\nrounds: 882"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.806499916738786,
            "unit": "iter/sec",
            "range": "stddev: 0.005279399304430988",
            "extra": "mean: 208.051600400006 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9860874441085398,
            "unit": "iter/sec",
            "range": "stddev: 0.01702826538335682",
            "extra": "mean: 1.0141088459999992 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1433.1395888980558,
            "unit": "iter/sec",
            "range": "stddev: 0.0000555182598854112",
            "extra": "mean: 697.7687363789192 usec\nrounds: 569"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 437.2916340609788,
            "unit": "iter/sec",
            "range": "stddev: 0.0011273613232720137",
            "extra": "mean: 2.2868034101483716 msec\nrounds: 473"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.971535702515581,
            "unit": "iter/sec",
            "range": "stddev: 0.02183670822348233",
            "extra": "mean: 507.2188136000022 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.36075038326472497,
            "unit": "iter/sec",
            "range": "stddev: 0.028042709234744882",
            "extra": "mean: 2.771999826999996 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1462.1435595954333,
            "unit": "iter/sec",
            "range": "stddev: 0.00007038299008431373",
            "extra": "mean: 683.9273704947921 usec\nrounds: 888"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 968.1501251947788,
            "unit": "iter/sec",
            "range": "stddev: 0.00009010529856964777",
            "extra": "mean: 1.0328976611956886 msec\nrounds: 853"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.9594015023471885,
            "unit": "iter/sec",
            "range": "stddev: 0.007348169413374615",
            "extra": "mean: 167.8020854285681 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9949450085645652,
            "unit": "iter/sec",
            "range": "stddev: 0.01780263154535693",
            "extra": "mean: 1.005080674200002 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.05098321392400411,
            "unit": "iter/sec",
            "range": "stddev: 0.15682539949104884",
            "extra": "mean: 19.61429896299998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da0fecf2470d09cd22512dda9141c3f2ad11fe6f",
          "message": "S3fs support (#124)\n\n* add s3fs support + tests\r\n\r\n* use s3fs rather than boto3 in tests",
          "timestamp": "2020-12-30T13:08:27+02:00",
          "tree_id": "4102d88ac84a04f8951a6b014b48cb4afe4abd35",
          "url": "https://github.com/mlrun/storey/commit/da0fecf2470d09cd22512dda9141c3f2ad11fe6f"
        },
        "date": 1609326836868,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1349.5761523687902,
            "unit": "iter/sec",
            "range": "stddev: 0.00011952410545089804",
            "extra": "mean: 740.9733776377046 usec\nrounds: 474"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 1003.3973987758275,
            "unit": "iter/sec",
            "range": "stddev: 0.0002186004940084901",
            "extra": "mean: 996.61410446153 usec\nrounds: 919"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.7009836740573405,
            "unit": "iter/sec",
            "range": "stddev: 0.005336697852840833",
            "extra": "mean: 149.23182157143142 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0564942855338562,
            "unit": "iter/sec",
            "range": "stddev: 0.0589320207023129",
            "extra": "mean: 946.5266530000122 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5822.43361918657,
            "unit": "iter/sec",
            "range": "stddev: 0.000028214562963650003",
            "extra": "mean: 171.74948920065253 usec\nrounds: 2778"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 4497.651331206279,
            "unit": "iter/sec",
            "range": "stddev: 0.00003399880298064566",
            "extra": "mean: 222.3382664328936 usec\nrounds: 2571"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 58.33885550960955,
            "unit": "iter/sec",
            "range": "stddev: 0.003593526282598376",
            "extra": "mean: 17.14123445283016 msec\nrounds: 53"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 12.278677377462373,
            "unit": "iter/sec",
            "range": "stddev: 0.0027724280162479274",
            "extra": "mean: 81.44199650000654 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1528.265210785021,
            "unit": "iter/sec",
            "range": "stddev: 0.00007447658816790979",
            "extra": "mean: 654.3366903486155 usec\nrounds: 746"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 1030.6656853151487,
            "unit": "iter/sec",
            "range": "stddev: 0.00019181914753789152",
            "extra": "mean: 970.2467194240857 usec\nrounds: 695"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 5.388489901596658,
            "unit": "iter/sec",
            "range": "stddev: 0.003477966309674653",
            "extra": "mean: 185.58075050000392 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 1.0755573642644514,
            "unit": "iter/sec",
            "range": "stddev: 0.007990009447944108",
            "extra": "mean: 929.7505025999953 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1566.135940046363,
            "unit": "iter/sec",
            "range": "stddev: 0.00009462921379507419",
            "extra": "mean: 638.5141764707837 usec\nrounds: 986"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 472.5165853563968,
            "unit": "iter/sec",
            "range": "stddev: 0.0012062294121129582",
            "extra": "mean: 2.1163278305792117 msec\nrounds: 484"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 2.162343375420171,
            "unit": "iter/sec",
            "range": "stddev: 0.005031083228722714",
            "extra": "mean: 462.4612405999983 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.3641657383661988,
            "unit": "iter/sec",
            "range": "stddev: 0.12824905962684854",
            "extra": "mean: 2.7460024232000024 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1569.1680778321795,
            "unit": "iter/sec",
            "range": "stddev: 0.00008847255276237808",
            "extra": "mean: 637.2803615668179 usec\nrounds: 1098"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 1005.1382893461495,
            "unit": "iter/sec",
            "range": "stddev: 0.0001397113195175817",
            "extra": "mean: 994.8879777035536 usec\nrounds: 897"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.675529388905767,
            "unit": "iter/sec",
            "range": "stddev: 0.0077898790877000594",
            "extra": "mean: 176.1950174999972 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.040787593830354,
            "unit": "iter/sec",
            "range": "stddev: 0.0049842794545640065",
            "extra": "mean: 960.8108378000111 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.05147518100680738,
            "unit": "iter/sec",
            "range": "stddev: 1.1340447625718708",
            "extra": "mean: 19.426837952599993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da0fecf2470d09cd22512dda9141c3f2ad11fe6f",
          "message": "S3fs support (#124)\n\n* add s3fs support + tests\r\n\r\n* use s3fs rather than boto3 in tests",
          "timestamp": "2020-12-30T13:08:27+02:00",
          "tree_id": "4102d88ac84a04f8951a6b014b48cb4afe4abd35",
          "url": "https://github.com/mlrun/storey/commit/da0fecf2470d09cd22512dda9141c3f2ad11fe6f"
        },
        "date": 1609330849606,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1513.476927434257,
            "unit": "iter/sec",
            "range": "stddev: 0.00005516836786477785",
            "extra": "mean: 660.7302575106077 usec\nrounds: 466"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 1091.6313179126882,
            "unit": "iter/sec",
            "range": "stddev: 0.00010496505514455518",
            "extra": "mean: 916.060196873156 usec\nrounds: 1087"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 7.118681167286289,
            "unit": "iter/sec",
            "range": "stddev: 0.0034802874475841376",
            "extra": "mean: 140.47545837499698 msec\nrounds: 8"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.1113824669951704,
            "unit": "iter/sec",
            "range": "stddev: 0.009834790939621595",
            "extra": "mean: 899.7802554000032 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5287.804994232144,
            "unit": "iter/sec",
            "range": "stddev: 0.00002412791250153274",
            "extra": "mean: 189.11438698870032 usec\nrounds: 2398"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 4399.575167552778,
            "unit": "iter/sec",
            "range": "stddev: 0.000029302311347865815",
            "extra": "mean: 227.29467321642343 usec\nrounds: 2901"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 55.330323656430366,
            "unit": "iter/sec",
            "range": "stddev: 0.0032765087702932975",
            "extra": "mean: 18.073272193552082 msec\nrounds: 62"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 12.396026421310506,
            "unit": "iter/sec",
            "range": "stddev: 0.003733809409012294",
            "extra": "mean: 80.67101230769079 msec\nrounds: 13"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1715.2616508028696,
            "unit": "iter/sec",
            "range": "stddev: 0.00007548101298863503",
            "extra": "mean: 583.0014327737847 usec\nrounds: 714"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 1036.6734641346004,
            "unit": "iter/sec",
            "range": "stddev: 0.00011297212877020701",
            "extra": "mean: 964.6238999999728 usec\nrounds: 870"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 5.355588536241659,
            "unit": "iter/sec",
            "range": "stddev: 0.004647166323617333",
            "extra": "mean: 186.72084183333482 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 1.0781539860216713,
            "unit": "iter/sec",
            "range": "stddev: 0.027908940295241547",
            "extra": "mean: 927.5112951999972 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1530.3823095632906,
            "unit": "iter/sec",
            "range": "stddev: 0.0000907112917581294",
            "extra": "mean: 653.4314946997523 usec\nrounds: 1132"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 489.48349103774615,
            "unit": "iter/sec",
            "range": "stddev: 0.001155931048456387",
            "extra": "mean: 2.0429698208614067 msec\nrounds: 441"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 2.1516982011888013,
            "unit": "iter/sec",
            "range": "stddev: 0.01493474111014945",
            "extra": "mean: 464.74919179999574 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.4072814463160155,
            "unit": "iter/sec",
            "range": "stddev: 0.024971090328780223",
            "extra": "mean: 2.455304578800002 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1701.1257000253136,
            "unit": "iter/sec",
            "range": "stddev: 0.00007296605359570319",
            "extra": "mean: 587.8460362953305 usec\nrounds: 799"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 1096.558307534242,
            "unit": "iter/sec",
            "range": "stddev: 0.00009070716669203817",
            "extra": "mean: 911.9442104712459 usec\nrounds: 955"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.785259088992177,
            "unit": "iter/sec",
            "range": "stddev: 0.0023596525866605234",
            "extra": "mean: 147.3783074285718 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.0836523014395807,
            "unit": "iter/sec",
            "range": "stddev: 0.019294285601952146",
            "extra": "mean: 922.8052196000021 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.054819347785995044,
            "unit": "iter/sec",
            "range": "stddev: 0.9689420902047368",
            "extra": "mean: 18.241734723000018 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguazio.com",
            "name": "Gal Topper"
          },
          "committer": {
            "email": "galt@iguazio.com",
            "name": "Gal Topper"
          },
          "distinct": true,
          "id": "fee483588cdbdefc79e4786a238f18f1f9c9a654",
          "message": "Fix release.",
          "timestamp": "2020-12-30T14:22:57+02:00",
          "tree_id": "67fca54c5d12d6ba0af3497a907c5eb29193716b",
          "url": "https://github.com/mlrun/storey/commit/fee483588cdbdefc79e4786a238f18f1f9c9a654"
        },
        "date": 1609331375811,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1349.3749085573286,
            "unit": "iter/sec",
            "range": "stddev: 0.00021178279423475412",
            "extra": "mean: 741.0838853296453 usec\nrounds: 593"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 961.6943985706627,
            "unit": "iter/sec",
            "range": "stddev: 0.00011192606066628944",
            "extra": "mean: 1.0398313658541318 msec\nrounds: 861"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.293148200852344,
            "unit": "iter/sec",
            "range": "stddev: 0.004522908506771284",
            "extra": "mean: 158.90297957142658 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0301691708951501,
            "unit": "iter/sec",
            "range": "stddev: 0.015702177814080877",
            "extra": "mean: 970.7143528000017 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4445.428564252461,
            "unit": "iter/sec",
            "range": "stddev: 0.00008812443266077382",
            "extra": "mean: 224.95018996400387 usec\nrounds: 558"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3576.010512209286,
            "unit": "iter/sec",
            "range": "stddev: 0.00008653873994940576",
            "extra": "mean: 279.6412361165551 usec\nrounds: 2431"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 47.488272163045565,
            "unit": "iter/sec",
            "range": "stddev: 0.004376395929632799",
            "extra": "mean: 21.05783079591976 msec\nrounds: 49"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.966559362834747,
            "unit": "iter/sec",
            "range": "stddev: 0.0004683969444725787",
            "extra": "mean: 100.33552840000084 msec\nrounds: 10"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1382.8242022520665,
            "unit": "iter/sec",
            "range": "stddev: 0.00004892283708627784",
            "extra": "mean: 723.1577219804229 usec\nrounds: 687"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 904.3635631799808,
            "unit": "iter/sec",
            "range": "stddev: 0.00004306127541447313",
            "extra": "mean: 1.105749988957689 msec\nrounds: 815"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.6037171981605285,
            "unit": "iter/sec",
            "range": "stddev: 0.001690808849875343",
            "extra": "mean: 217.21577519999755 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9176522783303602,
            "unit": "iter/sec",
            "range": "stddev: 0.025323552665480403",
            "extra": "mean: 1.089737391400007 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1331.525097917695,
            "unit": "iter/sec",
            "range": "stddev: 0.00004967899252148811",
            "extra": "mean: 751.018513705712 usec\nrounds: 985"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 412.75842926196856,
            "unit": "iter/sec",
            "range": "stddev: 0.001568436953418073",
            "extra": "mean: 2.4227245989574264 msec\nrounds: 384"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.8339835108097877,
            "unit": "iter/sec",
            "range": "stddev: 0.013459063965054252",
            "extra": "mean: 545.2611727999965 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.33943478594090604,
            "unit": "iter/sec",
            "range": "stddev: 0.03354699574392117",
            "extra": "mean: 2.9460740072000022 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1373.8859916086176,
            "unit": "iter/sec",
            "range": "stddev: 0.0005365757601598501",
            "extra": "mean: 727.8624326237928 usec\nrounds: 987"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 914.7273925092311,
            "unit": "iter/sec",
            "range": "stddev: 0.00013317748125671412",
            "extra": "mean: 1.0932218802990623 msec\nrounds: 802"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.788612021891525,
            "unit": "iter/sec",
            "range": "stddev: 0.0035006262892170923",
            "extra": "mean: 172.7529839999941 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9944621527314412,
            "unit": "iter/sec",
            "range": "stddev: 0.009074312281943032",
            "extra": "mean: 1.005568685800006 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.047104244001288674,
            "unit": "iter/sec",
            "range": "stddev: 0.0511714995532944",
            "extra": "mean: 21.2295095952 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguazio.com",
            "name": "Gal Topper"
          },
          "committer": {
            "email": "galt@iguazio.com",
            "name": "Gal Topper"
          },
          "distinct": true,
          "id": "fee483588cdbdefc79e4786a238f18f1f9c9a654",
          "message": "Fix release.",
          "timestamp": "2020-12-30T14:22:57+02:00",
          "tree_id": "67fca54c5d12d6ba0af3497a907c5eb29193716b",
          "url": "https://github.com/mlrun/storey/commit/fee483588cdbdefc79e4786a238f18f1f9c9a654"
        },
        "date": 1609331401646,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1254.5562577511375,
            "unit": "iter/sec",
            "range": "stddev: 0.0005925711857485745",
            "extra": "mean: 797.0945852938919 usec\nrounds: 340"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 900.4365820290458,
            "unit": "iter/sec",
            "range": "stddev: 0.00031067793249505533",
            "extra": "mean: 1.1105723822843778 msec\nrounds: 858"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 5.511292366167777,
            "unit": "iter/sec",
            "range": "stddev: 0.006387573646314675",
            "extra": "mean: 181.44564533333588 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.9167226472976833,
            "unit": "iter/sec",
            "range": "stddev: 0.03550786353667285",
            "extra": "mean: 1.0908424733999993 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4730.251801601831,
            "unit": "iter/sec",
            "range": "stddev: 0.00005112512151909902",
            "extra": "mean: 211.40523632618553 usec\nrounds: 2395"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3752.737500985663,
            "unit": "iter/sec",
            "range": "stddev: 0.000011518738441655763",
            "extra": "mean: 266.4721419330151 usec\nrounds: 2473"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 47.5307785289648,
            "unit": "iter/sec",
            "range": "stddev: 0.004083422125609246",
            "extra": "mean: 21.03899895918199 msec\nrounds: 49"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.943125296187997,
            "unit": "iter/sec",
            "range": "stddev: 0.0002727759960729652",
            "extra": "mean: 100.57200027272923 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1319.0504590636547,
            "unit": "iter/sec",
            "range": "stddev: 0.00012327380842664287",
            "extra": "mean: 758.1211113863401 usec\nrounds: 808"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 788.3981369164296,
            "unit": "iter/sec",
            "range": "stddev: 0.0008585118698431145",
            "extra": "mean: 1.2683946767190297 msec\nrounds: 829"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.950009710427429,
            "unit": "iter/sec",
            "range": "stddev: 0.009956735885698197",
            "extra": "mean: 253.1639345999963 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.8357574237826356,
            "unit": "iter/sec",
            "range": "stddev: 0.06253532277293988",
            "extra": "mean: 1.1965194343999996 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1309.6183729060879,
            "unit": "iter/sec",
            "range": "stddev: 0.00019625165872732588",
            "extra": "mean: 763.581223880485 usec\nrounds: 1005"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 395.17866900216563,
            "unit": "iter/sec",
            "range": "stddev: 0.0017055135343957233",
            "extra": "mean: 2.530500956757157 msec\nrounds: 370"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.7002379430634103,
            "unit": "iter/sec",
            "range": "stddev: 0.03937557664885077",
            "extra": "mean: 588.1529723999961 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.31166804071475374,
            "unit": "iter/sec",
            "range": "stddev: 0.04642840171974059",
            "extra": "mean: 3.2085420041999897 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1304.50486750109,
            "unit": "iter/sec",
            "range": "stddev: 0.00030266919914929887",
            "extra": "mean: 766.5743723253408 usec\nrounds: 701"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 891.5056297242209,
            "unit": "iter/sec",
            "range": "stddev: 0.00019254963475790038",
            "extra": "mean: 1.1216979081885787 msec\nrounds: 806"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.241654540346406,
            "unit": "iter/sec",
            "range": "stddev: 0.008199759029858263",
            "extra": "mean: 190.7794556666668 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9141847861121677,
            "unit": "iter/sec",
            "range": "stddev: 0.053529012935318275",
            "extra": "mean: 1.0938707526000144 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.047153372099179656,
            "unit": "iter/sec",
            "range": "stddev: 0.15136831378005883",
            "extra": "mean: 21.207391019600003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguazio.com",
            "name": "Gal Topper"
          },
          "committer": {
            "email": "galt@iguazio.com",
            "name": "Gal Topper"
          },
          "distinct": true,
          "id": "4ac355bbfc20415c03ee72547c5064daa819e925",
          "message": "Fix the fix.",
          "timestamp": "2020-12-30T14:48:14+02:00",
          "tree_id": "a2202dd152f07d744b69e332aa42bb93b45bc63f",
          "url": "https://github.com/mlrun/storey/commit/4ac355bbfc20415c03ee72547c5064daa819e925"
        },
        "date": 1609332875018,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1322.1022648683218,
            "unit": "iter/sec",
            "range": "stddev: 0.0001818707061129913",
            "extra": "mean: 756.3711420610853 usec\nrounds: 359"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 960.9055922404432,
            "unit": "iter/sec",
            "range": "stddev: 0.00025137529033580306",
            "extra": "mean: 1.0406849622639873 msec\nrounds: 954"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.092067856727816,
            "unit": "iter/sec",
            "range": "stddev: 0.005325551765059173",
            "extra": "mean: 164.14787614285078 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0007058652943637,
            "unit": "iter/sec",
            "range": "stddev: 0.01642238439713604",
            "extra": "mean: 999.2946326000038 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4680.9307794369115,
            "unit": "iter/sec",
            "range": "stddev: 0.00007569292333636049",
            "extra": "mean: 213.63272543848515 usec\nrounds: 2280"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3841.0296506175573,
            "unit": "iter/sec",
            "range": "stddev: 0.00004014587998617594",
            "extra": "mean: 260.34685773363424 usec\nrounds: 2418"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 49.598877379411995,
            "unit": "iter/sec",
            "range": "stddev: 0.0037936840963939313",
            "extra": "mean: 20.161746653062153 msec\nrounds: 49"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.1317608138084,
            "unit": "iter/sec",
            "range": "stddev: 0.00106416381414004",
            "extra": "mean: 98.6995269999976 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1357.0305826899269,
            "unit": "iter/sec",
            "range": "stddev: 0.00010255988575378139",
            "extra": "mean: 736.9030681812526 usec\nrounds: 924"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 827.9628811135922,
            "unit": "iter/sec",
            "range": "stddev: 0.0009693786786536424",
            "extra": "mean: 1.2077836130226292 msec\nrounds: 814"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.388920145461433,
            "unit": "iter/sec",
            "range": "stddev: 0.002637167130946036",
            "extra": "mean: 227.8464786000029 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.8746671531775293,
            "unit": "iter/sec",
            "range": "stddev: 0.034502723613600995",
            "extra": "mean: 1.1432920469999999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1301.1042220050379,
            "unit": "iter/sec",
            "range": "stddev: 0.0003266069870417525",
            "extra": "mean: 768.5779379448727 usec\nrounds: 983"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 401.98276759948385,
            "unit": "iter/sec",
            "range": "stddev: 0.0016647905169126682",
            "extra": "mean: 2.48766882712831 msec\nrounds: 376"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.7038992943036866,
            "unit": "iter/sec",
            "range": "stddev: 0.06696842364415405",
            "extra": "mean: 586.8891450000035 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.32698197179529503,
            "unit": "iter/sec",
            "range": "stddev: 0.02323260893252053",
            "extra": "mean: 3.058272584599996 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1354.4714394969476,
            "unit": "iter/sec",
            "range": "stddev: 0.0005260784014205743",
            "extra": "mean: 738.2953754797527 usec\nrounds: 783"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 889.5959321834946,
            "unit": "iter/sec",
            "range": "stddev: 0.0003152836313531311",
            "extra": "mean: 1.1241058595507747 msec\nrounds: 890"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.6032698733042325,
            "unit": "iter/sec",
            "range": "stddev: 0.0010441523750820737",
            "extra": "mean: 178.46722050000116 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9481850405081813,
            "unit": "iter/sec",
            "range": "stddev: 0.036650742117202116",
            "extra": "mean: 1.0546464637999862 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.04759823002905652,
            "unit": "iter/sec",
            "range": "stddev: 0.09729436567835488",
            "extra": "mean: 21.009184572399988 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguazio.com",
            "name": "Gal Topper"
          },
          "committer": {
            "email": "galt@iguazio.com",
            "name": "Gal Topper"
          },
          "distinct": true,
          "id": "4ac355bbfc20415c03ee72547c5064daa819e925",
          "message": "Fix the fix.",
          "timestamp": "2020-12-30T14:48:14+02:00",
          "tree_id": "a2202dd152f07d744b69e332aa42bb93b45bc63f",
          "url": "https://github.com/mlrun/storey/commit/4ac355bbfc20415c03ee72547c5064daa819e925"
        },
        "date": 1609333379979,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1027.872366316699,
            "unit": "iter/sec",
            "range": "stddev: 0.0010063415917405578",
            "extra": "mean: 972.8834364751165 usec\nrounds: 488"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 811.5542360877099,
            "unit": "iter/sec",
            "range": "stddev: 0.0003876097895458032",
            "extra": "mean: 1.2322035367848458 msec\nrounds: 734"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 5.468530405749894,
            "unit": "iter/sec",
            "range": "stddev: 0.0177651568112491",
            "extra": "mean: 182.8644856666699 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8176582942623007,
            "unit": "iter/sec",
            "range": "stddev: 0.05548580725610515",
            "extra": "mean: 1.2230047772000034 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4620.594817306271,
            "unit": "iter/sec",
            "range": "stddev: 0.000060060636234535174",
            "extra": "mean: 216.4223524327509 usec\nrounds: 2199"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3692.5958805908085,
            "unit": "iter/sec",
            "range": "stddev: 0.00001352579400995731",
            "extra": "mean: 270.8121961724124 usec\nrounds: 2090"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 47.56673382687988,
            "unit": "iter/sec",
            "range": "stddev: 0.005340815125794402",
            "extra": "mean: 21.023095755103153 msec\nrounds: 49"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.066379656673206,
            "unit": "iter/sec",
            "range": "stddev: 0.0006070977767410801",
            "extra": "mean: 99.34058063636412 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1283.0417324441105,
            "unit": "iter/sec",
            "range": "stddev: 0.00030064697095630625",
            "extra": "mean: 779.3978751533401 usec\nrounds: 817"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 654.0453818219366,
            "unit": "iter/sec",
            "range": "stddev: 0.0012325401147833168",
            "extra": "mean: 1.5289458924308241 msec\nrounds: 753"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.4875565700943736,
            "unit": "iter/sec",
            "range": "stddev: 0.043457793239312606",
            "extra": "mean: 286.7337002000056 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.8126183916939919,
            "unit": "iter/sec",
            "range": "stddev: 0.03134640035555041",
            "extra": "mean: 1.2305899179999984 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1197.6127835406958,
            "unit": "iter/sec",
            "range": "stddev: 0.00022937686555464068",
            "extra": "mean: 834.9944270330337 usec\nrounds: 836"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 366.800454402671,
            "unit": "iter/sec",
            "range": "stddev: 0.0019953942144672636",
            "extra": "mean: 2.726277974841893 msec\nrounds: 318"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.6160115996174917,
            "unit": "iter/sec",
            "range": "stddev: 0.04000458510628748",
            "extra": "mean: 618.8074394000012 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.30752148073984165,
            "unit": "iter/sec",
            "range": "stddev: 0.07470041988905655",
            "extra": "mean: 3.2518053620000105 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1092.2129803983148,
            "unit": "iter/sec",
            "range": "stddev: 0.0005931907089055275",
            "extra": "mean: 915.5723452721776 usec\nrounds: 698"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 760.4209311519609,
            "unit": "iter/sec",
            "range": "stddev: 0.0005320357961154425",
            "extra": "mean: 1.3150611181692502 msec\nrounds: 787"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.36217930320373,
            "unit": "iter/sec",
            "range": "stddev: 0.0054933122228342565",
            "extra": "mean: 186.49133933334383 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.8202020693518397,
            "unit": "iter/sec",
            "range": "stddev: 0.11468565570022683",
            "extra": "mean: 1.2192117496000037 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.0465196020794967,
            "unit": "iter/sec",
            "range": "stddev: 0.06897615312374168",
            "extra": "mean: 21.49631457060002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4749190417480138fd9a45f1c7fc7e0f5cc3cae9",
          "message": "Allow patch version flexibility in requirements. (#125)\n\n* Allow patch version flexibility in requirements.\r\n\r\nAnd minor version flexibility for internal projects and PyArrow.\r\n\r\n* Allow more version flexibility.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-12-31T12:33:51+02:00",
          "tree_id": "87e80b06a92d45e5915dcad1a48d146fa932f259",
          "url": "https://github.com/mlrun/storey/commit/4749190417480138fd9a45f1c7fc7e0f5cc3cae9"
        },
        "date": 1609411193480,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1307.0063590607813,
            "unit": "iter/sec",
            "range": "stddev: 0.00010276227683793439",
            "extra": "mean: 765.107218543759 usec\nrounds: 453"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 882.188074980074,
            "unit": "iter/sec",
            "range": "stddev: 0.0002533462126626905",
            "extra": "mean: 1.1335451343780485 msec\nrounds: 893"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 5.284881716269874,
            "unit": "iter/sec",
            "range": "stddev: 0.004488401326386563",
            "extra": "mean: 189.2189936666758 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8259596521865081,
            "unit": "iter/sec",
            "range": "stddev: 0.023720101857017336",
            "extra": "mean: 1.2107128929999988 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3997.088894469071,
            "unit": "iter/sec",
            "range": "stddev: 0.00007960754863690363",
            "extra": "mean: 250.18207660673727 usec\nrounds: 2676"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3293.2814323504963,
            "unit": "iter/sec",
            "range": "stddev: 0.0000648078696639405",
            "extra": "mean: 303.64851001703653 usec\nrounds: 1747"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 51.75038121270952,
            "unit": "iter/sec",
            "range": "stddev: 0.0029688305693225943",
            "extra": "mean: 19.323529152175738 msec\nrounds: 46"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.558898823422947,
            "unit": "iter/sec",
            "range": "stddev: 0.004898859289428186",
            "extra": "mean: 94.70684554545467 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1315.9618637978676,
            "unit": "iter/sec",
            "range": "stddev: 0.00014092482358056256",
            "extra": "mean: 759.9004405142856 usec\nrounds: 933"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 881.1751013573512,
            "unit": "iter/sec",
            "range": "stddev: 0.0004918323989271768",
            "extra": "mean: 1.1348482253522738 msec\nrounds: 710"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.5084183674248335,
            "unit": "iter/sec",
            "range": "stddev: 0.011237683701423173",
            "extra": "mean: 285.02872099999763 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.7372350307833374,
            "unit": "iter/sec",
            "range": "stddev: 0.03936150281013212",
            "extra": "mean: 1.3564195382000037 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1368.682594689201,
            "unit": "iter/sec",
            "range": "stddev: 0.0002041849335503622",
            "extra": "mean: 730.6295878096404 usec\nrounds: 968"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 435.1548113524239,
            "unit": "iter/sec",
            "range": "stddev: 0.0010108726382490765",
            "extra": "mean: 2.298032732057094 msec\nrounds: 418"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.6699534925099682,
            "unit": "iter/sec",
            "range": "stddev: 0.022790612764490587",
            "extra": "mean: 598.819071600002 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.3179000117686461,
            "unit": "iter/sec",
            "range": "stddev: 0.03565036151625668",
            "extra": "mean: 3.1456431675999967 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1330.1662372540911,
            "unit": "iter/sec",
            "range": "stddev: 0.00016308710651891667",
            "extra": "mean: 751.7857332361217 usec\nrounds: 686"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 869.670120339789,
            "unit": "iter/sec",
            "range": "stddev: 0.00017705363663751174",
            "extra": "mean: 1.1498612825852748 msec\nrounds: 913"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.836934661265573,
            "unit": "iter/sec",
            "range": "stddev: 0.009954082763191631",
            "extra": "mean: 206.74250739999707 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.8019328469039556,
            "unit": "iter/sec",
            "range": "stddev: 0.03438624158835554",
            "extra": "mean: 1.2469872057999964 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.0463407278569639,
            "unit": "iter/sec",
            "range": "stddev: 0.16969957114358455",
            "extra": "mean: 21.579289886999995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd8184f0898a77060ea556b25ebf7d58ae5bd3b7",
          "message": "make s3 dependency optional (#126)\n\n* make s3 dependency optional\r\n\r\n* fix lint\r\n\r\n* fix import in s3 integ test\r\n\r\n* rename mlrun->storey\r\n\r\n* cr fixes",
          "timestamp": "2020-12-31T12:45:39+02:00",
          "tree_id": "bca9a2b250c2f49e707afca0895bbc01837f9b15",
          "url": "https://github.com/mlrun/storey/commit/dd8184f0898a77060ea556b25ebf7d58ae5bd3b7"
        },
        "date": 1609411860027,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1693.0048999888595,
            "unit": "iter/sec",
            "range": "stddev: 0.00007481092352390768",
            "extra": "mean: 590.6657446807037 usec\nrounds: 517"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 1201.5965246227595,
            "unit": "iter/sec",
            "range": "stddev: 0.00012165912751826687",
            "extra": "mean: 832.2261087713694 usec\nrounds: 570"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 7.780636019394115,
            "unit": "iter/sec",
            "range": "stddev: 0.005391095391303512",
            "extra": "mean: 128.52419744444887 msec\nrounds: 9"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.2140577770193257,
            "unit": "iter/sec",
            "range": "stddev: 0.009421521790100395",
            "extra": "mean: 823.6840279999967 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 6399.589731455971,
            "unit": "iter/sec",
            "range": "stddev: 0.000020854318449494548",
            "extra": "mean: 156.26001696400778 usec\nrounds: 3419"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 5011.754115469095,
            "unit": "iter/sec",
            "range": "stddev: 0.000040416654008230703",
            "extra": "mean: 199.53093806287043 usec\nrounds: 3552"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 65.23180090756638,
            "unit": "iter/sec",
            "range": "stddev: 0.0008334768867331742",
            "extra": "mean: 15.329946223882464 msec\nrounds: 67"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 13.154381997596772,
            "unit": "iter/sec",
            "range": "stddev: 0.005508958256283817",
            "extra": "mean: 76.0202950000003 msec\nrounds: 14"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1733.1242734265109,
            "unit": "iter/sec",
            "range": "stddev: 0.00007049203245862058",
            "extra": "mean: 576.9926688655329 usec\nrounds: 758"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 1125.1865806506878,
            "unit": "iter/sec",
            "range": "stddev: 0.00015595148600234523",
            "extra": "mean: 888.7414915859615 usec\nrounds: 1129"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 5.796993518777558,
            "unit": "iter/sec",
            "range": "stddev: 0.005558451501247159",
            "extra": "mean: 172.50321166667013 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 1.1824957742567477,
            "unit": "iter/sec",
            "range": "stddev: 0.006742617749213488",
            "extra": "mean: 845.6689840000024 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1672.3958729617352,
            "unit": "iter/sec",
            "range": "stddev: 0.0000684375727188142",
            "extra": "mean: 597.9445513872541 usec\nrounds: 1333"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 528.8641180332447,
            "unit": "iter/sec",
            "range": "stddev: 0.0009955205478969246",
            "extra": "mean: 1.890844861471845 msec\nrounds: 462"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 2.415297171794888,
            "unit": "iter/sec",
            "range": "stddev: 0.011004596144309362",
            "extra": "mean: 414.0277277999985 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.44094783422091993,
            "unit": "iter/sec",
            "range": "stddev: 0.017567898251086345",
            "extra": "mean: 2.267841958600002 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1763.985930484165,
            "unit": "iter/sec",
            "range": "stddev: 0.00006452738969054889",
            "extra": "mean: 566.8979455666791 usec\nrounds: 1139"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 1149.3522431186352,
            "unit": "iter/sec",
            "range": "stddev: 0.00010184640450484535",
            "extra": "mean: 870.0552906971451 usec\nrounds: 946"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 7.123813053421294,
            "unit": "iter/sec",
            "range": "stddev: 0.008199718329484728",
            "extra": "mean: 140.37426200000272 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.154282682690867,
            "unit": "iter/sec",
            "range": "stddev: 0.011179672749953922",
            "extra": "mean: 866.338909000001 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.06274454435891585,
            "unit": "iter/sec",
            "range": "stddev: 0.05089352366849436",
            "extra": "mean: 15.937640638200003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd8184f0898a77060ea556b25ebf7d58ae5bd3b7",
          "message": "make s3 dependency optional (#126)\n\n* make s3 dependency optional\r\n\r\n* fix lint\r\n\r\n* fix import in s3 integ test\r\n\r\n* rename mlrun->storey\r\n\r\n* cr fixes",
          "timestamp": "2020-12-31T12:45:39+02:00",
          "tree_id": "bca9a2b250c2f49e707afca0895bbc01837f9b15",
          "url": "https://github.com/mlrun/storey/commit/dd8184f0898a77060ea556b25ebf7d58ae5bd3b7"
        },
        "date": 1609412547534,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1234.1928869697228,
            "unit": "iter/sec",
            "range": "stddev: 0.00013927716930527367",
            "extra": "mean: 810.2461216214512 usec\nrounds: 296"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 863.8151772950902,
            "unit": "iter/sec",
            "range": "stddev: 0.00026796832428560097",
            "extra": "mean: 1.1576550473810294 msec\nrounds: 401"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.936373687484615,
            "unit": "iter/sec",
            "range": "stddev: 0.005690626983525128",
            "extra": "mean: 202.57785640000066 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7500450093009541,
            "unit": "iter/sec",
            "range": "stddev: 0.020022205343441193",
            "extra": "mean: 1.3332533216000002 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3530.2875614320938,
            "unit": "iter/sec",
            "range": "stddev: 0.00010362490112702326",
            "extra": "mean: 283.2630437601918 usec\nrounds: 1851"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2822.947223317524,
            "unit": "iter/sec",
            "range": "stddev: 0.00011592936939194121",
            "extra": "mean: 354.2397079690358 usec\nrounds: 2171"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 46.41650171247407,
            "unit": "iter/sec",
            "range": "stddev: 0.0015330607479009945",
            "extra": "mean: 21.54406220000112 msec\nrounds: 50"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.368953394590811,
            "unit": "iter/sec",
            "range": "stddev: 0.007143526541024603",
            "extra": "mean: 106.73550800000271 msec\nrounds: 10"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1251.2405506619018,
            "unit": "iter/sec",
            "range": "stddev: 0.00023071450274798615",
            "extra": "mean: 799.2068347457279 usec\nrounds: 708"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 788.3379436368961,
            "unit": "iter/sec",
            "range": "stddev: 0.0003193097912043182",
            "extra": "mean: 1.2684915245695623 msec\nrounds: 814"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.3704629827038866,
            "unit": "iter/sec",
            "range": "stddev: 0.006358333757520792",
            "extra": "mean: 296.69514400000025 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6649668766519814,
            "unit": "iter/sec",
            "range": "stddev: 0.03688600127142003",
            "extra": "mean: 1.5038343038000108 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1251.2693987459543,
            "unit": "iter/sec",
            "range": "stddev: 0.000193924354202281",
            "extra": "mean: 799.1884089886789 usec\nrounds: 445"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 374.8749275047763,
            "unit": "iter/sec",
            "range": "stddev: 0.0011346467335663487",
            "extra": "mean: 2.6675563678161938 msec\nrounds: 348"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.522621662671365,
            "unit": "iter/sec",
            "range": "stddev: 0.0150181020409836",
            "extra": "mean: 656.7619681999986 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.2939949208506092,
            "unit": "iter/sec",
            "range": "stddev: 0.036429373571632666",
            "extra": "mean: 3.401419307200007 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1246.7579567972757,
            "unit": "iter/sec",
            "range": "stddev: 0.0002447583548339694",
            "extra": "mean: 802.0803031960126 usec\nrounds: 1095"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 800.1889151646178,
            "unit": "iter/sec",
            "range": "stddev: 0.0004916658668296551",
            "extra": "mean: 1.249704889743788 msec\nrounds: 780"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.5363681793712205,
            "unit": "iter/sec",
            "range": "stddev: 0.005921465062613588",
            "extra": "mean: 220.4406610000092 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6925301515415232,
            "unit": "iter/sec",
            "range": "stddev: 0.013571766248564656",
            "extra": "mean: 1.4439804501999958 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.041838642062948427,
            "unit": "iter/sec",
            "range": "stddev: 0.21633904835708836",
            "extra": "mean: 23.9013493434 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04f1f872587b8dfeba14319d72e40b9de986412d",
          "message": "Shorten traceback by default. (#128)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2021-01-04T17:33:25+02:00",
          "tree_id": "61fa63fa6e095da26737f527968321a76ca73f23",
          "url": "https://github.com/mlrun/storey/commit/04f1f872587b8dfeba14319d72e40b9de986412d"
        },
        "date": 1609774817182,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1412.8336003013853,
            "unit": "iter/sec",
            "range": "stddev: 0.00007212276427791863",
            "extra": "mean: 707.7974361500748 usec\nrounds: 509"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 991.7045579946592,
            "unit": "iter/sec",
            "range": "stddev: 0.0002067527157244324",
            "extra": "mean: 1.008364831983948 msec\nrounds: 494"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.226792632665074,
            "unit": "iter/sec",
            "range": "stddev: 0.004252806653922572",
            "extra": "mean: 160.5963228571495 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0029066135170668,
            "unit": "iter/sec",
            "range": "stddev: 0.011532380799887176",
            "extra": "mean: 997.1018103999995 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4729.0272151604195,
            "unit": "iter/sec",
            "range": "stddev: 0.00006885791911278898",
            "extra": "mean: 211.45997992867922 usec\nrounds: 2541"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3775.2803933738655,
            "unit": "iter/sec",
            "range": "stddev: 0.000049396192249393176",
            "extra": "mean: 264.8809878479853 usec\nrounds: 2551"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 48.424446160588566,
            "unit": "iter/sec",
            "range": "stddev: 0.00015830385741202706",
            "extra": "mean: 20.65072663265429 msec\nrounds: 49"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.649878654078801,
            "unit": "iter/sec",
            "range": "stddev: 0.006637165883999784",
            "extra": "mean: 103.62824609999848 msec\nrounds: 10"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1355.6399680693553,
            "unit": "iter/sec",
            "range": "stddev: 0.00022248998244789518",
            "extra": "mean: 737.6589828818321 usec\nrounds: 701"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 891.4497132895855,
            "unit": "iter/sec",
            "range": "stddev: 0.00048741437667488674",
            "extra": "mean: 1.121768267006164 msec\nrounds: 588"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.520183583857003,
            "unit": "iter/sec",
            "range": "stddev: 0.006008142866421493",
            "extra": "mean: 221.2299526000038 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9035767854289801,
            "unit": "iter/sec",
            "range": "stddev: 0.025282683425616136",
            "extra": "mean: 1.1067128064000031 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1292.0077989803042,
            "unit": "iter/sec",
            "range": "stddev: 0.00036943995198239894",
            "extra": "mean: 773.9891359705674 usec\nrounds: 1037"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 413.9830204715476,
            "unit": "iter/sec",
            "range": "stddev: 0.0005415802618165824",
            "extra": "mean: 2.4155580073331255 msec\nrounds: 409"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.7997937443568282,
            "unit": "iter/sec",
            "range": "stddev: 0.020041394752103592",
            "extra": "mean: 555.6192219999957 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.33359620282665126,
            "unit": "iter/sec",
            "range": "stddev: 0.04080306435199421",
            "extra": "mean: 2.9976360387999876 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1375.7190139628794,
            "unit": "iter/sec",
            "range": "stddev: 0.00022127117755209641",
            "extra": "mean: 726.8926211315581 usec\nrounds: 1098"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 925.7371601828484,
            "unit": "iter/sec",
            "range": "stddev: 0.00038790931617311913",
            "extra": "mean: 1.0802202212585736 msec\nrounds: 922"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.64573344974212,
            "unit": "iter/sec",
            "range": "stddev: 0.006774305978364383",
            "extra": "mean: 177.124904833344 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9497435505409038,
            "unit": "iter/sec",
            "range": "stddev: 0.021038853318433772",
            "extra": "mean: 1.0529158101999996 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.04680708503251887,
            "unit": "iter/sec",
            "range": "stddev: 0.10919333988828463",
            "extra": "mean: 21.364287037000008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dinaleventol@gmail.com",
            "name": "Dina Nimrodi",
            "username": "dinal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab9e8abde885372ee08b999059e88ea96b421417",
          "message": "move AggregationStore inside Table class and handle both static and a… (#127)\n\n* move AggregationStore inside Table class and handle both static and aggregations cache in one place\r\n\r\n* rename functions\r\n\r\n* make all methods internal\r\n\r\n* use table's getter and setter in tests\r\n\r\nCo-authored-by: Dina Nimrodi <dinan@iguazio.com>",
          "timestamp": "2021-01-05T12:12:35+02:00",
          "tree_id": "e2684a6572f43e53307f11f2d4c34ccc3cb19830",
          "url": "https://github.com/mlrun/storey/commit/ab9e8abde885372ee08b999059e88ea96b421417"
        },
        "date": 1609841862050,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1556.3784474244267,
            "unit": "iter/sec",
            "range": "stddev: 0.00006399850821470828",
            "extra": "mean: 642.5172500010201 usec\nrounds: 276"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 1116.651127654318,
            "unit": "iter/sec",
            "range": "stddev: 0.00007592920707649953",
            "extra": "mean: 895.5348499048578 usec\nrounds: 1046"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 7.0799238389232455,
            "unit": "iter/sec",
            "range": "stddev: 0.003000023461520964",
            "extra": "mean: 141.2444572499929 msec\nrounds: 8"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.1375202139190441,
            "unit": "iter/sec",
            "range": "stddev: 0.013225528451763283",
            "extra": "mean: 879.1052570000033 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5342.288418150639,
            "unit": "iter/sec",
            "range": "stddev: 0.00002222083263447886",
            "extra": "mean: 187.18570053283906 usec\nrounds: 2628"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 4196.697446082386,
            "unit": "iter/sec",
            "range": "stddev: 0.000050521874342360116",
            "extra": "mean: 238.2826050358954 usec\nrounds: 2780"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 54.435968393837655,
            "unit": "iter/sec",
            "range": "stddev: 0.0008597569783950836",
            "extra": "mean: 18.37020685964693 msec\nrounds: 57"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 11.073277760698783,
            "unit": "iter/sec",
            "range": "stddev: 0.005987247513374765",
            "extra": "mean: 90.30749716666502 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1488.288808098551,
            "unit": "iter/sec",
            "range": "stddev: 0.00006767922290445695",
            "extra": "mean: 671.9125982527595 usec\nrounds: 687"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 985.7315100783467,
            "unit": "iter/sec",
            "range": "stddev: 0.00008646681943229095",
            "extra": "mean: 1.0144750266941545 msec\nrounds: 974"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 5.016483573076067,
            "unit": "iter/sec",
            "range": "stddev: 0.010450685328397352",
            "extra": "mean: 199.34282359999997 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 1.049884589735658,
            "unit": "iter/sec",
            "range": "stddev: 0.030040198618000356",
            "extra": "mean: 952.4856444000022 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1521.1436729576037,
            "unit": "iter/sec",
            "range": "stddev: 0.00006428211265882117",
            "extra": "mean: 657.4000982140439 usec\nrounds: 1008"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 490.12423593433704,
            "unit": "iter/sec",
            "range": "stddev: 0.00012576830766884795",
            "extra": "mean: 2.0402990235601655 msec\nrounds: 382"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 2.0480518974384854,
            "unit": "iter/sec",
            "range": "stddev: 0.02004405258163633",
            "extra": "mean: 488.2688769999959 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.3870132007552505,
            "unit": "iter/sec",
            "range": "stddev: 0.033142572558239075",
            "extra": "mean: 2.583891190400004 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1677.762695620287,
            "unit": "iter/sec",
            "range": "stddev: 0.00006712405873803987",
            "extra": "mean: 596.031848014292 usec\nrounds: 1158"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 1043.8370107014616,
            "unit": "iter/sec",
            "range": "stddev: 0.00009076358655533367",
            "extra": "mean: 958.0039697270333 usec\nrounds: 991"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.648928485336233,
            "unit": "iter/sec",
            "range": "stddev: 0.004179817566938355",
            "extra": "mean: 150.40017383333767 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.0949581850393237,
            "unit": "iter/sec",
            "range": "stddev: 0.013795337246106876",
            "extra": "mean: 913.2768846000147 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.05852911303176528,
            "unit": "iter/sec",
            "range": "stddev: 0.07634403137554713",
            "extra": "mean: 17.08551433979999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "685476597434e42f114dbf8031a538ebb12b35d3",
          "message": "Fix hang in WriteToTable. (#130)\n\n* Fix hang in WriteToTable.\r\n\r\n* Fixes.\r\n\r\n* Virtual queuing of jobs.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2021-01-07T16:30:31+02:00",
          "tree_id": "61645c865ac5328c09aba9499895a62d7e2f263f",
          "url": "https://github.com/mlrun/storey/commit/685476597434e42f114dbf8031a538ebb12b35d3"
        },
        "date": 1610030173084,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1684.2688438860682,
            "unit": "iter/sec",
            "range": "stddev: 0.00002591244128010143",
            "extra": "mean: 593.7294414903067 usec\nrounds: 376"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 1212.6601957386174,
            "unit": "iter/sec",
            "range": "stddev: 0.00005559180763901639",
            "extra": "mean: 824.6333173250661 usec\nrounds: 1062"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 7.3269804657617,
            "unit": "iter/sec",
            "range": "stddev: 0.0009580003455891749",
            "extra": "mean: 136.48187062500128 msec\nrounds: 8"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.1565725761875107,
            "unit": "iter/sec",
            "range": "stddev: 0.005739333362933916",
            "extra": "mean: 864.623647999997 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5422.464955586977,
            "unit": "iter/sec",
            "range": "stddev: 0.000010366806225797662",
            "extra": "mean: 184.41797377955592 usec\nrounds: 2479"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 4284.642542777212,
            "unit": "iter/sec",
            "range": "stddev: 0.00004245800312788261",
            "extra": "mean: 233.39169837767184 usec\nrounds: 2712"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 56.80521922049334,
            "unit": "iter/sec",
            "range": "stddev: 0.00008867831935622095",
            "extra": "mean: 17.604016210525156 msec\nrounds: 57"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 11.238912268662162,
            "unit": "iter/sec",
            "range": "stddev: 0.006784445176803777",
            "extra": "mean: 88.97658208333326 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1697.5231021862219,
            "unit": "iter/sec",
            "range": "stddev: 0.000035189893723477695",
            "extra": "mean: 589.0936027392561 usec\nrounds: 1022"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 1103.860514010851,
            "unit": "iter/sec",
            "range": "stddev: 0.0000367064924393048",
            "extra": "mean: 905.9115597554294 usec\nrounds: 979"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 5.145283295349324,
            "unit": "iter/sec",
            "range": "stddev: 0.002615193934894077",
            "extra": "mean: 194.3527581666634 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 1.057625353214243,
            "unit": "iter/sec",
            "range": "stddev: 0.005060973369055345",
            "extra": "mean: 945.5143987999975 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1629.6159287844755,
            "unit": "iter/sec",
            "range": "stddev: 0.000027061940839330414",
            "extra": "mean: 613.6415227273192 usec\nrounds: 1144"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 481.46314228349985,
            "unit": "iter/sec",
            "range": "stddev: 0.0011769690136420072",
            "extra": "mean: 2.077002188074389 msec\nrounds: 436"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 2.1710520188566576,
            "unit": "iter/sec",
            "range": "stddev: 0.0006218335556417528",
            "extra": "mean: 460.60619059999794 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.39801368775965784,
            "unit": "iter/sec",
            "range": "stddev: 0.013371172162374267",
            "extra": "mean: 2.512476406600001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1683.5522956937675,
            "unit": "iter/sec",
            "range": "stddev: 0.00004170523724701658",
            "extra": "mean: 593.9821427334483 usec\nrounds: 1156"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 1126.2024230685681,
            "unit": "iter/sec",
            "range": "stddev: 0.00010433905872388691",
            "extra": "mean: 887.9398405797211 usec\nrounds: 1035"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.673912380791714,
            "unit": "iter/sec",
            "range": "stddev: 0.0005378431347449721",
            "extra": "mean: 149.8371484285761 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.06472789404765,
            "unit": "iter/sec",
            "range": "stddev: 0.020565515569181778",
            "extra": "mean: 939.2071021999982 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.054343337721249885,
            "unit": "iter/sec",
            "range": "stddev: 0.03185543341789414",
            "extra": "mean: 18.40151970660002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "01bff70729227e32ca7be9bd888e3547a6947de5",
          "message": "Fix timeout logic added in #108. (#134)\n\nClock time is unrelated to event time.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2021-01-11T17:52:05+02:00",
          "tree_id": "42f9ada1ba728d3cb474d51ac53fccb72c5ddb43",
          "url": "https://github.com/mlrun/storey/commit/01bff70729227e32ca7be9bd888e3547a6947de5"
        },
        "date": 1610380683800,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1338.2607894359858,
            "unit": "iter/sec",
            "range": "stddev: 0.0001275919316174679",
            "extra": "mean: 747.2385112780993 usec\nrounds: 266"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 929.5796271936946,
            "unit": "iter/sec",
            "range": "stddev: 0.0005516601891184142",
            "extra": "mean: 1.0757550733108225 msec\nrounds: 873"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 5.551410207406585,
            "unit": "iter/sec",
            "range": "stddev: 0.034787000571495585",
            "extra": "mean: 180.13440957143092 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0034240261489211,
            "unit": "iter/sec",
            "range": "stddev: 0.01884496298569991",
            "extra": "mean: 996.5876578000007 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4965.166331164874,
            "unit": "iter/sec",
            "range": "stddev: 0.0000217595742797057",
            "extra": "mean: 201.40312193033637 usec\nrounds: 2403"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 4018.058469152799,
            "unit": "iter/sec",
            "range": "stddev: 0.00005381261388316836",
            "extra": "mean: 248.87641821968023 usec\nrounds: 2843"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 49.967878049660094,
            "unit": "iter/sec",
            "range": "stddev: 0.0005963217768870531",
            "extra": "mean: 20.01285703999997 msec\nrounds: 50"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.984778241878303,
            "unit": "iter/sec",
            "range": "stddev: 0.008161317067517937",
            "extra": "mean: 100.15244963636601 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1361.8546358304766,
            "unit": "iter/sec",
            "range": "stddev: 0.0001466221701873144",
            "extra": "mean: 734.2927605413533 usec\nrounds: 664"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 857.8879791176796,
            "unit": "iter/sec",
            "range": "stddev: 0.0006669656959125831",
            "extra": "mean: 1.1656533537496117 msec\nrounds: 800"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.27352054575556,
            "unit": "iter/sec",
            "range": "stddev: 0.008259757216724393",
            "extra": "mean: 233.99910900000123 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9024007012724742,
            "unit": "iter/sec",
            "range": "stddev: 0.04379376610460523",
            "extra": "mean: 1.1081551672000045 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1299.024831232594,
            "unit": "iter/sec",
            "range": "stddev: 0.0001158663606626865",
            "extra": "mean: 769.8082253371085 usec\nrounds: 963"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 405.5831340284386,
            "unit": "iter/sec",
            "range": "stddev: 0.00046768581364810323",
            "extra": "mean: 2.465585760599902 msec\nrounds: 401"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.8059969009143697,
            "unit": "iter/sec",
            "range": "stddev: 0.021079462771336734",
            "extra": "mean: 553.7108062000016 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.32657438790739196,
            "unit": "iter/sec",
            "range": "stddev: 0.06155148835696064",
            "extra": "mean: 3.0620894872000006 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1370.3071081066098,
            "unit": "iter/sec",
            "range": "stddev: 0.0001243084368878354",
            "extra": "mean: 729.763418786995 usec\nrounds: 1022"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 891.4122453594957,
            "unit": "iter/sec",
            "range": "stddev: 0.0002405997768440788",
            "extra": "mean: 1.1218154172839663 msec\nrounds: 810"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.510504684723989,
            "unit": "iter/sec",
            "range": "stddev: 0.0071041632948264585",
            "extra": "mean: 181.47158149999618 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9294161043924094,
            "unit": "iter/sec",
            "range": "stddev: 0.04161856077849516",
            "extra": "mean: 1.0759443432000069 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.04765508683565321,
            "unit": "iter/sec",
            "range": "stddev: 0.18558804424579653",
            "extra": "mean: 20.984118724799988 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2572b65ce85c15748a2091c37514d0a369005d0d",
          "message": "Only create a random uuid for Source and AsyncSource. (#132)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2021-01-12T10:45:17+02:00",
          "tree_id": "9012fc7e3189239da080764c18f0f6e7d535b9cf",
          "url": "https://github.com/mlrun/storey/commit/2572b65ce85c15748a2091c37514d0a369005d0d"
        },
        "date": 1610441440876,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1530.2470870851325,
            "unit": "iter/sec",
            "range": "stddev: 0.00007308300545225138",
            "extra": "mean: 653.4892361107738 usec\nrounds: 288"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 1053.4581162162085,
            "unit": "iter/sec",
            "range": "stddev: 0.0000816910710254799",
            "extra": "mean: 949.2546353829249 usec\nrounds: 927"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.753393162801285,
            "unit": "iter/sec",
            "range": "stddev: 0.003412960309342334",
            "extra": "mean: 148.07371285713853 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0761883046228633,
            "unit": "iter/sec",
            "range": "stddev: 0.014192709203475063",
            "extra": "mean: 929.2054148000034 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5355.263057879065,
            "unit": "iter/sec",
            "range": "stddev: 0.000029029746621703135",
            "extra": "mean: 186.73219021962421 usec\nrounds: 2413"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 4221.4013609114545,
            "unit": "iter/sec",
            "range": "stddev: 0.00005639420177414422",
            "extra": "mean: 236.88815976126165 usec\nrounds: 2679"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 56.11576249129974,
            "unit": "iter/sec",
            "range": "stddev: 0.0010148383434054",
            "extra": "mean: 17.820304948276185 msec\nrounds: 58"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.815313818537447,
            "unit": "iter/sec",
            "range": "stddev: 0.006023558114235301",
            "extra": "mean: 92.46148718181436 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1461.0995846171734,
            "unit": "iter/sec",
            "range": "stddev: 0.00006133244061079015",
            "extra": "mean: 684.4160456468904 usec\nrounds: 942"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 983.4199919464985,
            "unit": "iter/sec",
            "range": "stddev: 0.00010407054384609394",
            "extra": "mean: 1.0168595393517317 msec\nrounds: 864"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.988952521740352,
            "unit": "iter/sec",
            "range": "stddev: 0.003333740613596739",
            "extra": "mean: 200.44287766666477 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9853905591687478,
            "unit": "iter/sec",
            "range": "stddev: 0.03220056041653057",
            "extra": "mean: 1.0148260410000034 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1393.1838302557703,
            "unit": "iter/sec",
            "range": "stddev: 0.00007376076682378273",
            "extra": "mean: 717.7803662969682 usec\nrounds: 991"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 436.6895757987024,
            "unit": "iter/sec",
            "range": "stddev: 0.001125740001498964",
            "extra": "mean: 2.289956196391926 msec\nrounds: 499"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.9242230287973559,
            "unit": "iter/sec",
            "range": "stddev: 0.024541362230325187",
            "extra": "mean: 519.6902775999945 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.37389959054758365,
            "unit": "iter/sec",
            "range": "stddev: 0.0172216229920756",
            "extra": "mean: 2.6745148303999997 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1528.1899955322856,
            "unit": "iter/sec",
            "range": "stddev: 0.00007666251545123388",
            "extra": "mean: 654.3688958333279 usec\nrounds: 1056"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 1011.1748850778228,
            "unit": "iter/sec",
            "range": "stddev: 0.00008770041384409765",
            "extra": "mean: 988.9486129029375 usec\nrounds: 899"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.217361892132543,
            "unit": "iter/sec",
            "range": "stddev: 0.002813619247479202",
            "extra": "mean: 160.8399217142887 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.021772463051477,
            "unit": "iter/sec",
            "range": "stddev: 0.01665357226805813",
            "extra": "mean: 978.6914759999945 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.05359878142468927,
            "unit": "iter/sec",
            "range": "stddev: 0.34555789635135487",
            "extra": "mean: 18.65714058080001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d76c3fb9d90db85d33646bda0d01c96bd1dbecf4",
          "message": "Custom print events in verbose to avoid nuclio __repr__ override. (#131)\n\n* Custom print events in verbose to avoid nuclio __repr__ override.\r\n\r\nWhich tries and fails to json.dumps the datetime in the time field.\r\n\r\n* Remove confusing comment.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2021-01-12T10:47:06+02:00",
          "tree_id": "4f5e2f86827ec9ab8663550b80e6b8a48a65e823",
          "url": "https://github.com/mlrun/storey/commit/d76c3fb9d90db85d33646bda0d01c96bd1dbecf4"
        },
        "date": 1610441600716,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1190.980373991482,
            "unit": "iter/sec",
            "range": "stddev: 0.0002277407885600217",
            "extra": "mean: 839.6443987137876 usec\nrounds: 311"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 853.8535986483527,
            "unit": "iter/sec",
            "range": "stddev: 0.00018029995044583334",
            "extra": "mean: 1.1711609596574828 msec\nrounds: 818"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.679423264264416,
            "unit": "iter/sec",
            "range": "stddev: 0.02108594221311687",
            "extra": "mean: 213.7015490000124 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.722420266176865,
            "unit": "iter/sec",
            "range": "stddev: 0.039327196014100424",
            "extra": "mean: 1.3842358067999954 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3528.2771496523665,
            "unit": "iter/sec",
            "range": "stddev: 0.00007041225622079507",
            "extra": "mean: 283.4244469991616 usec\nrounds: 2566"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2819.7465940925476,
            "unit": "iter/sec",
            "range": "stddev: 0.00010376740673908258",
            "extra": "mean: 354.64179727888654 usec\nrounds: 2205"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 48.34355936759003,
            "unit": "iter/sec",
            "range": "stddev: 0.0012534519896924058",
            "extra": "mean: 20.685278723403414 msec\nrounds: 47"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.2602069471233,
            "unit": "iter/sec",
            "range": "stddev: 0.006918460920308374",
            "extra": "mean: 107.98894730000086 msec\nrounds: 10"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1197.2328964119906,
            "unit": "iter/sec",
            "range": "stddev: 0.00044743767890648763",
            "extra": "mean: 835.2593743430525 usec\nrounds: 951"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 745.7107171130951,
            "unit": "iter/sec",
            "range": "stddev: 0.0007529047037449993",
            "extra": "mean: 1.3410025859241328 msec\nrounds: 611"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.264210471152044,
            "unit": "iter/sec",
            "range": "stddev: 0.008137294371747218",
            "extra": "mean: 306.3527945999965 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6664594168931833,
            "unit": "iter/sec",
            "range": "stddev: 0.029125856375914992",
            "extra": "mean: 1.5004664569999988 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1249.9461699454012,
            "unit": "iter/sec",
            "range": "stddev: 0.0001537644514903331",
            "extra": "mean: 800.0344527186166 usec\nrounds: 846"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 378.5443913007522,
            "unit": "iter/sec",
            "range": "stddev: 0.0009496448978188264",
            "extra": "mean: 2.641698101942035 msec\nrounds: 412"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.5934083140424429,
            "unit": "iter/sec",
            "range": "stddev: 0.007269876443787057",
            "extra": "mean: 627.585529199996 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.28701709012156273,
            "unit": "iter/sec",
            "range": "stddev: 0.026357274895551626",
            "extra": "mean: 3.484113087399993 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1207.0137651050807,
            "unit": "iter/sec",
            "range": "stddev: 0.00023876907788292212",
            "extra": "mean: 828.4909658117624 usec\nrounds: 936"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 802.953883661283,
            "unit": "iter/sec",
            "range": "stddev: 0.0005756973081460712",
            "extra": "mean: 1.245401535939066 msec\nrounds: 793"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.523639957966066,
            "unit": "iter/sec",
            "range": "stddev: 0.016209128737672714",
            "extra": "mean: 221.06091759999913 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.7055119545169746,
            "unit": "iter/sec",
            "range": "stddev: 0.024167472258683192",
            "extra": "mean: 1.4174104260000036 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.04546182491849899,
            "unit": "iter/sec",
            "range": "stddev: 0.41533629662647586",
            "extra": "mean: 21.9964773036 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "katyak@iguazio.com",
            "name": "Katya Katsenelenbogen",
            "username": "katyakats"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "997e86eba443ae935f4e596b076d726b684a63d1",
          "message": "Batching fix (#136)\n\n* removing task cancellation from Batching (since it can cause races)\r\n\r\n* small fix",
          "timestamp": "2021-01-13T15:19:23+02:00",
          "tree_id": "4f1f15c0ca3e51c14af8521653358e25594c8db5",
          "url": "https://github.com/mlrun/storey/commit/997e86eba443ae935f4e596b076d726b684a63d1"
        },
        "date": 1610544376490,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1371.9794943239938,
            "unit": "iter/sec",
            "range": "stddev: 0.00003596212899784216",
            "extra": "mean: 728.8738673843834 usec\nrounds: 279"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 950.3917390617765,
            "unit": "iter/sec",
            "range": "stddev: 0.0003172082638512459",
            "extra": "mean: 1.0521976979589454 msec\nrounds: 980"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.238239372219897,
            "unit": "iter/sec",
            "range": "stddev: 0.00492469346058012",
            "extra": "mean: 160.30163966666558 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0017087556651334,
            "unit": "iter/sec",
            "range": "stddev: 0.01866385637359208",
            "extra": "mean: 998.2941591999975 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4820.68514280802,
            "unit": "iter/sec",
            "range": "stddev: 0.000025746201961774057",
            "extra": "mean: 207.43939302733762 usec\nrounds: 2524"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3732.7494367662534,
            "unit": "iter/sec",
            "range": "stddev: 0.000051172767803154495",
            "extra": "mean: 267.89904249943913 usec\nrounds: 2400"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 49.54618395260676,
            "unit": "iter/sec",
            "range": "stddev: 0.0003534425714182068",
            "extra": "mean: 20.183189102041574 msec\nrounds: 49"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.697317813047771,
            "unit": "iter/sec",
            "range": "stddev: 0.00901271024861196",
            "extra": "mean: 103.12129799999923 msec\nrounds: 10"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1372.030366407073,
            "unit": "iter/sec",
            "range": "stddev: 0.00011528055278758058",
            "extra": "mean: 728.8468422303899 usec\nrounds: 843"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 901.1352319027379,
            "unit": "iter/sec",
            "range": "stddev: 0.00007363148862075685",
            "extra": "mean: 1.1097113558511191 msec\nrounds: 829"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.3101677688668865,
            "unit": "iter/sec",
            "range": "stddev: 0.01084424418176675",
            "extra": "mean: 232.0095303999949 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9246327439877351,
            "unit": "iter/sec",
            "range": "stddev: 0.011441617611829545",
            "extra": "mean: 1.0815104770000061 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1304.3038385062032,
            "unit": "iter/sec",
            "range": "stddev: 0.00022884141612347492",
            "extra": "mean: 766.6925224610876 usec\nrounds: 1024"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 420.64140609116305,
            "unit": "iter/sec",
            "range": "stddev: 0.0002262102189548364",
            "extra": "mean: 2.3773218364130235 msec\nrounds: 379"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.8364306195694613,
            "unit": "iter/sec",
            "range": "stddev: 0.005412071307733573",
            "extra": "mean: 544.534593000003 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.303473102473353,
            "unit": "iter/sec",
            "range": "stddev: 0.3776072243313612",
            "extra": "mean: 3.295184949999998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1366.2666266769104,
            "unit": "iter/sec",
            "range": "stddev: 0.00024014026166789312",
            "extra": "mean: 731.9215594340036 usec\nrounds: 1060"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 894.6012108759245,
            "unit": "iter/sec",
            "range": "stddev: 0.0002757206451068168",
            "extra": "mean: 1.117816506218315 msec\nrounds: 804"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.5679110617843905,
            "unit": "iter/sec",
            "range": "stddev: 0.0034947785421997417",
            "extra": "mean: 152.2554112857181 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.0488634387816083,
            "unit": "iter/sec",
            "range": "stddev: 0.024932988297069032",
            "extra": "mean: 953.4129639999946 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.04942504264494813,
            "unit": "iter/sec",
            "range": "stddev: 0.15281456207903824",
            "extra": "mean: 20.232658314200012 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23d6e32fb6ac38b1ecca1704364c9ea3b1b4203f",
          "message": "Support key and time fields in Source. (#137)\n\n* Support key and time fields in Source.\r\n\r\n* Code sharing.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2021-01-14T10:09:14+02:00",
          "tree_id": "447d0b1fe165002257ea50404402db59b952e474",
          "url": "https://github.com/mlrun/storey/commit/23d6e32fb6ac38b1ecca1704364c9ea3b1b4203f"
        },
        "date": 1610612161300,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1238.2462252192115,
            "unit": "iter/sec",
            "range": "stddev: 0.00031837092712653944",
            "extra": "mean: 807.5938207063512 usec\nrounds: 396"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 777.4710098263582,
            "unit": "iter/sec",
            "range": "stddev: 0.0008206861153608048",
            "extra": "mean: 1.2862215920093816 msec\nrounds: 826"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.636745557170645,
            "unit": "iter/sec",
            "range": "stddev: 0.027891606137823686",
            "extra": "mean: 215.66850879999606 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7141606338457719,
            "unit": "iter/sec",
            "range": "stddev: 0.022502572760529704",
            "extra": "mean: 1.4002452006000055 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3342.917348469812,
            "unit": "iter/sec",
            "range": "stddev: 0.00017117550125050917",
            "extra": "mean: 299.1399115678825 usec\nrounds: 1945"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2664.1720229478065,
            "unit": "iter/sec",
            "range": "stddev: 0.00010611534508349463",
            "extra": "mean: 375.3511377593169 usec\nrounds: 2214"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 42.42301434225375,
            "unit": "iter/sec",
            "range": "stddev: 0.0011345162928148769",
            "extra": "mean: 23.572110928571853 msec\nrounds: 42"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 8.664571668867897,
            "unit": "iter/sec",
            "range": "stddev: 0.002269602743551397",
            "extra": "mean: 115.41251411111692 msec\nrounds: 9"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1105.8280447690386,
            "unit": "iter/sec",
            "range": "stddev: 0.0007898461881445968",
            "extra": "mean: 904.2997279101006 usec\nrounds: 713"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 732.7562362329219,
            "unit": "iter/sec",
            "range": "stddev: 0.0006615304064362369",
            "extra": "mean: 1.364710323232417 msec\nrounds: 792"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.067748517179988,
            "unit": "iter/sec",
            "range": "stddev: 0.013265623732765344",
            "extra": "mean: 325.97196099999906 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6113806542839336,
            "unit": "iter/sec",
            "range": "stddev: 0.04773535576361688",
            "extra": "mean: 1.6356422025999962 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1108.929701734167,
            "unit": "iter/sec",
            "range": "stddev: 0.0005805966541562305",
            "extra": "mean: 901.7704173999302 usec\nrounds: 1023"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 354.4473272576709,
            "unit": "iter/sec",
            "range": "stddev: 0.000685598319965336",
            "extra": "mean: 2.821293667910873 msec\nrounds: 268"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.4084452065281123,
            "unit": "iter/sec",
            "range": "stddev: 0.015756769182790457",
            "extra": "mean: 710.0027713999964 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.26399648306673057,
            "unit": "iter/sec",
            "range": "stddev: 0.07662823636119169",
            "extra": "mean: 3.7879292496000003 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1154.134603433168,
            "unit": "iter/sec",
            "range": "stddev: 0.0006459440823820587",
            "extra": "mean: 866.4500631255066 usec\nrounds: 998"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 690.0950006352235,
            "unit": "iter/sec",
            "range": "stddev: 0.0011090952745649986",
            "extra": "mean: 1.4490758505416106 msec\nrounds: 736"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.957821187512727,
            "unit": "iter/sec",
            "range": "stddev: 0.003397741233073589",
            "extra": "mean: 201.70150599999488 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.7261514059615956,
            "unit": "iter/sec",
            "range": "stddev: 0.053609302888081314",
            "extra": "mean: 1.3771232717999964 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.0415244299856294,
            "unit": "iter/sec",
            "range": "stddev: 0.2745925430182768",
            "extra": "mean: 24.0822089634 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "katyak@iguazio.com",
            "name": "Katya Katsenelenbogen",
            "username": "katyakats"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1dbc9dfaccf6d5c5a0218056c87e89109a341174",
          "message": "IG-17619: adding emitAfterDelay (#129)\n\n* IG-17619: adding timeout option to emitAfterMaxEvents in aggregate by key\r\n\r\n* PR comments\r\n\r\n* PR comments2\r\n\r\n* PR comments\r\n\r\n* PR comments\r\n\r\n* PR comments",
          "timestamp": "2021-01-14T11:49:23+02:00",
          "tree_id": "f0304a47a667018e4cb014eef0e4775fb1be5a59",
          "url": "https://github.com/mlrun/storey/commit/1dbc9dfaccf6d5c5a0218056c87e89109a341174"
        },
        "date": 1610618135738,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1328.701311105206,
            "unit": "iter/sec",
            "range": "stddev: 0.00012869483979550915",
            "extra": "mean: 752.6145956522056 usec\nrounds: 230"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 979.1236747146278,
            "unit": "iter/sec",
            "range": "stddev: 0.0000959605970480288",
            "extra": "mean: 1.021321438572565 msec\nrounds: 757"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.3308526188815755,
            "unit": "iter/sec",
            "range": "stddev: 0.0022784260742858132",
            "extra": "mean: 157.95660714285629 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0094009856234043,
            "unit": "iter/sec",
            "range": "stddev: 0.018584431140842485",
            "extra": "mean: 990.6865698000104 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4844.054324096059,
            "unit": "iter/sec",
            "range": "stddev: 0.00002040278098310346",
            "extra": "mean: 206.43864273479394 usec\nrounds: 2340"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3796.2080221697342,
            "unit": "iter/sec",
            "range": "stddev: 0.00005138028345602713",
            "extra": "mean: 263.42075938937796 usec\nrounds: 2556"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 50.21021160896331,
            "unit": "iter/sec",
            "range": "stddev: 0.000632267827900939",
            "extra": "mean: 19.916267387757518 msec\nrounds: 49"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.04550577587344,
            "unit": "iter/sec",
            "range": "stddev: 0.007399966533308733",
            "extra": "mean: 99.54700363636509 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1427.6316171974934,
            "unit": "iter/sec",
            "range": "stddev: 0.000091345639049872",
            "extra": "mean: 700.4608107258413 usec\nrounds: 951"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 908.7473201769145,
            "unit": "iter/sec",
            "range": "stddev: 0.0004081465486388224",
            "extra": "mean: 1.1004158997743403 msec\nrounds: 888"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.67366668709012,
            "unit": "iter/sec",
            "range": "stddev: 0.007233275070025269",
            "extra": "mean: 213.96476620000726 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9623635379955219,
            "unit": "iter/sec",
            "range": "stddev: 0.01504375406352727",
            "extra": "mean: 1.0391083624000033 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1386.3395476838032,
            "unit": "iter/sec",
            "range": "stddev: 0.000041214984183990735",
            "extra": "mean: 721.3240087327297 usec\nrounds: 229"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 435.41239914936773,
            "unit": "iter/sec",
            "range": "stddev: 0.00008153968396330253",
            "extra": "mean: 2.296673227389997 msec\nrounds: 387"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.8054668846133173,
            "unit": "iter/sec",
            "range": "stddev: 0.02256359338549644",
            "extra": "mean: 553.873354600006 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.3396546345510034,
            "unit": "iter/sec",
            "range": "stddev: 0.05845089085378758",
            "extra": "mean: 2.944167098799994 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1401.5661893031645,
            "unit": "iter/sec",
            "range": "stddev: 0.0003337463989888547",
            "extra": "mean: 713.4875310435275 usec\nrounds: 757"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 916.3642533781643,
            "unit": "iter/sec",
            "range": "stddev: 0.00009831100227416291",
            "extra": "mean: 1.0912691064863276 msec\nrounds: 817"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.387066550830702,
            "unit": "iter/sec",
            "range": "stddev: 0.004084555721550796",
            "extra": "mean: 156.56639742855663 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.0687606180379003,
            "unit": "iter/sec",
            "range": "stddev: 0.01766644414775274",
            "extra": "mean: 935.6632187999821 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.05250489419687819,
            "unit": "iter/sec",
            "range": "stddev: 0.5347070101171062",
            "extra": "mean: 19.0458435408 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "339743808f61fc612ac924a3718117a39444752c",
          "message": "Add ReadParquet step. (#139)\n\n* Add ReadParquet step.\r\n\r\n* Added new test data file.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2021-01-14T15:10:44+02:00",
          "tree_id": "506b05c221d90fe01c2c13e7c2281311aafab879",
          "url": "https://github.com/mlrun/storey/commit/339743808f61fc612ac924a3718117a39444752c"
        },
        "date": 1610630283640,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1022.9321114361242,
            "unit": "iter/sec",
            "range": "stddev: 0.00033061737021923863",
            "extra": "mean: 977.5819810721074 usec\nrounds: 317"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 737.4557624377527,
            "unit": "iter/sec",
            "range": "stddev: 0.0004437261148344791",
            "extra": "mean: 1.356013541333482 msec\nrounds: 750"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.164635109073103,
            "unit": "iter/sec",
            "range": "stddev: 0.020903459151730888",
            "extra": "mean: 240.117074799997 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.6265107369788722,
            "unit": "iter/sec",
            "range": "stddev: 0.05872506244852577",
            "extra": "mean: 1.5961418391999929 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3255.0705727104873,
            "unit": "iter/sec",
            "range": "stddev: 0.0001021894895508653",
            "extra": "mean: 307.2130012736722 usec\nrounds: 2355"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2479.14451475054,
            "unit": "iter/sec",
            "range": "stddev: 0.0001390618727221008",
            "extra": "mean: 403.3649486950636 usec\nrounds: 2222"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 39.03066104317855,
            "unit": "iter/sec",
            "range": "stddev: 0.001972926524439773",
            "extra": "mean: 25.62088300000165 msec\nrounds: 43"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 8.292703776349665,
            "unit": "iter/sec",
            "range": "stddev: 0.008637705687173884",
            "extra": "mean: 120.58793211111013 msec\nrounds: 9"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1011.6528728503678,
            "unit": "iter/sec",
            "range": "stddev: 0.0004066059143427208",
            "extra": "mean: 988.4813524845381 usec\nrounds: 644"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 693.8184885124984,
            "unit": "iter/sec",
            "range": "stddev: 0.0002599740645311255",
            "extra": "mean: 1.4412991532467443 msec\nrounds: 770"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.8083459194644282,
            "unit": "iter/sec",
            "range": "stddev: 0.015969188334252277",
            "extra": "mean: 356.0814902000061 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.531143197360713,
            "unit": "iter/sec",
            "range": "stddev: 0.08705018880989196",
            "extra": "mean: 1.8827314460000024 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1031.3273513185773,
            "unit": "iter/sec",
            "range": "stddev: 0.0003427794419619921",
            "extra": "mean: 969.6242407626205 usec\nrounds: 839"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 322.5234127960087,
            "unit": "iter/sec",
            "range": "stddev: 0.0008043438325214161",
            "extra": "mean: 3.100550100629393 msec\nrounds: 318"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.3235781049185433,
            "unit": "iter/sec",
            "range": "stddev: 0.04445316543870791",
            "extra": "mean: 755.5277593999961 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.24050498375826973,
            "unit": "iter/sec",
            "range": "stddev: 0.12999166559721137",
            "extra": "mean: 4.157917995600019 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1002.047923065499,
            "unit": "iter/sec",
            "range": "stddev: 0.0004546954820345154",
            "extra": "mean: 997.9562623519702 usec\nrounds: 850"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 631.3111925688153,
            "unit": "iter/sec",
            "range": "stddev: 0.0009330313553539522",
            "extra": "mean: 1.5840048644329972 msec\nrounds: 627"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.200566173815849,
            "unit": "iter/sec",
            "range": "stddev: 0.015729066585689993",
            "extra": "mean: 238.06314639999755 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6527426677378574,
            "unit": "iter/sec",
            "range": "stddev: 0.027036521552147343",
            "extra": "mean: 1.5319972930000063 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.03817797462918813,
            "unit": "iter/sec",
            "range": "stddev: 0.19494011444336",
            "extra": "mean: 26.193112906400017 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87749066e9d6d6a7ec12ab09f80afeda70733ea0",
          "message": "Reduce performance penalty of UUID generation (#140)\n\n* Reduce performance penalty of UUID generation\r\n\r\nby reusing the same UUID with a counter appended.\r\n\r\n* Improve test.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2021-01-14T15:49:47+02:00",
          "tree_id": "bc538fffde88b013e079b604d4cbab061e3aee86",
          "url": "https://github.com/mlrun/storey/commit/87749066e9d6d6a7ec12ab09f80afeda70733ea0"
        },
        "date": 1610632601121,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1133.0376830786745,
            "unit": "iter/sec",
            "range": "stddev: 0.00030873372885299716",
            "extra": "mean: 882.583178771966 usec\nrounds: 358"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 745.4560139283705,
            "unit": "iter/sec",
            "range": "stddev: 0.00043137557335966574",
            "extra": "mean: 1.3414607720853242 msec\nrounds: 566"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.1409459709983265,
            "unit": "iter/sec",
            "range": "stddev: 0.030565731108893653",
            "extra": "mean: 241.4907142000004 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7142065183735987,
            "unit": "iter/sec",
            "range": "stddev: 0.020432950058328514",
            "extra": "mean: 1.4001552412000025 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3189.2718524319653,
            "unit": "iter/sec",
            "range": "stddev: 0.0001645994290487844",
            "extra": "mean: 313.5511948401182 usec\nrounds: 2248"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2314.001153721318,
            "unit": "iter/sec",
            "range": "stddev: 0.0003939766158285",
            "extra": "mean: 432.15190208173635 usec\nrounds: 2114"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 52.348427205340215,
            "unit": "iter/sec",
            "range": "stddev: 0.0011239723068991864",
            "extra": "mean: 19.102770673079306 msec\nrounds: 52"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.179216450816241,
            "unit": "iter/sec",
            "range": "stddev: 0.007969782574330321",
            "extra": "mean: 98.23938854545263 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1039.5284963348824,
            "unit": "iter/sec",
            "range": "stddev: 0.0007163847125956982",
            "extra": "mean: 961.9745909090034 usec\nrounds: 880"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 661.4763186179443,
            "unit": "iter/sec",
            "range": "stddev: 0.0006438154407860038",
            "extra": "mean: 1.5117699180665307 msec\nrounds: 476"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.197245384335956,
            "unit": "iter/sec",
            "range": "stddev: 0.0168321803478537",
            "extra": "mean: 312.76923720000696 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6325192798521121,
            "unit": "iter/sec",
            "range": "stddev: 0.05084519977694357",
            "extra": "mean: 1.5809794765999983 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1031.690428197147,
            "unit": "iter/sec",
            "range": "stddev: 0.0005993138271970647",
            "extra": "mean: 969.2830064804175 usec\nrounds: 926"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 361.3332594983135,
            "unit": "iter/sec",
            "range": "stddev: 0.0007048645824549966",
            "extra": "mean: 2.7675282407947486 msec\nrounds: 353"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.4377790134363782,
            "unit": "iter/sec",
            "range": "stddev: 0.0324070331633172",
            "extra": "mean: 695.5171765999978 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.2658851887888932,
            "unit": "iter/sec",
            "range": "stddev: 0.04070808382687784",
            "extra": "mean: 3.7610218325999996 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1082.528738643803,
            "unit": "iter/sec",
            "range": "stddev: 0.0004895163484226862",
            "extra": "mean: 923.7630044379279 usec\nrounds: 676"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 647.0539073932683,
            "unit": "iter/sec",
            "range": "stddev: 0.0007311533963433006",
            "extra": "mean: 1.5454662873895868 msec\nrounds: 682"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.348412597066357,
            "unit": "iter/sec",
            "range": "stddev: 0.01701258788427128",
            "extra": "mean: 229.96897780000154 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6792397061686838,
            "unit": "iter/sec",
            "range": "stddev: 0.05316062455203996",
            "extra": "mean: 1.4722343097999897 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.04008754584217829,
            "unit": "iter/sec",
            "range": "stddev: 0.3529750983700811",
            "extra": "mean: 24.945403341400002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "katyak@iguazio.com",
            "name": "Katya Katsenelenbogen",
            "username": "katyakats"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "055701adb7924ec0bd7c6628f8802135c513dc3e",
          "message": "IG-17791: aggregateByKey's aggregate have unique names (#133)\n\n* IG-17791: aggregateByKey's aggregate have unique names\r\n\r\n* adding a test and some fixes\r\n\r\n* more fixes\r\n\r\n* more fixes",
          "timestamp": "2021-01-17T11:59:44+02:00",
          "tree_id": "9a7305d9bc2ecb9bf25c217272277bb33ddb5592",
          "url": "https://github.com/mlrun/storey/commit/055701adb7924ec0bd7c6628f8802135c513dc3e"
        },
        "date": 1610877930571,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1356.9740710498572,
            "unit": "iter/sec",
            "range": "stddev: 0.00004815552719294931",
            "extra": "mean: 736.9337567565493 usec\nrounds: 370"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 964.9589996229615,
            "unit": "iter/sec",
            "range": "stddev: 0.00008119486383744444",
            "extra": "mean: 1.0363134603550306 msec\nrounds: 845"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.303490003512659,
            "unit": "iter/sec",
            "range": "stddev: 0.012381032537098885",
            "extra": "mean: 158.64227585714323 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0188433718409504,
            "unit": "iter/sec",
            "range": "stddev: 0.02207665480208303",
            "extra": "mean: 981.5051338000046 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4610.906239709598,
            "unit": "iter/sec",
            "range": "stddev: 0.000011155803111621213",
            "extra": "mean: 216.87710571685398 usec\nrounds: 2204"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3594.1392611254178,
            "unit": "iter/sec",
            "range": "stddev: 0.00003642037728819672",
            "extra": "mean: 278.23073268643304 usec\nrounds: 2166"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 57.7176789351785,
            "unit": "iter/sec",
            "range": "stddev: 0.00022272148593322364",
            "extra": "mean: 17.325714035089298 msec\nrounds: 57"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 11.42540072753154,
            "unit": "iter/sec",
            "range": "stddev: 0.0069537510560940125",
            "extra": "mean: 87.52428241666148 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1358.0320156032783,
            "unit": "iter/sec",
            "range": "stddev: 0.00009657159230708459",
            "extra": "mean: 736.3596649492614 usec\nrounds: 970"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 816.0375620355343,
            "unit": "iter/sec",
            "range": "stddev: 0.0002650676240176413",
            "extra": "mean: 1.22543378702518 msec\nrounds: 817"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.428028597051692,
            "unit": "iter/sec",
            "range": "stddev: 0.01379761340518314",
            "extra": "mean: 225.83413320000432 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.8948570715502286,
            "unit": "iter/sec",
            "range": "stddev: 0.04176763455654132",
            "extra": "mean: 1.117496896199998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1244.3122435004666,
            "unit": "iter/sec",
            "range": "stddev: 0.0003571278076597246",
            "extra": "mean: 803.6568033653887 usec\nrounds: 951"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 386.32876751315484,
            "unit": "iter/sec",
            "range": "stddev: 0.0011060652058500506",
            "extra": "mean: 2.58846890030251 msec\nrounds: 331"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.7641040924861484,
            "unit": "iter/sec",
            "range": "stddev: 0.03405875655194923",
            "extra": "mean: 566.8599740000047 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.33077970707042875,
            "unit": "iter/sec",
            "range": "stddev: 0.09888107145022884",
            "extra": "mean: 3.023160062799991 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1359.4856151842962,
            "unit": "iter/sec",
            "range": "stddev: 0.00021175318217811498",
            "extra": "mean: 735.5723288505976 usec\nrounds: 818"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 883.7521173633274,
            "unit": "iter/sec",
            "range": "stddev: 0.00011295667218099397",
            "extra": "mean: 1.1315390145638324 msec\nrounds: 824"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.755305989589904,
            "unit": "iter/sec",
            "range": "stddev: 0.0013305002932481845",
            "extra": "mean: 148.03178442856992 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9702565110994046,
            "unit": "iter/sec",
            "range": "stddev: 0.024010716727392738",
            "extra": "mean: 1.0306552839999938 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.04866770608942517,
            "unit": "iter/sec",
            "range": "stddev: 0.053834810176966764",
            "extra": "mean: 20.547506351800017 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "60b2c01cf6544cfb2e8c4c1a177149796f00b0a6",
          "message": "IG-17667 - add input_path + result_path (#142)\n\n* add input_path\r\n\r\n* support reulst_path\r\n\r\n* change comment\r\n\r\n* simplify update_in",
          "timestamp": "2021-01-18T17:31:41+02:00",
          "tree_id": "45532883d4860fe11218cdfeab273a536b660cff",
          "url": "https://github.com/mlrun/storey/commit/60b2c01cf6544cfb2e8c4c1a177149796f00b0a6"
        },
        "date": 1610984277356,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1281.5259923954275,
            "unit": "iter/sec",
            "range": "stddev: 0.00016354408105497372",
            "extra": "mean: 780.3197172230591 usec\nrounds: 389"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 835.3548976314063,
            "unit": "iter/sec",
            "range": "stddev: 0.00034262468401914317",
            "extra": "mean: 1.1970959921770186 msec\nrounds: 767"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 5.22886193242803,
            "unit": "iter/sec",
            "range": "stddev: 0.010784512862816403",
            "extra": "mean: 191.24620479998953 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8864251982471515,
            "unit": "iter/sec",
            "range": "stddev: 0.016073667301080063",
            "extra": "mean: 1.128126774799989 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3591.6852322237078,
            "unit": "iter/sec",
            "range": "stddev: 0.00005445649772465058",
            "extra": "mean: 278.420834606621 usec\nrounds: 2618"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2808.1927757432036,
            "unit": "iter/sec",
            "range": "stddev: 0.00011169956598010735",
            "extra": "mean: 356.1009089681689 usec\nrounds: 2219"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 59.57982620451452,
            "unit": "iter/sec",
            "range": "stddev: 0.0009825965021450528",
            "extra": "mean: 16.78420471666679 msec\nrounds: 60"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 11.921413477465315,
            "unit": "iter/sec",
            "range": "stddev: 0.005094976780315757",
            "extra": "mean: 83.88267061538211 msec\nrounds: 13"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1244.1596941300897,
            "unit": "iter/sec",
            "range": "stddev: 0.0002740018194028084",
            "extra": "mean: 803.755341631763 usec\nrounds: 723"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 798.0861459922396,
            "unit": "iter/sec",
            "range": "stddev: 0.0002184321707086086",
            "extra": "mean: 1.2529975680215901 msec\nrounds: 713"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.416479087046195,
            "unit": "iter/sec",
            "range": "stddev: 0.0060255936063493745",
            "extra": "mean: 292.6989963999972 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6771288907202767,
            "unit": "iter/sec",
            "range": "stddev: 0.03633544890470769",
            "extra": "mean: 1.4768237091999992 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1141.8772184565541,
            "unit": "iter/sec",
            "range": "stddev: 0.0003103019240327221",
            "extra": "mean: 875.7508984649629 usec\nrounds: 847"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 378.2373735173491,
            "unit": "iter/sec",
            "range": "stddev: 0.0010188980926023896",
            "extra": "mean: 2.6438423858030826 msec\nrounds: 324"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.5666223459073987,
            "unit": "iter/sec",
            "range": "stddev: 0.011083281635207977",
            "extra": "mean: 638.3159302000081 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.2811476900252514,
            "unit": "iter/sec",
            "range": "stddev: 0.08333023899823966",
            "extra": "mean: 3.556849426399998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1220.8184429087864,
            "unit": "iter/sec",
            "range": "stddev: 0.00011495488956657518",
            "extra": "mean: 819.1226187715081 usec\nrounds: 863"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 756.9889786400149,
            "unit": "iter/sec",
            "range": "stddev: 0.0002848745629051046",
            "extra": "mean: 1.3210231961323557 msec\nrounds: 724"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.252087866428439,
            "unit": "iter/sec",
            "range": "stddev: 0.008734622585988915",
            "extra": "mean: 190.40047033333943 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9196901924113189,
            "unit": "iter/sec",
            "range": "stddev: 0.03809035142952861",
            "extra": "mean: 1.087322674799998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.044025423076483605,
            "unit": "iter/sec",
            "range": "stddev: 0.10611886101772668",
            "extra": "mean: 22.71414855600002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "katyak@iguazio.com",
            "name": "Katya Katsenelenbogen",
            "username": "katyakats"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "26d7c676591bf3c8853eca918873ed91526c537a",
          "message": "Merge pull request #143 from katyakats/small_fixes2\n\nQueryByKey: setting table._aggregations_read_only after table is created",
          "timestamp": "2021-01-19T15:21:03+02:00",
          "tree_id": "bd14e78f73ccf477802e0be4f63660976c17864a",
          "url": "https://github.com/mlrun/storey/commit/26d7c676591bf3c8853eca918873ed91526c537a"
        },
        "date": 1611063074979,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1070.1778954140095,
            "unit": "iter/sec",
            "range": "stddev: 0.0008893445401179252",
            "extra": "mean: 934.424084337062 usec\nrounds: 332"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 776.6495388647865,
            "unit": "iter/sec",
            "range": "stddev: 0.00034322690543948036",
            "extra": "mean: 1.2875820430688476 msec\nrounds: 743"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.880407298022057,
            "unit": "iter/sec",
            "range": "stddev: 0.018966178659054835",
            "extra": "mean: 204.90093120000097 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8363552332440982,
            "unit": "iter/sec",
            "range": "stddev: 0.04131525249842661",
            "extra": "mean: 1.1956641869999998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3544.9259363408023,
            "unit": "iter/sec",
            "range": "stddev: 0.00007922396374268845",
            "extra": "mean: 282.0933407235682 usec\nrounds: 2571"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2734.384464022395,
            "unit": "iter/sec",
            "range": "stddev: 0.00012446525759109755",
            "extra": "mean: 365.7130199346429 usec\nrounds: 2759"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 55.73172808914647,
            "unit": "iter/sec",
            "range": "stddev: 0.001982991518709696",
            "extra": "mean: 17.94310053333419 msec\nrounds: 60"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 11.214738744605368,
            "unit": "iter/sec",
            "range": "stddev: 0.006504068153776302",
            "extra": "mean: 89.1683723333306 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1212.399039066893,
            "unit": "iter/sec",
            "range": "stddev: 0.0002781267541430091",
            "extra": "mean: 824.8109473673263 usec\nrounds: 114"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 771.195123992741,
            "unit": "iter/sec",
            "range": "stddev: 0.00028645026681315533",
            "extra": "mean: 1.296688696399762 msec\nrounds: 639"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.398894851786217,
            "unit": "iter/sec",
            "range": "stddev: 0.018342611712969095",
            "extra": "mean: 294.21327919999385 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6937559565045268,
            "unit": "iter/sec",
            "range": "stddev: 0.05368260954927686",
            "extra": "mean: 1.4414290653999955 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1052.5508643974247,
            "unit": "iter/sec",
            "range": "stddev: 0.00025855335470391155",
            "extra": "mean: 950.0728504674123 usec\nrounds: 321"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 341.53398415739144,
            "unit": "iter/sec",
            "range": "stddev: 0.0008977891435358854",
            "extra": "mean: 2.9279663119532 msec\nrounds: 343"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.549956645511708,
            "unit": "iter/sec",
            "range": "stddev: 0.008091147191584996",
            "extra": "mean: 645.1793363999911 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.2780683969153738,
            "unit": "iter/sec",
            "range": "stddev: 0.10108500549804993",
            "extra": "mean: 3.5962375124000006 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1202.4031929710827,
            "unit": "iter/sec",
            "range": "stddev: 0.00026999831104341696",
            "extra": "mean: 831.6677848543018 usec\nrounds: 1162"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 785.1225852217897,
            "unit": "iter/sec",
            "range": "stddev: 0.0002561631358026065",
            "extra": "mean: 1.273686452055776 msec\nrounds: 657"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.467190250486551,
            "unit": "iter/sec",
            "range": "stddev: 0.015291359203113107",
            "extra": "mean: 182.9093106666638 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.8844133167929356,
            "unit": "iter/sec",
            "range": "stddev: 0.038213124905570224",
            "extra": "mean: 1.130693060599998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.04499888810690417,
            "unit": "iter/sec",
            "range": "stddev: 0.5887497511442823",
            "extra": "mean: 22.222771318799992 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d4ccee08230458713db1ad3648157e69d14efa52",
          "message": "Refactor aggregates (#138)\n\n* split aggregateStoreElement to query and aggregate, where the latter is optimized\r\n\r\n* lint\r\n\r\n* typo + minor performance improvment",
          "timestamp": "2021-01-21T12:58:35+02:00",
          "tree_id": "cfc13906bdd82cf556ccd7e5ca3493746c29aabd",
          "url": "https://github.com/mlrun/storey/commit/d4ccee08230458713db1ad3648157e69d14efa52"
        },
        "date": 1611227218359,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1250.7817090695737,
            "unit": "iter/sec",
            "range": "stddev: 0.00036493028296665837",
            "extra": "mean: 799.5000188673017 usec\nrounds: 318"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 815.8932171806924,
            "unit": "iter/sec",
            "range": "stddev: 0.0008107864521620036",
            "extra": "mean: 1.2256505863052594 msec\nrounds: 701"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.793191968697272,
            "unit": "iter/sec",
            "range": "stddev: 0.020752311395429098",
            "extra": "mean: 208.62924049999756 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.862090045253836,
            "unit": "iter/sec",
            "range": "stddev: 0.014959483272123793",
            "extra": "mean: 1.1599716358000136 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3634.322737105717,
            "unit": "iter/sec",
            "range": "stddev: 0.00006875104153367132",
            "extra": "mean: 275.1544296796203 usec\nrounds: 1031"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2770.7907492718973,
            "unit": "iter/sec",
            "range": "stddev: 0.00012814649450944285",
            "extra": "mean: 360.9078023170021 usec\nrounds: 2504"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 53.47944280118915,
            "unit": "iter/sec",
            "range": "stddev: 0.001725544474662739",
            "extra": "mean: 18.6987737272716 msec\nrounds: 55"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.78678086320412,
            "unit": "iter/sec",
            "range": "stddev: 0.007675017919774415",
            "extra": "mean: 92.70606427272489 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1230.6343403553087,
            "unit": "iter/sec",
            "range": "stddev: 0.00022082667674217654",
            "extra": "mean: 812.5890585104914 usec\nrounds: 188"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 696.211122828674,
            "unit": "iter/sec",
            "range": "stddev: 0.0009890824880230441",
            "extra": "mean: 1.436345911764589 msec\nrounds: 782"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.401951234036109,
            "unit": "iter/sec",
            "range": "stddev: 0.014604266021990817",
            "extra": "mean: 293.9489519999938 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6851201365654692,
            "unit": "iter/sec",
            "range": "stddev: 0.03573175563319019",
            "extra": "mean: 1.4595980275999978 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1173.7550103967467,
            "unit": "iter/sec",
            "range": "stddev: 0.00042495612863147883",
            "extra": "mean: 851.9665442467293 usec\nrounds: 904"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 421.33948666484326,
            "unit": "iter/sec",
            "range": "stddev: 0.0011441186910065631",
            "extra": "mean: 2.3733830596216 msec\nrounds: 369"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.941210947344543,
            "unit": "iter/sec",
            "range": "stddev: 0.022275699688661155",
            "extra": "mean: 1.0624610804000099 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.17486865696227236,
            "unit": "iter/sec",
            "range": "stddev: 0.09562692764682137",
            "extra": "mean: 5.718577687799984 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1298.7145016312347,
            "unit": "iter/sec",
            "range": "stddev: 0.0003312902750607943",
            "extra": "mean: 769.9921720624218 usec\nrounds: 587"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 752.5377356706133,
            "unit": "iter/sec",
            "range": "stddev: 0.0005272890439939639",
            "extra": "mean: 1.3288370172013555 msec\nrounds: 872"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.59844531248309,
            "unit": "iter/sec",
            "range": "stddev: 0.007150729590005183",
            "extra": "mean: 178.62101783333628 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9090809632493168,
            "unit": "iter/sec",
            "range": "stddev: 0.021936418594609076",
            "extra": "mean: 1.1000120345999904 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.05822557522041793,
            "unit": "iter/sec",
            "range": "stddev: 0.5717929209043333",
            "extra": "mean: 17.17458344060001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events_basic",
            "value": 0.09823683306220721,
            "unit": "iter/sec",
            "range": "stddev: 0.12582595217524312",
            "extra": "mean: 10.179481247800027 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8662e7e4db5f2aaa2f16239cb443922f5980ca1f",
          "message": "Aggregation optimizations. (#144)\n\n* split aggregateStoreElement to query and aggregate, where the latter is optimized\r\n\r\n* lint\r\n\r\n* typo + minor performance improvment\r\n\r\n* AggregationValue optimizations.\r\n\r\n* Replace min and max with if.\r\n\r\n* Further optimizations.\r\n\r\n* Optimization.\r\n\r\n* Rename method.\r\n\r\n* raise NotImplementedError\r\n\r\n* Reuse AggregationValues to avoid allocations.\r\n\r\n* More use of reset. Fix reset.\r\n\r\n* More use of reset.\r\n\r\n* More AggregationValue reuse.\r\n\r\n* Remove dict key redundancy.\r\n\r\n* Optimization.\r\n\r\n* Optimization.\r\n\r\n* Simplification/optimization\r\n\r\n* Optimize _set_value.\r\n\r\n* Remove max_value from reset().\r\n\r\nCo-authored-by: Tal Neiman <Taln@iguazio.com>\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2021-01-25T16:05:29+02:00",
          "tree_id": "8596215bc8705ff101bc0bdbf4f063886d93f32f",
          "url": "https://github.com/mlrun/storey/commit/8662e7e4db5f2aaa2f16239cb443922f5980ca1f"
        },
        "date": 1611584008857,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1111.9114157267215,
            "unit": "iter/sec",
            "range": "stddev: 0.00030229937595743507",
            "extra": "mean: 899.3522198406619 usec\nrounds: 373"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 813.8693048930361,
            "unit": "iter/sec",
            "range": "stddev: 0.0003099774353298666",
            "extra": "mean: 1.2286985072270618 msec\nrounds: 761"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 5.100571257605314,
            "unit": "iter/sec",
            "range": "stddev: 0.00821319020432004",
            "extra": "mean: 196.05647083332656 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8043017509058074,
            "unit": "iter/sec",
            "range": "stddev: 0.06452971246870676",
            "extra": "mean: 1.2433144636000066 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3264.839768597188,
            "unit": "iter/sec",
            "range": "stddev: 0.00007981042894747679",
            "extra": "mean: 306.29374513827133 usec\nrounds: 1954"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2547.3081383449985,
            "unit": "iter/sec",
            "range": "stddev: 0.00010506191456549639",
            "extra": "mean: 392.5712735522079 usec\nrounds: 2314"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 53.69660928969243,
            "unit": "iter/sec",
            "range": "stddev: 0.0012707608889202368",
            "extra": "mean: 18.623149826928817 msec\nrounds: 52"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.667282146866164,
            "unit": "iter/sec",
            "range": "stddev: 0.007741677185020269",
            "extra": "mean: 93.74459081817577 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1232.1271096235466,
            "unit": "iter/sec",
            "range": "stddev: 0.00020383168596823655",
            "extra": "mean: 811.6045756882431 usec\nrounds: 872"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 750.4850357410846,
            "unit": "iter/sec",
            "range": "stddev: 0.0007199644110406101",
            "extra": "mean: 1.3324716048635477 msec\nrounds: 658"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.293073069404357,
            "unit": "iter/sec",
            "range": "stddev: 0.014570589714351129",
            "extra": "mean: 303.6677227999917 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6324393108834027,
            "unit": "iter/sec",
            "range": "stddev: 0.03565487858874269",
            "extra": "mean: 1.581179383999995 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1136.2944173943997,
            "unit": "iter/sec",
            "range": "stddev: 0.0002965801110076203",
            "extra": "mean: 880.0536064350893 usec\nrounds: 808"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 315.0694427605165,
            "unit": "iter/sec",
            "range": "stddev: 0.0027889548323608133",
            "extra": "mean: 3.173903477399735 msec\nrounds: 354"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.1834306342229488,
            "unit": "iter/sec",
            "range": "stddev: 0.020904785091408567",
            "extra": "mean: 845.0009414000078 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.21542565247602574,
            "unit": "iter/sec",
            "range": "stddev: 0.0768588539672428",
            "extra": "mean: 4.641972710800019 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1151.6377649467763,
            "unit": "iter/sec",
            "range": "stddev: 0.00035834493109812435",
            "extra": "mean: 868.3285929288849 usec\nrounds: 990"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 696.9828987780988,
            "unit": "iter/sec",
            "range": "stddev: 0.0005023094658001482",
            "extra": "mean: 1.4347554319526767 msec\nrounds: 676"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.094927050426694,
            "unit": "iter/sec",
            "range": "stddev: 0.0048882775843602806",
            "extra": "mean: 196.27366400000787 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.841475055384567,
            "unit": "iter/sec",
            "range": "stddev: 0.040269367977287314",
            "extra": "mean: 1.1883893569999942 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.07402337396832598,
            "unit": "iter/sec",
            "range": "stddev: 0.14900249744989422",
            "extra": "mean: 13.509246423000013 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events_basic",
            "value": 0.11162367887364556,
            "unit": "iter/sec",
            "range": "stddev: 0.09796532739523219",
            "extra": "mean: 8.958672658800003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8662e7e4db5f2aaa2f16239cb443922f5980ca1f",
          "message": "Aggregation optimizations. (#144)\n\n* split aggregateStoreElement to query and aggregate, where the latter is optimized\r\n\r\n* lint\r\n\r\n* typo + minor performance improvment\r\n\r\n* AggregationValue optimizations.\r\n\r\n* Replace min and max with if.\r\n\r\n* Further optimizations.\r\n\r\n* Optimization.\r\n\r\n* Rename method.\r\n\r\n* raise NotImplementedError\r\n\r\n* Reuse AggregationValues to avoid allocations.\r\n\r\n* More use of reset. Fix reset.\r\n\r\n* More use of reset.\r\n\r\n* More AggregationValue reuse.\r\n\r\n* Remove dict key redundancy.\r\n\r\n* Optimization.\r\n\r\n* Optimization.\r\n\r\n* Simplification/optimization\r\n\r\n* Optimize _set_value.\r\n\r\n* Remove max_value from reset().\r\n\r\nCo-authored-by: Tal Neiman <Taln@iguazio.com>\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2021-01-25T16:05:29+02:00",
          "tree_id": "8596215bc8705ff101bc0bdbf4f063886d93f32f",
          "url": "https://github.com/mlrun/storey/commit/8662e7e4db5f2aaa2f16239cb443922f5980ca1f"
        },
        "date": 1611584013719,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1367.5017724739544,
            "unit": "iter/sec",
            "range": "stddev: 0.00011555294424629291",
            "extra": "mean: 731.2604781424853 usec\nrounds: 366"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 964.8904698179437,
            "unit": "iter/sec",
            "range": "stddev: 0.00013667117039105748",
            "extra": "mean: 1.0363870628639131 msec\nrounds: 859"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.670265783267612,
            "unit": "iter/sec",
            "range": "stddev: 0.0019791401502257926",
            "extra": "mean: 149.91906357142528 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0416992082648295,
            "unit": "iter/sec",
            "range": "stddev: 0.009743254074676681",
            "extra": "mean: 959.9700106 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4764.427597823431,
            "unit": "iter/sec",
            "range": "stddev: 0.000012864508106129554",
            "extra": "mean: 209.88880184827187 usec\nrounds: 1948"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3700.4216718394887,
            "unit": "iter/sec",
            "range": "stddev: 0.00005264139326440581",
            "extra": "mean: 270.23947233097294 usec\nrounds: 2295"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 58.547407546383965,
            "unit": "iter/sec",
            "range": "stddev: 0.00014840612803677865",
            "extra": "mean: 17.080175568965267 msec\nrounds: 58"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 11.563861593809735,
            "unit": "iter/sec",
            "range": "stddev: 0.007234130943834821",
            "extra": "mean: 86.47630308333258 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1385.878113804229,
            "unit": "iter/sec",
            "range": "stddev: 0.00011602257054694947",
            "extra": "mean: 721.5641765602348 usec\nrounds: 657"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 888.9018070736214,
            "unit": "iter/sec",
            "range": "stddev: 0.00018466268281621298",
            "extra": "mean: 1.1249836506600523 msec\nrounds: 833"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.662651751118439,
            "unit": "iter/sec",
            "range": "stddev: 0.0050647819746280935",
            "extra": "mean: 214.47023140000283 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.8960812886177039,
            "unit": "iter/sec",
            "range": "stddev: 0.04149921363756048",
            "extra": "mean: 1.1159701833999918 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1361.0175476907937,
            "unit": "iter/sec",
            "range": "stddev: 0.00007150659092524683",
            "extra": "mean: 734.744384226843 usec\nrounds: 989"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 359.25891641753174,
            "unit": "iter/sec",
            "range": "stddev: 0.002926531520535804",
            "extra": "mean: 2.783507810945455 msec\nrounds: 402"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.5140253564812363,
            "unit": "iter/sec",
            "range": "stddev: 0.016135703524759803",
            "extra": "mean: 660.4909195999937 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.2737424785227275,
            "unit": "iter/sec",
            "range": "stddev: 0.10206174824954367",
            "extra": "mean: 3.6530684071999984 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1439.7075398361173,
            "unit": "iter/sec",
            "range": "stddev: 0.0000589650373902707",
            "extra": "mean: 694.5855129117616 usec\nrounds: 1123"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 891.6422672167164,
            "unit": "iter/sec",
            "range": "stddev: 0.0001084057516733987",
            "extra": "mean: 1.121526016393912 msec\nrounds: 854"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.37498934261197,
            "unit": "iter/sec",
            "range": "stddev: 0.023132621142297017",
            "extra": "mean: 156.8630073333234 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.0876672905601603,
            "unit": "iter/sec",
            "range": "stddev: 0.01541094675952116",
            "extra": "mean: 919.3987984000046 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.08958286547677757,
            "unit": "iter/sec",
            "range": "stddev: 0.09252423807188999",
            "extra": "mean: 11.162848996600008 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events_basic",
            "value": 0.14090987505269004,
            "unit": "iter/sec",
            "range": "stddev: 0.10156631495023558",
            "extra": "mean: 7.096734701000003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b2f551467c0579d99b1072ddb8f5bb764bcf7e26",
          "message": "Optimization. (#147)\n\n* Optimization.\r\n\r\n* Unify first and last time.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2021-01-28T15:57:22+02:00",
          "tree_id": "e85e1a01405b299458f22102fccaeedc39f1ba82",
          "url": "https://github.com/mlrun/storey/commit/b2f551467c0579d99b1072ddb8f5bb764bcf7e26"
        },
        "date": 1611842640802,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 975.2870067847837,
            "unit": "iter/sec",
            "range": "stddev: 0.0010542270420567626",
            "extra": "mean: 1.0253392007104527 msec\nrounds: 563"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 778.8465099093279,
            "unit": "iter/sec",
            "range": "stddev: 0.00036600576710727725",
            "extra": "mean: 1.283950030303684 msec\nrounds: 759"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.787975658724716,
            "unit": "iter/sec",
            "range": "stddev: 0.030382292898144293",
            "extra": "mean: 208.85653379999667 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8250763069718575,
            "unit": "iter/sec",
            "range": "stddev: 0.04686767338247813",
            "extra": "mean: 1.2120091093999974 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3308.2186706130983,
            "unit": "iter/sec",
            "range": "stddev: 0.00008528309313166708",
            "extra": "mean: 302.27747908050895 usec\nrounds: 2175"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2556.258802518637,
            "unit": "iter/sec",
            "range": "stddev: 0.0001491338201602881",
            "extra": "mean: 391.1966969129721 usec\nrounds: 2138"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 50.357468502227746,
            "unit": "iter/sec",
            "range": "stddev: 0.0004777879321519592",
            "extra": "mean: 19.85802761224507 msec\nrounds: 49"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.826745849929605,
            "unit": "iter/sec",
            "range": "stddev: 0.007982791314895508",
            "extra": "mean: 101.76308772727278 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1038.567934822387,
            "unit": "iter/sec",
            "range": "stddev: 0.0006183472631788299",
            "extra": "mean: 962.8643119730219 usec\nrounds: 593"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 714.3202665272564,
            "unit": "iter/sec",
            "range": "stddev: 0.000514618126570602",
            "extra": "mean: 1.3999322808823635 msec\nrounds: 680"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.2492626945304472,
            "unit": "iter/sec",
            "range": "stddev: 0.015354198866124703",
            "extra": "mean: 307.7621276000002 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6405685394461852,
            "unit": "iter/sec",
            "range": "stddev: 0.014717529260355923",
            "extra": "mean: 1.5611131962000002 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1133.5387858989218,
            "unit": "iter/sec",
            "range": "stddev: 0.00029711287663345033",
            "extra": "mean: 882.1930157484443 usec\nrounds: 889"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 304.2165950402415,
            "unit": "iter/sec",
            "range": "stddev: 0.0035646088564936554",
            "extra": "mean: 3.2871316565347817 msec\nrounds: 329"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.3848154036026357,
            "unit": "iter/sec",
            "range": "stddev: 0.016840148185040142",
            "extra": "mean: 722.1179063999955 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.2455974031695306,
            "unit": "iter/sec",
            "range": "stddev: 0.061031006851176954",
            "extra": "mean: 4.071704289600007 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1173.8718696279025,
            "unit": "iter/sec",
            "range": "stddev: 0.0002893844491384016",
            "extra": "mean: 851.88173076929 usec\nrounds: 832"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 628.3099573693916,
            "unit": "iter/sec",
            "range": "stddev: 0.0010477558930089125",
            "extra": "mean: 1.5915711477608925 msec\nrounds: 670"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.888133428953864,
            "unit": "iter/sec",
            "range": "stddev: 0.011672612885643505",
            "extra": "mean: 204.57706699999298 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.842312832731036,
            "unit": "iter/sec",
            "range": "stddev: 0.03929129912168866",
            "extra": "mean: 1.1872073666000005 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.07480315041222946,
            "unit": "iter/sec",
            "range": "stddev: 0.14779755186037807",
            "extra": "mean: 13.368420908600012 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events_basic",
            "value": 0.11269533383548905,
            "unit": "iter/sec",
            "range": "stddev: 0.07071200143417326",
            "extra": "mean: 8.873481855600028 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "632677e5b168f4af01fd0dd64e2c55994bb82e0a",
          "message": "Fix PyArrow breakage. (#150)\n\nFixes\r\n```\r\npyarrow.lib.ArrowTypeError: ('Did not pass numpy.dtype object', 'Conversion failed for column my_int with type int64')\r\n```\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2021-02-02T12:29:46+02:00",
          "tree_id": "ae9163c83d163eccb1c84b9ceba380f3b6472753",
          "url": "https://github.com/mlrun/storey/commit/632677e5b168f4af01fd0dd64e2c55994bb82e0a"
        },
        "date": 1612262151333,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1151.1453590231183,
            "unit": "iter/sec",
            "range": "stddev: 0.0002557312476681787",
            "extra": "mean: 868.7000231218559 usec\nrounds: 519"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 797.9238841259236,
            "unit": "iter/sec",
            "range": "stddev: 0.0005996476702930725",
            "extra": "mean: 1.2532523714281825 msec\nrounds: 770"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 5.32966171753249,
            "unit": "iter/sec",
            "range": "stddev: 0.008700322300598086",
            "extra": "mean: 187.62916916666464 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8755986052630401,
            "unit": "iter/sec",
            "range": "stddev: 0.02140098619055871",
            "extra": "mean: 1.1420758256000056 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3416.747823379048,
            "unit": "iter/sec",
            "range": "stddev: 0.00009342338877529852",
            "extra": "mean: 292.67597484295277 usec\nrounds: 2544"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2616.984024247349,
            "unit": "iter/sec",
            "range": "stddev: 0.0001437261501673114",
            "extra": "mean: 382.1192604672481 usec\nrounds: 2484"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 58.9287496207585,
            "unit": "iter/sec",
            "range": "stddev: 0.0013416598859197332",
            "extra": "mean: 16.969645655738393 msec\nrounds: 61"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 11.58816206846875,
            "unit": "iter/sec",
            "range": "stddev: 0.005638914226714227",
            "extra": "mean: 86.29496153846415 msec\nrounds: 13"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1179.2453568184787,
            "unit": "iter/sec",
            "range": "stddev: 0.0002665189335763474",
            "extra": "mean: 847.9999469304079 usec\nrounds: 961"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 803.2080150432971,
            "unit": "iter/sec",
            "range": "stddev: 0.00021433097030775267",
            "extra": "mean: 1.2450074965276519 msec\nrounds: 864"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.4288017390289642,
            "unit": "iter/sec",
            "range": "stddev: 0.004434029153226763",
            "extra": "mean: 291.6470756000024 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.70710339698929,
            "unit": "iter/sec",
            "range": "stddev: 0.07551262125731176",
            "extra": "mean: 1.4142203308000034 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1203.3460970357044,
            "unit": "iter/sec",
            "range": "stddev: 0.00026112388473030176",
            "extra": "mean: 831.0161161974743 usec\nrounds: 852"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 315.895447959728,
            "unit": "iter/sec",
            "range": "stddev: 0.0029132063682152584",
            "extra": "mean: 3.1656043366838427 msec\nrounds: 398"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.4340771790606526,
            "unit": "iter/sec",
            "range": "stddev: 0.019339952946096386",
            "extra": "mean: 697.3125397999979 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.26868709475671615,
            "unit": "iter/sec",
            "range": "stddev: 0.023019492822975884",
            "extra": "mean: 3.7218013798000014 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1247.6062922576186,
            "unit": "iter/sec",
            "range": "stddev: 0.00019105506067907565",
            "extra": "mean: 801.534912260213 usec\nrounds: 832"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 747.213817423154,
            "unit": "iter/sec",
            "range": "stddev: 0.0004073174221857949",
            "extra": "mean: 1.3383050161580337 msec\nrounds: 557"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.508501198748546,
            "unit": "iter/sec",
            "range": "stddev: 0.008275128032596791",
            "extra": "mean: 181.53758416666696 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9071597591063242,
            "unit": "iter/sec",
            "range": "stddev: 0.02778234587044829",
            "extra": "mean: 1.1023416658000087 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.08767754861963065,
            "unit": "iter/sec",
            "range": "stddev: 0.09490588813400676",
            "extra": "mean: 11.405428364999977 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events_basic",
            "value": 0.1255251203512148,
            "unit": "iter/sec",
            "range": "stddev: 0.12755358892787033",
            "extra": "mean: 7.966532891599991 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "katyak@iguazio.com",
            "name": "Katya Katsenelenbogen",
            "username": "katyakats"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "78a045f0acc8969136457f660e8d81fa25c193a6",
          "message": "Merge pull request #148 from katyakats/IG-17936\n\nIG-17936: adding check that the first step is legal and Source-like s…",
          "timestamp": "2021-02-03T12:16:26+02:00",
          "tree_id": "1b3a3b1b88f3d61c86288d3c8659b99e24a25037",
          "url": "https://github.com/mlrun/storey/commit/78a045f0acc8969136457f660e8d81fa25c193a6"
        },
        "date": 1612347717730,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1625.8489472686967,
            "unit": "iter/sec",
            "range": "stddev: 0.00015387014943667686",
            "extra": "mean: 615.0632884315141 usec\nrounds: 631"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 1185.0884139375385,
            "unit": "iter/sec",
            "range": "stddev: 0.000055323633632819274",
            "extra": "mean: 843.8188984376538 usec\nrounds: 1024"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 7.874450958705047,
            "unit": "iter/sec",
            "range": "stddev: 0.0007684591827708284",
            "extra": "mean: 126.99298087500566 msec\nrounds: 8"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.2337704663359963,
            "unit": "iter/sec",
            "range": "stddev: 0.008831914661174077",
            "extra": "mean: 810.5235351999966 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5300.786960487369,
            "unit": "iter/sec",
            "range": "stddev: 0.00001103497662191984",
            "extra": "mean: 188.6512337609692 usec\nrounds: 2571"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 4139.332334949685,
            "unit": "iter/sec",
            "range": "stddev: 0.000029955676623339504",
            "extra": "mean: 241.5848545323809 usec\nrounds: 2736"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 67.81326701653673,
            "unit": "iter/sec",
            "range": "stddev: 0.00007348560819369412",
            "extra": "mean: 14.746376984847863 msec\nrounds: 66"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 13.464457672482053,
            "unit": "iter/sec",
            "range": "stddev: 0.00619942328587829",
            "extra": "mean: 74.2696084999953 msec\nrounds: 14"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1679.1581407911772,
            "unit": "iter/sec",
            "range": "stddev: 0.00006923079506066184",
            "extra": "mean: 595.5365225629225 usec\nrounds: 1108"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 1086.1173829239594,
            "unit": "iter/sec",
            "range": "stddev: 0.00003062683297799825",
            "extra": "mean: 920.7107958330241 usec\nrounds: 960"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 5.5303977913648685,
            "unit": "iter/sec",
            "range": "stddev: 0.002084805141264093",
            "extra": "mean: 180.81881949999948 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 1.127671595476083,
            "unit": "iter/sec",
            "range": "stddev: 0.00914073205844666",
            "extra": "mean: 886.7829996000012 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1576.1772392537757,
            "unit": "iter/sec",
            "range": "stddev: 0.00007101071625111663",
            "extra": "mean: 634.4464157301493 usec\nrounds: 1157"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 416.86814155769076,
            "unit": "iter/sec",
            "range": "stddev: 0.0027795004167330854",
            "extra": "mean: 2.398840065502125 msec\nrounds: 458"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 2.0161089305139477,
            "unit": "iter/sec",
            "range": "stddev: 0.011919811638718887",
            "extra": "mean: 496.0049453999886 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.37636137674303166,
            "unit": "iter/sec",
            "range": "stddev: 0.030312699335652716",
            "extra": "mean: 2.6570207831999992 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1648.9473114035814,
            "unit": "iter/sec",
            "range": "stddev: 0.000038902226276848605",
            "extra": "mean: 606.4475153841039 usec\nrounds: 910"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 1087.3331589980157,
            "unit": "iter/sec",
            "range": "stddev: 0.00005827557078604973",
            "extra": "mean: 919.68132464709 usec\nrounds: 921"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 7.731459711774922,
            "unit": "iter/sec",
            "range": "stddev: 0.018214063821796876",
            "extra": "mean: 129.34168155555565 msec\nrounds: 9"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.2738586586792842,
            "unit": "iter/sec",
            "range": "stddev: 0.004388213427155837",
            "extra": "mean: 785.0164484000004 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.1116968618979343,
            "unit": "iter/sec",
            "range": "stddev: 0.11632227469373999",
            "extra": "mean: 8.9528029974 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events_basic",
            "value": 0.1672032798943432,
            "unit": "iter/sec",
            "range": "stddev: 0.007478173912716228",
            "extra": "mean: 5.980743922200008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa616d8759af6c8cadd6feb2a310e782072629a9",
          "message": "Add flow.to_code() self-describe method. (#151)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2021-02-04T13:04:32+02:00",
          "tree_id": "7e485024720b8ed5091d5d6d1f645993361022f9",
          "url": "https://github.com/mlrun/storey/commit/aa616d8759af6c8cadd6feb2a310e782072629a9"
        },
        "date": 1612437024401,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1408.019097509114,
            "unit": "iter/sec",
            "range": "stddev: 0.00005206623557524809",
            "extra": "mean: 710.2176396393139 usec\nrounds: 444"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 992.2585091114149,
            "unit": "iter/sec",
            "range": "stddev: 0.00009708121259475745",
            "extra": "mean: 1.007801889142294 msec\nrounds: 875"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.7023377593248545,
            "unit": "iter/sec",
            "range": "stddev: 0.002356931855033467",
            "extra": "mean: 149.20167199999972 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.092321429231075,
            "unit": "iter/sec",
            "range": "stddev: 0.011912994305776642",
            "extra": "mean: 915.4814445999989 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4672.7708944622445,
            "unit": "iter/sec",
            "range": "stddev: 0.000029435690521831553",
            "extra": "mean: 214.00578427354776 usec\nrounds: 2429"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3681.2611915243974,
            "unit": "iter/sec",
            "range": "stddev: 0.000048451040260162155",
            "extra": "mean: 271.6460332405546 usec\nrounds: 2527"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 62.738498769258406,
            "unit": "iter/sec",
            "range": "stddev: 0.0008166184701706584",
            "extra": "mean: 15.939176416666122 msec\nrounds: 60"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 12.617391960021441,
            "unit": "iter/sec",
            "range": "stddev: 0.007461235789297084",
            "extra": "mean: 79.25568161538675 msec\nrounds: 13"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1472.8999799368553,
            "unit": "iter/sec",
            "range": "stddev: 0.00008336837211539417",
            "extra": "mean: 678.9327270157686 usec\nrounds: 707"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 944.3296463619267,
            "unit": "iter/sec",
            "range": "stddev: 0.00033153967076697435",
            "extra": "mean: 1.0589522460218694 msec\nrounds: 817"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.667440047168985,
            "unit": "iter/sec",
            "range": "stddev: 0.00929137672405472",
            "extra": "mean: 214.25020780000068 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.9480679586444103,
            "unit": "iter/sec",
            "range": "stddev: 0.01841501965448893",
            "extra": "mean: 1.0547767075999956 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1389.5789636756347,
            "unit": "iter/sec",
            "range": "stddev: 0.000055938522490259126",
            "extra": "mean: 719.6424428841793 usec\nrounds: 1068"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 352.95944778891055,
            "unit": "iter/sec",
            "range": "stddev: 0.0033421186539527286",
            "extra": "mean: 2.8331866628430804 msec\nrounds: 436"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.7752159149316522,
            "unit": "iter/sec",
            "range": "stddev: 0.01451786766059203",
            "extra": "mean: 563.3117592000076 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.32156467271849587,
            "unit": "iter/sec",
            "range": "stddev: 0.05415391276937412",
            "extra": "mean: 3.109794342600003 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1359.8040084042718,
            "unit": "iter/sec",
            "range": "stddev: 0.0005843423984720074",
            "extra": "mean: 735.400097234232 usec\nrounds: 1121"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 941.7102029114347,
            "unit": "iter/sec",
            "range": "stddev: 0.00023154981651407893",
            "extra": "mean: 1.061897807742078 msec\nrounds: 775"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 7.1869095552341555,
            "unit": "iter/sec",
            "range": "stddev: 0.008186300691399277",
            "extra": "mean: 139.14186512500493 msec\nrounds: 8"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.1335020624906575,
            "unit": "iter/sec",
            "range": "stddev: 0.08744174883359782",
            "extra": "mean: 882.2215971999981 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.1003732592234789,
            "unit": "iter/sec",
            "range": "stddev: 0.2469387880719489",
            "extra": "mean: 9.96281288199999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events_basic",
            "value": 0.14746452031025467,
            "unit": "iter/sec",
            "range": "stddev: 0.11777316702696079",
            "extra": "mean: 6.781292190800014 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dinaleventol@gmail.com",
            "name": "Dina Nimrodi",
            "username": "dinal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac79a9b35a3ae283da395960da799cedb515f422",
          "message": "add azure support (#154)\n\n* add azure file system\r\n\r\n* add storage_options\r\n\r\nCo-authored-by: Dina Nimrodi <dinan@iguazio.com>",
          "timestamp": "2021-02-07T09:07:08+02:00",
          "tree_id": "b40b121e67eb2ce778f08acc6b770e60641aed4c",
          "url": "https://github.com/mlrun/storey/commit/ac79a9b35a3ae283da395960da799cedb515f422"
        },
        "date": 1612681917745,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1648.842396824116,
            "unit": "iter/sec",
            "range": "stddev: 0.000026589263069309045",
            "extra": "mean: 606.4861031752517 usec\nrounds: 630"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 1194.8043805739978,
            "unit": "iter/sec",
            "range": "stddev: 0.000047595202345168806",
            "extra": "mean: 836.9570921053942 usec\nrounds: 912"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 7.799659429820489,
            "unit": "iter/sec",
            "range": "stddev: 0.001666180223907856",
            "extra": "mean: 128.21072625000696 msec\nrounds: 8"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.2546884315893039,
            "unit": "iter/sec",
            "range": "stddev: 0.007175227378805086",
            "extra": "mean: 797.0106161999979 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5285.852315444525,
            "unit": "iter/sec",
            "range": "stddev: 0.000010715011030315963",
            "extra": "mean: 189.18424888227378 usec\nrounds: 2684"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 4168.863751736759,
            "unit": "iter/sec",
            "range": "stddev: 0.000030271417848086876",
            "extra": "mean: 239.87351459576908 usec\nrounds: 2672"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 67.0020217828186,
            "unit": "iter/sec",
            "range": "stddev: 0.00022265611570762244",
            "extra": "mean: 14.924922761904345 msec\nrounds: 63"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 13.356005763677043,
            "unit": "iter/sec",
            "range": "stddev: 0.005443480483640298",
            "extra": "mean: 74.87268407143078 msec\nrounds: 14"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1660.4567569788803,
            "unit": "iter/sec",
            "range": "stddev: 0.00008844195840435145",
            "extra": "mean: 602.2439282426427 usec\nrounds: 1087"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 1085.0909392449832,
            "unit": "iter/sec",
            "range": "stddev: 0.00003237667624957457",
            "extra": "mean: 921.5817438267522 usec\nrounds: 972"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 5.499996929168394,
            "unit": "iter/sec",
            "range": "stddev: 0.0018205036430003086",
            "extra": "mean: 181.81828333333291 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 1.109429394151356,
            "unit": "iter/sec",
            "range": "stddev: 0.006791384296612846",
            "extra": "mean: 901.3642556000036 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1609.9165338777038,
            "unit": "iter/sec",
            "range": "stddev: 0.00003364895424696153",
            "extra": "mean: 621.150214285559 usec\nrounds: 1148"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 407.26846582734424,
            "unit": "iter/sec",
            "range": "stddev: 0.0031196126559118733",
            "extra": "mean: 2.455382834437115 msec\nrounds: 453"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.995978782185071,
            "unit": "iter/sec",
            "range": "stddev: 0.01658845643470854",
            "extra": "mean: 501.00732980000083 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.3794440071847631,
            "unit": "iter/sec",
            "range": "stddev: 0.0399378159130255",
            "extra": "mean: 2.6354349550000107 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1674.372985008038,
            "unit": "iter/sec",
            "range": "stddev: 0.00003830553269485221",
            "extra": "mean: 597.2384940235997 usec\nrounds: 1004"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 1098.5367982290365,
            "unit": "iter/sec",
            "range": "stddev: 0.00004887489675924399",
            "extra": "mean: 910.3017774298606 usec\nrounds: 957"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 8.056340372904161,
            "unit": "iter/sec",
            "range": "stddev: 0.0008573893947895365",
            "extra": "mean: 124.12583800000476 msec\nrounds: 8"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.2655946506408284,
            "unit": "iter/sec",
            "range": "stddev: 0.014648470620406308",
            "extra": "mean: 790.1424041999974 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.11503054762760356,
            "unit": "iter/sec",
            "range": "stddev: 0.029887865328546183",
            "extra": "mean: 8.693342947800005 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events_basic",
            "value": 0.16794861987051324,
            "unit": "iter/sec",
            "range": "stddev: 0.015814943760724474",
            "extra": "mean: 5.9542019504000105 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dinaleventol@gmail.com",
            "name": "Dina Nimrodi",
            "username": "dinal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "538e8ee0e159a79ff27ea8ec7a8e347de1558880",
          "message": "rename *_column to *_field in parquet and df sources (#155)\n\nCo-authored-by: Dina Nimrodi <dinan@iguazio.com>",
          "timestamp": "2021-02-07T12:28:26+02:00",
          "tree_id": "22f7bc7e5744026349020773f4a23617cd17f0d5",
          "url": "https://github.com/mlrun/storey/commit/538e8ee0e159a79ff27ea8ec7a8e347de1558880"
        },
        "date": 1612694048259,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1492.427503210936,
            "unit": "iter/sec",
            "range": "stddev: 0.00007377546112555063",
            "extra": "mean: 670.0492974355635 usec\nrounds: 390"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 1095.226258194298,
            "unit": "iter/sec",
            "range": "stddev: 0.00008580325275808439",
            "extra": "mean: 913.0533463000623 usec\nrounds: 1054"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 7.643287577667647,
            "unit": "iter/sec",
            "range": "stddev: 0.002069999541559147",
            "extra": "mean: 130.83375312500678 msec\nrounds: 8"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.2227499002677544,
            "unit": "iter/sec",
            "range": "stddev: 0.01577293204043847",
            "extra": "mean: 817.8287315999967 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5430.464507636544,
            "unit": "iter/sec",
            "range": "stddev: 0.00002573013570972072",
            "extra": "mean: 184.14630987713088 usec\nrounds: 2359"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 4365.225808275072,
            "unit": "iter/sec",
            "range": "stddev: 0.0000540873624812361",
            "extra": "mean: 229.08322362254887 usec\nrounds: 2777"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 71.348187431056,
            "unit": "iter/sec",
            "range": "stddev: 0.0008022905405339946",
            "extra": "mean: 14.015773014083972 msec\nrounds: 71"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 14.229207202632677,
            "unit": "iter/sec",
            "range": "stddev: 0.004799344883763034",
            "extra": "mean: 70.27798427272748 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1546.6963452520395,
            "unit": "iter/sec",
            "range": "stddev: 0.00007535131078913064",
            "extra": "mean: 646.5393178627099 usec\nrounds: 711"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 1004.0871394188713,
            "unit": "iter/sec",
            "range": "stddev: 0.00013174288128155878",
            "extra": "mean: 995.9294972931962 usec\nrounds: 1108"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 5.495525775100074,
            "unit": "iter/sec",
            "range": "stddev: 0.0023672939809992",
            "extra": "mean: 181.9662104999935 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 1.1013637011776916,
            "unit": "iter/sec",
            "range": "stddev: 0.014044442880996759",
            "extra": "mean: 907.9652787999976 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1494.1255619834928,
            "unit": "iter/sec",
            "range": "stddev: 0.00006890183371133757",
            "extra": "mean: 669.2877931038624 usec\nrounds: 1044"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 397.9891953992686,
            "unit": "iter/sec",
            "range": "stddev: 0.002848405807477589",
            "extra": "mean: 2.5126310250628414 msec\nrounds: 399"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 2.000737310112917,
            "unit": "iter/sec",
            "range": "stddev: 0.014935437421401639",
            "extra": "mean: 499.81574040000396 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.36900572378948066,
            "unit": "iter/sec",
            "range": "stddev: 0.03852580691141804",
            "extra": "mean: 2.7099850639999943 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1553.9193163601137,
            "unit": "iter/sec",
            "range": "stddev: 0.00007228376319116276",
            "extra": "mean: 643.5340557722075 usec\nrounds: 771"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 994.2221904613017,
            "unit": "iter/sec",
            "range": "stddev: 0.00010014711681149205",
            "extra": "mean: 1.0058113866237661 msec\nrounds: 957"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 7.96778357383574,
            "unit": "iter/sec",
            "range": "stddev: 0.002593959910694065",
            "extra": "mean: 125.5054169999994 msec\nrounds: 8"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.1869966522297626,
            "unit": "iter/sec",
            "range": "stddev: 0.04749652766502766",
            "extra": "mean: 842.4623592000103 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.11901077162107203,
            "unit": "iter/sec",
            "range": "stddev: 0.10677089371113863",
            "extra": "mean: 8.402600759400002 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events_basic",
            "value": 0.17648212256907417,
            "unit": "iter/sec",
            "range": "stddev: 0.03399365018926317",
            "extra": "mean: 5.666296310599989 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "96358a73564e2612317d04894c189b62da0f5dda",
          "message": "Propagate events downstream from writers. (#153)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2021-02-07T14:09:16+02:00",
          "tree_id": "652d4bab9d5f30d2dfc77f315e8c97f24108fe99",
          "url": "https://github.com/mlrun/storey/commit/96358a73564e2612317d04894c189b62da0f5dda"
        },
        "date": 1612700095440,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1227.4024589543496,
            "unit": "iter/sec",
            "range": "stddev: 0.0003449565410094863",
            "extra": "mean: 814.7286920476935 usec\nrounds: 591"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 874.176807473641,
            "unit": "iter/sec",
            "range": "stddev: 0.0003261749216085028",
            "extra": "mean: 1.14393334557798 msec\nrounds: 735"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 5.409508507861847,
            "unit": "iter/sec",
            "range": "stddev: 0.010134806994529686",
            "extra": "mean: 184.85967783333024 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8868711208655191,
            "unit": "iter/sec",
            "range": "stddev: 0.030663872982749543",
            "extra": "mean: 1.1275595477999958 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3585.7837921254377,
            "unit": "iter/sec",
            "range": "stddev: 0.00009527731027884841",
            "extra": "mean: 278.8790562877914 usec\nrounds: 2505"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2909.831160016294,
            "unit": "iter/sec",
            "range": "stddev: 0.0001501225946174113",
            "extra": "mean: 343.6625511957197 usec\nrounds: 2217"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 60.70875768881673,
            "unit": "iter/sec",
            "range": "stddev: 0.0020606598611707973",
            "extra": "mean: 16.472088016128385 msec\nrounds: 62"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 12.178815210756024,
            "unit": "iter/sec",
            "range": "stddev: 0.007084622001423825",
            "extra": "mean: 82.10979333333057 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1285.0757288199575,
            "unit": "iter/sec",
            "range": "stddev: 0.0002317954578041058",
            "extra": "mean: 778.1642572288459 usec\nrounds: 1003"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 831.1045051544062,
            "unit": "iter/sec",
            "range": "stddev: 0.0004160079262078868",
            "extra": "mean: 1.203218119740809 msec\nrounds: 618"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.8722242062424153,
            "unit": "iter/sec",
            "range": "stddev: 0.005276942467315198",
            "extra": "mean: 258.2495089999952 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.7625278265581491,
            "unit": "iter/sec",
            "range": "stddev: 0.02547759077693032",
            "extra": "mean: 1.311427550799999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1264.1833969310287,
            "unit": "iter/sec",
            "range": "stddev: 0.00016481250854138892",
            "extra": "mean: 791.0244687816905 usec\nrounds: 977"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 351.8076145991567,
            "unit": "iter/sec",
            "range": "stddev: 0.0023500124159468124",
            "extra": "mean: 2.8424626372552573 msec\nrounds: 408"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.5375368997247523,
            "unit": "iter/sec",
            "range": "stddev: 0.013350920725041232",
            "extra": "mean: 650.3908948000003 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.2815416528429826,
            "unit": "iter/sec",
            "range": "stddev: 0.07945989918787445",
            "extra": "mean: 3.551872307000008 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1235.3495500409524,
            "unit": "iter/sec",
            "range": "stddev: 0.00021734280916179956",
            "extra": "mean: 809.4874847097726 usec\nrounds: 654"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 782.5882514275278,
            "unit": "iter/sec",
            "range": "stddev: 0.00023531687733524672",
            "extra": "mean: 1.277811158263479 msec\nrounds: 714"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.622743013383495,
            "unit": "iter/sec",
            "range": "stddev: 0.008417721507375988",
            "extra": "mean: 177.84913833332894 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9125628456936378,
            "unit": "iter/sec",
            "range": "stddev: 0.02665225424054769",
            "extra": "mean: 1.0958149399999968 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.09174367800693797,
            "unit": "iter/sec",
            "range": "stddev: 0.1097478085144092",
            "extra": "mean: 10.899933616399995 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events_basic",
            "value": 0.13089464528464867,
            "unit": "iter/sec",
            "range": "stddev: 0.11505436676963408",
            "extra": "mean: 7.6397319220000215 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8a0b2d8c67287b3b3fa293da657aa3898f724f1b",
          "message": "Hide class to avoid it showing up in API docs. (#158)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2021-02-08T14:25:52+02:00",
          "tree_id": "961b7ac9198514d88bfeeae4a11d457d46d8800d",
          "url": "https://github.com/mlrun/storey/commit/8a0b2d8c67287b3b3fa293da657aa3898f724f1b"
        },
        "date": 1612787554771,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1220.9721574496045,
            "unit": "iter/sec",
            "range": "stddev: 0.0001660089164535681",
            "extra": "mean: 819.01949516099 usec\nrounds: 620"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 774.0160179271588,
            "unit": "iter/sec",
            "range": "stddev: 0.00046861198937760216",
            "extra": "mean: 1.2919629269146573 msec\nrounds: 862"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.991077455823278,
            "unit": "iter/sec",
            "range": "stddev: 0.005808564959282626",
            "extra": "mean: 200.35753980000095 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7788363219841756,
            "unit": "iter/sec",
            "range": "stddev: 0.02480052388391372",
            "extra": "mean: 1.283966825599998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3207.7300615751315,
            "unit": "iter/sec",
            "range": "stddev: 0.0001025972740267677",
            "extra": "mean: 311.7469303227335 usec\nrounds: 2325"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2554.395076354917,
            "unit": "iter/sec",
            "range": "stddev: 0.00011826214751420472",
            "extra": "mean: 391.48212007477906 usec\nrounds: 2132"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 51.0253086282235,
            "unit": "iter/sec",
            "range": "stddev: 0.0010296749549772684",
            "extra": "mean: 19.598117618182762 msec\nrounds: 55"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.039506617646968,
            "unit": "iter/sec",
            "range": "stddev: 0.007598755080790585",
            "extra": "mean: 99.6064884545469 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1151.9396673116914,
            "unit": "iter/sec",
            "range": "stddev: 0.0004209671536910432",
            "extra": "mean: 868.1010198509123 usec\nrounds: 806"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 703.1860659452734,
            "unit": "iter/sec",
            "range": "stddev: 0.0004018258051795016",
            "extra": "mean: 1.4220987138812655 msec\nrounds: 706"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.164766756016006,
            "unit": "iter/sec",
            "range": "stddev: 0.02183070528075626",
            "extra": "mean: 315.979052199998 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6563845671313203,
            "unit": "iter/sec",
            "range": "stddev: 0.02311936062813499",
            "extra": "mean: 1.5234971236000034 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1074.7240417433006,
            "unit": "iter/sec",
            "range": "stddev: 0.00055213992040252",
            "extra": "mean: 930.4714151345387 usec\nrounds: 925"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 301.0667506795448,
            "unit": "iter/sec",
            "range": "stddev: 0.003316320182482818",
            "extra": "mean: 3.3215225452258568 msec\nrounds: 398"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.364290934055045,
            "unit": "iter/sec",
            "range": "stddev: 0.0486866203329967",
            "extra": "mean: 732.981488799993 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.2530411995822243,
            "unit": "iter/sec",
            "range": "stddev: 0.05486498255229844",
            "extra": "mean: 3.951925621800001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1113.336309110968,
            "unit": "iter/sec",
            "range": "stddev: 0.0002423633852502182",
            "extra": "mean: 898.2011920535762 usec\nrounds: 906"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 725.159812778643,
            "unit": "iter/sec",
            "range": "stddev: 0.0002715857754847889",
            "extra": "mean: 1.3790063684972194 msec\nrounds: 692"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.135261145561107,
            "unit": "iter/sec",
            "range": "stddev: 0.0034693661531598366",
            "extra": "mean: 194.73206359999722 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.7644105734975468,
            "unit": "iter/sec",
            "range": "stddev: 0.05722838963262348",
            "extra": "mean: 1.3081974983999998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.07762754984718187,
            "unit": "iter/sec",
            "range": "stddev: 0.07283550902922933",
            "extra": "mean: 12.88202451279999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events_basic",
            "value": 0.11307269374474849,
            "unit": "iter/sec",
            "range": "stddev: 0.20975504178941923",
            "extra": "mean: 8.843868195599999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "katyak@iguazio.com",
            "name": "Katya Katsenelenbogen",
            "username": "katyakats"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b2d2f93e37d92f7236b9d6c97dd74aae6c4f563",
          "message": "IG-17936: deprecate return_awaitable_result in contoller.emit. they a… (#152)\n\n* IG-17936: deprecate return_awaitable_result in contoller.emit. they are replaced by having Complete() in the flow\r\n\r\n* minor fix\r\n\r\n* PR comments\r\n\r\n* PR comments2\r\n\r\n* minor pr fixes",
          "timestamp": "2021-02-08T16:41:49+02:00",
          "tree_id": "d42b43986baaab6b66164a341ef3f417a3637156",
          "url": "https://github.com/mlrun/storey/commit/8b2d2f93e37d92f7236b9d6c97dd74aae6c4f563"
        },
        "date": 1612795697214,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1294.1118740709096,
            "unit": "iter/sec",
            "range": "stddev: 0.00045029252883325516",
            "extra": "mean: 772.7307198366731 usec\nrounds: 489"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 910.8435221598743,
            "unit": "iter/sec",
            "range": "stddev: 0.0001908336106825117",
            "extra": "mean: 1.097883418689425 msec\nrounds: 824"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.450276263305074,
            "unit": "iter/sec",
            "range": "stddev: 0.0023863132737729394",
            "extra": "mean: 155.0321194285727 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.9678328581983078,
            "unit": "iter/sec",
            "range": "stddev: 0.047650788568566374",
            "extra": "mean: 1.0332362572000022 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4410.639433696812,
            "unit": "iter/sec",
            "range": "stddev: 0.000012364268761375862",
            "extra": "mean: 226.72449540084986 usec\nrounds: 2283"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3366.9119158772446,
            "unit": "iter/sec",
            "range": "stddev: 0.000059444222605630295",
            "extra": "mean: 297.00806703149266 usec\nrounds: 2193"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 55.60305499885112,
            "unit": "iter/sec",
            "range": "stddev: 0.00021036311984712865",
            "extra": "mean: 17.984623327273333 msec\nrounds: 55"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 11.087295559186389,
            "unit": "iter/sec",
            "range": "stddev: 0.009005598036918142",
            "extra": "mean: 90.19332033332954 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1218.883193904061,
            "unit": "iter/sec",
            "range": "stddev: 0.00035869732905784033",
            "extra": "mean: 820.423158676114 usec\nrounds: 876"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 812.6031292838202,
            "unit": "iter/sec",
            "range": "stddev: 0.00032154586264638885",
            "extra": "mean: 1.2306130310885464 msec\nrounds: 579"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.8719074633693435,
            "unit": "iter/sec",
            "range": "stddev: 0.016345070267957798",
            "extra": "mean: 258.27063519999456 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.7868174840035626,
            "unit": "iter/sec",
            "range": "stddev: 0.05879882780183317",
            "extra": "mean: 1.2709427793999963 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1131.5399231709605,
            "unit": "iter/sec",
            "range": "stddev: 0.0006439098170121216",
            "extra": "mean: 883.7514077255526 usec\nrounds: 699"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 296.00329561284275,
            "unit": "iter/sec",
            "range": "stddev: 0.00836712565532109",
            "extra": "mean: 3.37834076451618 msec\nrounds: 310"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.3663446298584703,
            "unit": "iter/sec",
            "range": "stddev: 0.0781599679511235",
            "extra": "mean: 731.8797747999952 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.2752116633596807,
            "unit": "iter/sec",
            "range": "stddev: 0.1367858443322983",
            "extra": "mean: 3.6335669345999917 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1009.6888650955661,
            "unit": "iter/sec",
            "range": "stddev: 0.0007665869952448051",
            "extra": "mean: 990.4041082055023 usec\nrounds: 841"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 698.0815008707556,
            "unit": "iter/sec",
            "range": "stddev: 0.0007553327018945239",
            "extra": "mean: 1.4324974931331727 msec\nrounds: 801"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.278004428884762,
            "unit": "iter/sec",
            "range": "stddev: 0.010624965447452296",
            "extra": "mean: 159.28628457142426 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9104644975780046,
            "unit": "iter/sec",
            "range": "stddev: 0.09172966085930796",
            "extra": "mean: 1.0983404653999969 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.09262399050960121,
            "unit": "iter/sec",
            "range": "stddev: 0.053052951795447965",
            "extra": "mean: 10.79633898840001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events_basic",
            "value": 0.13833217385643032,
            "unit": "iter/sec",
            "range": "stddev: 0.044930574732783904",
            "extra": "mean: 7.228976254199995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "katyak@iguazio.com",
            "name": "Katya Katsenelenbogen",
            "username": "katyakats"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "13a49ec93f41c6e99064bfbf4d457142107fd76f",
          "message": "sphinx documentation: first commit (#157)\n\n* sphinx documentation: first commit\r\n\r\n* minor fix\r\n\r\n* makefile fixes\r\n\r\n* adding sub sections in api and some minor fixes\r\n\r\n* minor fixes\r\n\r\n* minor fixes",
          "timestamp": "2021-02-09T10:02:23+02:00",
          "tree_id": "cf162f7cc75921b1c901398a2f91f266ce68fd94",
          "url": "https://github.com/mlrun/storey/commit/13a49ec93f41c6e99064bfbf4d457142107fd76f"
        },
        "date": 1612858410885,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1056.5513710207997,
            "unit": "iter/sec",
            "range": "stddev: 0.0005829796351707494",
            "extra": "mean: 946.4755121502876 usec\nrounds: 535"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 777.8139307912704,
            "unit": "iter/sec",
            "range": "stddev: 0.0003764796626176826",
            "extra": "mean: 1.2856545253473406 msec\nrounds: 651"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.240379555559919,
            "unit": "iter/sec",
            "range": "stddev: 0.03199316592264931",
            "extra": "mean: 235.827945799997 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7728587167929872,
            "unit": "iter/sec",
            "range": "stddev: 0.01725858449910998",
            "extra": "mean: 1.2938975497999763 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3254.406217768331,
            "unit": "iter/sec",
            "range": "stddev: 0.00009726676041250876",
            "extra": "mean: 307.27571577887954 usec\nrounds: 2199"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2565.4740142601163,
            "unit": "iter/sec",
            "range": "stddev: 0.00014309242627946197",
            "extra": "mean: 389.79151394304824 usec\nrounds: 2331"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 49.76145781666072,
            "unit": "iter/sec",
            "range": "stddev: 0.0016313746322179808",
            "extra": "mean: 20.09587427451107 msec\nrounds: 51"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 9.765835324395011,
            "unit": "iter/sec",
            "range": "stddev: 0.009539537396738608",
            "extra": "mean: 102.39779463636917 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1153.4999899903146,
            "unit": "iter/sec",
            "range": "stddev: 0.0003061045317129909",
            "extra": "mean: 866.9267522129727 usec\nrounds: 904"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 680.7417302486872,
            "unit": "iter/sec",
            "range": "stddev: 0.0006862625977624099",
            "extra": "mean: 1.4689858951862433 msec\nrounds: 706"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.9800838031277843,
            "unit": "iter/sec",
            "range": "stddev: 0.020265670269974875",
            "extra": "mean: 335.56103319995145 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.5795843389061787,
            "unit": "iter/sec",
            "range": "stddev: 0.039783855738233946",
            "extra": "mean: 1.7253744327999812 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 925.9185073270127,
            "unit": "iter/sec",
            "range": "stddev: 0.0014335800429302267",
            "extra": "mean: 1.080008653123102 msec\nrounds: 689"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 294.0165266327693,
            "unit": "iter/sec",
            "range": "stddev: 0.005401544894850143",
            "extra": "mean: 3.4011693541601957 msec\nrounds: 336"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.3461021391088999,
            "unit": "iter/sec",
            "range": "stddev: 0.04082712353143776",
            "extra": "mean: 742.8856778000409 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.23395688138225995,
            "unit": "iter/sec",
            "range": "stddev: 0.14644211037058358",
            "extra": "mean: 4.274291886999936 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1098.8054732686674,
            "unit": "iter/sec",
            "range": "stddev: 0.0005546227881330398",
            "extra": "mean: 910.0791944776666 usec\nrounds: 833"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 678.4992294359836,
            "unit": "iter/sec",
            "range": "stddev: 0.0009181851650592588",
            "extra": "mean: 1.4738410253336183 msec\nrounds: 671"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.7639493809207805,
            "unit": "iter/sec",
            "range": "stddev: 0.007860476178021698",
            "extra": "mean: 209.9098710000817 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.741681727731747,
            "unit": "iter/sec",
            "range": "stddev: 0.04228076726818945",
            "extra": "mean: 1.3482872269999917 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.0738882206387231,
            "unit": "iter/sec",
            "range": "stddev: 0.37445315976442856",
            "extra": "mean: 13.533956987400007 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events_basic",
            "value": 0.11102148937648111,
            "unit": "iter/sec",
            "range": "stddev: 0.0590003562105693",
            "extra": "mean: 9.007265220600084 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dinaleventol@gmail.com",
            "name": "Dina Nimrodi",
            "username": "dinal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a9ed3beebc3bfbdb818d7fc22b6ddfc3ebcc4bff",
          "message": "Doc (#159)\n\n* sphinx documentation: first commit\r\n\r\n* minor fix\r\n\r\n* makefile fixes\r\n\r\n* table, aggrs and dtypes doc\r\n\r\nCo-authored-by: katyak <katyak@iguazio.com>\r\nCo-authored-by: Dina Nimrodi <dinan@iguazio.com>",
          "timestamp": "2021-02-09T11:23:12+02:00",
          "tree_id": "9aadb97a5d0a6bc497264fa1ef929b2c195d20a9",
          "url": "https://github.com/mlrun/storey/commit/a9ed3beebc3bfbdb818d7fc22b6ddfc3ebcc4bff"
        },
        "date": 1612863116826,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1175.8671396426205,
            "unit": "iter/sec",
            "range": "stddev: 0.0008684834351520439",
            "extra": "mean: 850.4362153567183 usec\nrounds: 534"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 900.6032636926936,
            "unit": "iter/sec",
            "range": "stddev: 0.0004848798896562802",
            "extra": "mean: 1.1103668399998412 msec\nrounds: 800"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.204139537858957,
            "unit": "iter/sec",
            "range": "stddev: 0.011003497302010721",
            "extra": "mean: 161.18270614285686 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 1.0113996464297081,
            "unit": "iter/sec",
            "range": "stddev: 0.018601542295159024",
            "extra": "mean: 988.7288408000245 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4436.492764599782,
            "unit": "iter/sec",
            "range": "stddev: 0.000014335634328503062",
            "extra": "mean: 225.4032753032587 usec\nrounds: 2223"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3487.7908366609836,
            "unit": "iter/sec",
            "range": "stddev: 0.000039498049021600906",
            "extra": "mean: 286.71444098332006 usec\nrounds: 2279"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 57.03399331199079,
            "unit": "iter/sec",
            "range": "stddev: 0.0001633223199032652",
            "extra": "mean: 17.533403185180102 msec\nrounds: 54"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 11.31852796744771,
            "unit": "iter/sec",
            "range": "stddev: 0.008466317040376745",
            "extra": "mean: 88.35071158334529 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1262.0125961655779,
            "unit": "iter/sec",
            "range": "stddev: 0.00039932282550526286",
            "extra": "mean: 792.3851180553498 usec\nrounds: 864"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 795.4030952766437,
            "unit": "iter/sec",
            "range": "stddev: 0.0006461290906119225",
            "extra": "mean: 1.2572241746836512 msec\nrounds: 790"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.031001256838636,
            "unit": "iter/sec",
            "range": "stddev: 0.010222893805573488",
            "extra": "mean: 248.07732280000891 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.8572852587886933,
            "unit": "iter/sec",
            "range": "stddev: 0.04663280749312015",
            "extra": "mean: 1.166472874400006 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1283.2748313129734,
            "unit": "iter/sec",
            "range": "stddev: 0.00031931320767791615",
            "extra": "mean: 779.2563023907023 usec\nrounds: 711"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 351.1829731213363,
            "unit": "iter/sec",
            "range": "stddev: 0.004700975944138942",
            "extra": "mean: 2.8475184634150605 msec\nrounds: 410"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.6576539870203666,
            "unit": "iter/sec",
            "range": "stddev: 0.025571198874937775",
            "extra": "mean: 603.2622053999944 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.29152441970685217,
            "unit": "iter/sec",
            "range": "stddev: 0.1321878003591239",
            "extra": "mean: 3.4302443720000158 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1254.1914645129941,
            "unit": "iter/sec",
            "range": "stddev: 0.00035594505480228075",
            "extra": "mean: 797.3264276585573 usec\nrounds: 940"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 827.9674897747756,
            "unit": "iter/sec",
            "range": "stddev: 0.00027937747703615724",
            "extra": "mean: 1.2077768902158474 msec\nrounds: 838"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.659141101544688,
            "unit": "iter/sec",
            "range": "stddev: 0.0031837796760009972",
            "extra": "mean: 150.16951657144415 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.018312579470563,
            "unit": "iter/sec",
            "range": "stddev: 0.0548616941737014",
            "extra": "mean: 982.0167404000017 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.09311909782334135,
            "unit": "iter/sec",
            "range": "stddev: 0.11208409446949967",
            "extra": "mean: 10.73893565740001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events_basic",
            "value": 0.14231128397038667,
            "unit": "iter/sec",
            "range": "stddev: 0.042833760738586656",
            "extra": "mean: 7.026849678399981 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "katyak@iguazio.com",
            "name": "Katya Katsenelenbogen",
            "username": "katyakats"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d3bec7ffc93d8311ba59d823ee60407867ead10",
          "message": "Sphinx documentation (#161)\n\n* sphinx documentation: first commit\r\n\r\n* minor fix\r\n\r\n* makefile fixes\r\n\r\n* adding sub sections in api and some minor fixes\r\n\r\n* minor fixes\r\n\r\n* minor fixes\r\n\r\n* documentation of sources and writers\r\n\r\n* bug fix",
          "timestamp": "2021-02-10T11:27:28+02:00",
          "tree_id": "6cf7fc0d72c7ba02bf12201d2309b4c7bb2a353a",
          "url": "https://github.com/mlrun/storey/commit/6d3bec7ffc93d8311ba59d823ee60407867ead10"
        },
        "date": 1612949790496,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1318.7416625977376,
            "unit": "iter/sec",
            "range": "stddev: 0.00018004291161238448",
            "extra": "mean: 758.2986329787589 usec\nrounds: 564"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 891.2389640160504,
            "unit": "iter/sec",
            "range": "stddev: 0.0003842127130978907",
            "extra": "mean: 1.1220335290255452 msec\nrounds: 913"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 5.437964719458377,
            "unit": "iter/sec",
            "range": "stddev: 0.014649349381098868",
            "extra": "mean: 183.89232949999723 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8747522603626182,
            "unit": "iter/sec",
            "range": "stddev: 0.017759944541041604",
            "extra": "mean: 1.1431808128000285 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3660.305537708387,
            "unit": "iter/sec",
            "range": "stddev: 0.00009111216400242753",
            "extra": "mean: 273.2012368087915 usec\nrounds: 2597"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2844.819597463384,
            "unit": "iter/sec",
            "range": "stddev: 0.00014793846325897764",
            "extra": "mean: 351.5161386302532 usec\nrounds: 2366"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 58.14974250679249,
            "unit": "iter/sec",
            "range": "stddev: 0.0007857076477240321",
            "extra": "mean: 17.19698070689117 msec\nrounds: 58"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 11.607792168019753,
            "unit": "iter/sec",
            "range": "stddev: 0.007588134061007729",
            "extra": "mean: 86.1490269230584 msec\nrounds: 13"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1258.5082769161806,
            "unit": "iter/sec",
            "range": "stddev: 0.00019762682018913087",
            "extra": "mean: 794.5915162754246 usec\nrounds: 891"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 789.3131985523689,
            "unit": "iter/sec",
            "range": "stddev: 0.00031297260305601724",
            "extra": "mean: 1.266924209343058 msec\nrounds: 578"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.416908014952875,
            "unit": "iter/sec",
            "range": "stddev: 0.008904817065082865",
            "extra": "mean: 292.6622535999968 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.7051561884740579,
            "unit": "iter/sec",
            "range": "stddev: 0.033033039532447926",
            "extra": "mean: 1.4181255392000138 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1287.2122713179033,
            "unit": "iter/sec",
            "range": "stddev: 0.0001728487648052499",
            "extra": "mean: 776.8726435276732 usec\nrounds: 533"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 341.0729866877868,
            "unit": "iter/sec",
            "range": "stddev: 0.004151405093087784",
            "extra": "mean: 2.9319237788696104 msec\nrounds: 407"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.4548129014242404,
            "unit": "iter/sec",
            "range": "stddev: 0.05090507268593428",
            "extra": "mean: 687.3736127999791 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.2673649533833339,
            "unit": "iter/sec",
            "range": "stddev: 0.05463490503024683",
            "extra": "mean: 3.7402059894000104 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1293.1855145284753,
            "unit": "iter/sec",
            "range": "stddev: 0.00020116187642782058",
            "extra": "mean: 773.2842571814784 usec\nrounds: 696"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 806.0773952138634,
            "unit": "iter/sec",
            "range": "stddev: 0.00025017829910207995",
            "extra": "mean: 1.2405756642446055 msec\nrounds: 825"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 5.724781321177817,
            "unit": "iter/sec",
            "range": "stddev: 0.011430285684650135",
            "extra": "mean: 174.6791613333206 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.869110758619891,
            "unit": "iter/sec",
            "range": "stddev: 0.039436723674750776",
            "extra": "mean: 1.150601335999977 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.09092960515044478,
            "unit": "iter/sec",
            "range": "stddev: 0.19445055078441906",
            "extra": "mean: 10.997518336799999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events_basic",
            "value": 0.11461506750933088,
            "unit": "iter/sec",
            "range": "stddev: 0.5824440060797116",
            "extra": "mean: 8.724856353799987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7359e131b11c341dccdde3d4ea83fee4f8844198",
          "message": "Documentation and imports. (#160)\n\n* Documentation and imports.\r\n\r\n* Rename section.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2021-02-10T11:27:55+02:00",
          "tree_id": "61bd630cbe4d7967e6337ef4af54b7004bb3fc89",
          "url": "https://github.com/mlrun/storey/commit/7359e131b11c341dccdde3d4ea83fee4f8844198"
        },
        "date": 1612949796405,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1346.4592151096972,
            "unit": "iter/sec",
            "range": "stddev: 0.0001540394988496095",
            "extra": "mean: 742.6886672676003 usec\nrounds: 553"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 904.0406919504351,
            "unit": "iter/sec",
            "range": "stddev: 0.0003451215696353109",
            "extra": "mean: 1.106144899122335 msec\nrounds: 912"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 5.874693515771042,
            "unit": "iter/sec",
            "range": "stddev: 0.0034347847835219823",
            "extra": "mean: 170.22164599998746 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.9615183585933768,
            "unit": "iter/sec",
            "range": "stddev: 0.02659319372011105",
            "extra": "mean: 1.0400217438000028 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3580.0225720671733,
            "unit": "iter/sec",
            "range": "stddev: 0.00009176222359535227",
            "extra": "mean: 279.3278477634237 usec\nrounds: 2437"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2831.0642241738806,
            "unit": "iter/sec",
            "range": "stddev: 0.00009656796513746787",
            "extra": "mean: 353.2240602177809 usec\nrounds: 2026"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 58.60663573338761,
            "unit": "iter/sec",
            "range": "stddev: 0.001081390249476728",
            "extra": "mean: 17.062914250003775 msec\nrounds: 60"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 10.87437131342381,
            "unit": "iter/sec",
            "range": "stddev: 0.008627768963514113",
            "extra": "mean: 91.95933918180219 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1266.3836553418435,
            "unit": "iter/sec",
            "range": "stddev: 0.0001812162233106194",
            "extra": "mean: 789.6501157305787 usec\nrounds: 890"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 807.9639850699106,
            "unit": "iter/sec",
            "range": "stddev: 0.00017447070358859348",
            "extra": "mean: 1.2376789293565769 msec\nrounds: 637"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.4120091834855346,
            "unit": "iter/sec",
            "range": "stddev: 0.007898513697816368",
            "extra": "mean: 293.0824467999969 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.703082934438176,
            "unit": "iter/sec",
            "range": "stddev: 0.046565067869285964",
            "extra": "mean: 1.4223073139999998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1296.925580209225,
            "unit": "iter/sec",
            "range": "stddev: 0.00010940971126791588",
            "extra": "mean: 771.0542649938913 usec\nrounds: 717"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 358.50141502726416,
            "unit": "iter/sec",
            "range": "stddev: 0.004514385507525913",
            "extra": "mean: 2.789389269004558 msec\nrounds: 342"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.4953585608993918,
            "unit": "iter/sec",
            "range": "stddev: 0.04353047954044262",
            "extra": "mean: 668.7359313999877 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.27008029930608135,
            "unit": "iter/sec",
            "range": "stddev: 0.15488391863224638",
            "extra": "mean: 3.702602531800005 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1309.407528073225,
            "unit": "iter/sec",
            "range": "stddev: 0.00012900079722289072",
            "extra": "mean: 763.7041780808196 usec\nrounds: 657"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 846.3057288810946,
            "unit": "iter/sec",
            "range": "stddev: 0.0001988876063859344",
            "extra": "mean: 1.1816060861623912 msec\nrounds: 766"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.0502500370701515,
            "unit": "iter/sec",
            "range": "stddev: 0.005902644546239375",
            "extra": "mean: 165.28242533332596 msec\nrounds: 6"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.0277173184069004,
            "unit": "iter/sec",
            "range": "stddev: 0.010219354994626647",
            "extra": "mean: 973.0302118000054 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.09181744786219033,
            "unit": "iter/sec",
            "range": "stddev: 0.12652548379403433",
            "extra": "mean: 10.891176168400033 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events_basic",
            "value": 0.13490761520318642,
            "unit": "iter/sec",
            "range": "stddev: 0.12121005518619914",
            "extra": "mean: 7.412480003399992 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "katyak@iguazio.com",
            "name": "Katya Katsenelenbogen",
            "username": "katyakats"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68eda0d77b93e3484c65e0885ad00bf041a22aec",
          "message": "Merge pull request #162 from katyakats/sphinx_documentation\n\nSphinx documentation",
          "timestamp": "2021-02-10T11:46:38+02:00",
          "tree_id": "291667c736c364272475b58f8071a37bd08c506f",
          "url": "https://github.com/mlrun/storey/commit/68eda0d77b93e3484c65e0885ad00bf041a22aec"
        },
        "date": 1612950891403,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1306.7817798078083,
            "unit": "iter/sec",
            "range": "stddev: 0.00006015850455618347",
            "extra": "mean: 765.2387073739828 usec\nrounds: 434"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 903.6725793969517,
            "unit": "iter/sec",
            "range": "stddev: 0.0002442621713507347",
            "extra": "mean: 1.1065954891176741 msec\nrounds: 873"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 6.17476378363979,
            "unit": "iter/sec",
            "range": "stddev: 0.008062051149674329",
            "extra": "mean: 161.9495149999953 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.9426046956417674,
            "unit": "iter/sec",
            "range": "stddev: 0.038579082885327326",
            "extra": "mean: 1.0608901108000055 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4460.267316577707,
            "unit": "iter/sec",
            "range": "stddev: 0.000015018494287140575",
            "extra": "mean: 224.20180877573148 usec\nrounds: 1846"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3404.8399337356923,
            "unit": "iter/sec",
            "range": "stddev: 0.000054038885877236686",
            "extra": "mean: 293.69956281698944 usec\nrounds: 1974"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 56.846293163766816,
            "unit": "iter/sec",
            "range": "stddev: 0.00009139617187897971",
            "extra": "mean: 17.591296535714815 msec\nrounds: 56"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 11.086563550058326,
            "unit": "iter/sec",
            "range": "stddev: 0.012203355606871807",
            "extra": "mean: 90.1992755000028 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1204.0254144642513,
            "unit": "iter/sec",
            "range": "stddev: 0.00028528944240585277",
            "extra": "mean: 830.547252563572 usec\nrounds: 780"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 835.8166310558948,
            "unit": "iter/sec",
            "range": "stddev: 0.00038608165677842963",
            "extra": "mean: 1.1964346757932907 msec\nrounds: 694"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 4.4408584137748495,
            "unit": "iter/sec",
            "range": "stddev: 0.004855029001300432",
            "extra": "mean: 225.1816893999944 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.8508598632539103,
            "unit": "iter/sec",
            "range": "stddev: 0.04289553330420002",
            "extra": "mean: 1.1752816688000052 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1289.093461807538,
            "unit": "iter/sec",
            "range": "stddev: 0.0002558513062372762",
            "extra": "mean: 775.7389433950137 usec\nrounds: 530"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 303.2532155204643,
            "unit": "iter/sec",
            "range": "stddev: 0.010718305647756467",
            "extra": "mean: 3.2975742673782706 msec\nrounds: 374"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 1.550726962315279,
            "unit": "iter/sec",
            "range": "stddev: 0.06061755450678871",
            "extra": "mean: 644.8588463999954 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.29352979959112563,
            "unit": "iter/sec",
            "range": "stddev: 0.13679938278204398",
            "extra": "mean: 3.4068091260000073 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1398.5782077209135,
            "unit": "iter/sec",
            "range": "stddev: 0.00005712085010976322",
            "extra": "mean: 715.0118559544653 usec\nrounds: 722"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 880.0848269407804,
            "unit": "iter/sec",
            "range": "stddev: 0.00016110202593886715",
            "extra": "mean: 1.1362541080000788 msec\nrounds: 750"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 6.752716780991069,
            "unit": "iter/sec",
            "range": "stddev: 0.0007994062090336297",
            "extra": "mean: 148.0885445714242 msec\nrounds: 7"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 1.0404248221016585,
            "unit": "iter/sec",
            "range": "stddev: 0.01598923012200177",
            "extra": "mean: 961.1458500000026 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events",
            "value": 0.08672552516715436,
            "unit": "iter/sec",
            "range": "stddev: 0.1971904858969551",
            "extra": "mean: 11.530630665800004 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_df_86420_events_basic",
            "value": 0.13407371988072336,
            "unit": "iter/sec",
            "range": "stddev: 0.10126174664995817",
            "extra": "mean: 7.458583239799975 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}