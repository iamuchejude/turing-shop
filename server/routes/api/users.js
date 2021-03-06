import express from 'express';
import UserInputValidation from '../../middlewares/validations/CustomerProfileValidation';
import AuthController from '../../controller/AuthController';
import Authenticate from '../../middlewares/Authenticate';
import CustomerProfileController from '../../controller/CustomerProfileController';

const router = express.Router();

router.get('/', (req, res) => res.status(404).json({
  message: 'Welcome to Shopmate'
}));

// Auth endpoints
router.post('/users', UserInputValidation.signUpInputValidation, AuthController.createCustomer);
router.get('/users', Authenticate.auth, CustomerProfileController.getUserProfile);
router.post('/users/login', UserInputValidation.loginInputValidation, AuthController.loginCustomer);
router.put(
  '/users',
  Authenticate.auth,
  CustomerProfileController.updateProfile
);

export default router;
