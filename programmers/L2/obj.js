const obj = {
    register : {
        start : {
            "id": 23,
            "feeBenefitId": 1,
            "type": "0",
            "subType": "0",
            "exclude": null,
            "val": "2021-01-01"
        },
        end :{
            "id": 24,
            "feeBenefitId": 1,
            "type": "0",
            "subType": "1",
            "exclude": null,
            "val": "2021-04-01"
        },
    }
}
data.forEach((v=>{
    switch (v.type) {
        case '0':
        if (v.subType==='0') {
            obj['register']['start'] = v;
            break;
        } else {
            obj['register']['end'] = v;
            break;
        }
        case '1':
        if(v.subType==='0') {
            obj['remittance']
        }
    }
}))

const data =[{
    "id": 23,
    "feeBenefitId": 1,
    "type": "0",
    "subType": "0",
    "exclude": null,
    "val": "2021-01-01"
},
{
    "id": 24,
    "feeBenefitId": 1,
    "type": "0",
    "subType": "1",
    "exclude": null,
    "val": "2021-04-01"
},
{
    "id": 25,
    "feeBenefitId": 1,
    "type": "1",
    "subType": "0",
    "exclude": null,
    "val": "2021-01-01"
},
{
    "id": 26,
    "feeBenefitId": 1,
    "type": "1",
    "subType": "1",
    "exclude": null,
    "val": "2021-04-01"
},
{
    "id": 27,
    "feeBenefitId": 1,
    "type": "1",
    "subType": "2",
    "exclude": null,
    "val": "1"
},
{
    "id": 28,
    "feeBenefitId": 1,
    "type": "1",
    "subType": "3",
    "exclude": null,
    "val": "100"
},
{
    "id": 35,
    "feeBenefitId": 1,
    "type": "6",
    "subType": "8",
    "exclude": null,
    "val": "0"
},
{
    "id": 1,
    "feeBenefitId": 1,
    "type": "7",
    "subType": "9",
    "exclude": null,
    "val": "CHRISTMAS"
}]