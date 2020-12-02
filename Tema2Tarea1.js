let a = 'Are you ready?';
let b = a.length-1;
let c=[];
let d=[];
let j=0;

for (i=0;i<=b;i++){
    c[i]=a.slice(i,i+1);
}

for (i=c.length-1;i>=0;i--){
    d[j]=c[i];
    j++;
}
//CAmbios introducidos
for (i=0;i<=d.length-2;i++){
    e=d[i];
    d[i]=d[i+1];
    d[i+1]=e;
    i++;
}


