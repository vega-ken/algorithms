// given 2 versions, check if FE version is lesser than BE version

// appVersionBE , appVersionFE , expectedResult

// 2.0.8        , 2.0.8        , true
// 2.0.8        , 2.0.6        , false
// 2.0.8        , 2.0.9        , true
// 2.0.8        , 2.1.6        , true // TODO: it fails this condition
// 2.1.7        , 2.0.6        , false


const appVersionBE = "2.0.8";
const appVersionFE = "2.1.6";
console.log('appVersionBE: ', appVersionBE);
console.log('appVersionFE: ', appVersionFE);

const isLastVersionInstalled = (appVersionBE, appVersionFE) => {
  // split the versions with the dots
  let numbersBE = appVersionBE.split('.');
  let numbersFE = appVersionFE.split('.');

  let res = true;

  // compare the version from minor to major index
  // if a FE number is lesser than its respective BE number, then is not the last version installed

  if (parseInt(numbersFE[0]) < parseInt(numbersBE[0])) {
    res = false;
  } else if (parseInt(numbersFE[1]) < parseInt(numbersBE[1])) {
    res = false;
  } else if (parseInt(numbersFE[2]) < parseInt(numbersBE[2])) {
    res = false;
  }

  return res;
}

const res = isLastVersionInstalled(appVersionBE, appVersionFE);

console.log('isLastVersionInstalled: ', res);
