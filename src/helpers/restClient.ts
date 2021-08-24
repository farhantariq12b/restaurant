import request from 'request';
import querystring from 'querystring';
import axios from 'axios';
import fs from 'fs';
import Exception from './Exception';
import {VXObject, ErrorCodes } from '../constants';

export default class RestClient {

	static async get (url: string, headers: any) {

		try {

			let response;

			const res = await axios.get(url, { headers });

			response = res.data;

			return response;

		} catch (err) {

			console.log(`get:: req:: `, url, 'RESPONSE:: =====> ', err);

			// throw new Exception(UserConstants.MESSAGES.INVALID_DATA_TO_SIGNUP_USER, ErrorCodes.BAD_REQUEST, { reportError: true }).toJson();

		}

	}

	static async post (url: string, data: any, headers?: any, formData?: any, files: any = []) {

		try {

			let res;

			if (data) {

				res = await axios.post(url, data, { headers });

			} else if (formData) {
				
				formData = querystring.stringify(formData);

				res = await axios.post(url, formData, { headers });

			}

			return res?.data;

		} catch (err) {

			console.log(`post:: req:: `, url, 'RESPONSE:: =====> ', err);

			throw new Exception(VXObject.MESSAGES.SOMETHING_WENT_WRONG, ErrorCodes.BAD_REQUEST, { reportError: true });
	
		}

	}

	static async patch (url: string, data: any, headers?: any, formData?: any, files:any = []) {

		try {

			const res = await axios.patch(url, data, { headers });

			return res.data;

		} catch (err) {

			console.log(`patch:: req:: `, url, 'RESPONSE:: =====> ', err);

			throw new Exception(VXObject.MESSAGES.SOMETHING_WENT_WRONG, ErrorCodes.BAD_REQUEST, { reportError: true });
	
		}

	}

	static async delete (url: string, headers?: any) {

		try {

			const res = await axios.delete(url, {headers});

			return res.data;
			
		} catch (err) {

			console.log(`delete:: req:: `, url, 'RESPONSE:: =====> ', err);

			throw new Exception(VXObject.MESSAGES.INVALID_ID, ErrorCodes.BAD_REQUEST, { reportError: true });

		}

	}

}
