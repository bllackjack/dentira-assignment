const fetchDataFromAmazon = (query) => {
    return []
}

const fetchDataFromFlipkart = (query) => {
    return []
}


exports.handleData = (query) => {
    return {
        results: {
            amazon: fetchDataFromAmazon(query),
            flipkart: fetchDataFromFlipkart(query),
            croma: [],
            reliance_digital: []
        }
    }
}