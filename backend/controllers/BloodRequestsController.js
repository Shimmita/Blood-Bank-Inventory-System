const BloodRequestModal = require("../model/BloodRequestModal");
const HospitalModal = require("../model/HospitalModal");

const handleBloodRequestCreate = async (req, res) => {
  console.log(req.body);

  
  try {
    // Fetch hospital data from MongoDB
    const hospitals = await HospitalModal.find({});

    let closestHospital = null;
    let shortestDistance = Infinity;

    // Reference point (New York)
    const referenceLat = -1.286389;
    const referenceLon =  36.817223;
  
    // Iterate through the array of hospitals to find the nearest one
    hospitals.forEach(hospital => {
      const distance = calculateDistance(referenceLat, referenceLon, hospital.lat, hospital.lon);
      if (distance < shortestDistance) {
        shortestDistance = distance;
        closestHospital = hospital;
      }
    });

    // Use the closest hospital in blood request creation
    const bloodRequestData = {
      ...req.body,
      senderHospID:req.body.senderHospitalID,
      quantity:req.body.quantity,
      doctor:req.body.doctor,
      recipientHospID:closestHospital._id ,
      bloodgroup:req.body.bloodgroup// Assuming nearestHospital field exists in BloodRequestModal schema
    };
    const bloodRequest = await BloodRequestModal.create(bloodRequestData);

    res.status(200).json(bloodRequest);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

const handleBloodRequestGetAll = async (req, res) => {
  try {
    const bloodRequest = await BloodRequestModal.find({});
    res.status(200).json(bloodRequest);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

// Function to calculate distance between two points
function calculateDistance(lat1, lon1, lat2, lon2) {
  // Convert degrees to radians
  const radLat1 = deg2rad(lat1);
  const radLat2 = deg2rad(lat2);
  const dLat = radLat2 - radLat1;
  const dLon = deg2rad(lon2 - lon1);

  // Earth radius in kilometers
  const R = 6371;

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(radLat1) * Math.cos(radLat2) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;

  return distance;
}

// Function to convert degrees to radians
function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

module.exports = { handleBloodRequestCreate, handleBloodRequestGetAll };
