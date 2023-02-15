import api from './apiConfig.js'

export const getComments = async () => {
    try {
        const response = await api.get('/Comment/')
        return response.data

    } catch (error) {
        throw error
    }
}

export const getComment = async (id) => {
    try {
        const response = await api.get(`/Comment/${id}`)
        return response.data

    } catch (error) {
        throw error
    }
}

export const createComment = async (newComment) => {
    try {
        const response = await api.post('/Comment/', newComment)
        return response.data

    } catch (error) {
        throw error
    }
}

export const updateComment = async (id, commentUpdate) => {
    try {
        const response = await api.put(`/Comment/${id}`, commentUpdate)
        return response.data

    } catch (error) {
        throw error
    }
}

export const deleteComment = async (id) => {
    try {
        const response = await api.delete(`/Comment/${id}`)
        return response.data
        
    } catch (error) {
        throw error
    }
}