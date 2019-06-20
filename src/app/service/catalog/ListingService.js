import BaseService from 'framework/service/BaseService'

class ListingService extends BaseService {

}

const listingService = new ListingService()
listingService.apiUrl = '/listings'
export default listingService