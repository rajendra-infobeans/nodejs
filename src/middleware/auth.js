import express from "express";
import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  const secretKey = "rajaryan";
  if (!token) {
    res.status(401).json({ message: "No token provided!" });
  }

  const tokenDetails = await jwt.verify(token, secretKey);
  if (tokenDetails) {
    req.tokenDetails = tokenDetails;
    next();
  } else {
    return res.status(403).json({ message: "Failed to authenticate token." });
  }
};

export default authMiddleware;
