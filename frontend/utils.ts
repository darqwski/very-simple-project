export const saveResultsMap =async (resultsMap: Record<number, boolean>) => {
    console.log(JSON.stringify(resultsMap))
   await fetch('/API/save', { body: JSON.stringify(resultsMap), method: 'POST', headers: { 'Content-Type': 'application/json'} });

}
export const downloadResultsMap =async () : Promise<number[]> => {
   return  fetch('/API/save').then(res=>res.json());
}
