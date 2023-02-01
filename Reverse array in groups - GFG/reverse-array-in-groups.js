//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let N = input_ar0[0];
        let K = input_ar0[1];
        let arr = new Array(N);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        obj.reverseInGroups(arr, N, K);
        let S = '';
        for(let i=0;i<N;i++)
        {
            S+=arr[i];
            S+=' ';
        }
        console.log(S);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 */
 
class Solution {
    //Function to reverse every sub-array group of size k.
    reverseInGroups(arr, n, k){
        // code here
    let l = 0;
    while(l<n){
        let next = l+k-1 < n ? l+k-1 : n-1;
        let r = next;
        while(l<=r){
            [arr[l],arr[r]] = [arr[r],arr[l]];
            l++;
            r--;
        }
        l = next+1;
    }
    }
}