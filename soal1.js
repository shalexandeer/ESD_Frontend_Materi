function hitungReview(rating){
    const ratingTerendah = Math.min(...rating);
    const ratingTertinggi = Math.max(...rating);
  
    const totalRating = rating.reduce((total, value) => total + value, 0);
    const ratarata = (totalRating / rating.length).toFixed(1);
  
    return[ratingTerendah, ratingTertinggi, parseFloat(ratarata)]
  }
  
  const reviews1 = [4.5, 2.0, 1.5, 3.0, 2.5, 4.0, 5.0, 3.5, 2.0, 1.0];
  const hasil1 = hitungReview(reviews1);
  console.log(hasil1);
  
  const reviews2 = [5, 4, 2.5, 5, 3.6, 1.1, 3.6, 4, 4.2, 1.5];
  const hasil2 = hitungReview(reviews2);
  console.log(hasil2);