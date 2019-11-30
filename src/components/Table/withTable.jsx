import React, { useState, useCallback } from 'react'

const withTable = (WrappedComponent) => function Tabled(props) {
    const [page, setPage] = useState(0)
    const [perPage, setPerPage] = useState(10)
    const [source, setSource] = useState({
        count: 0,
        datasource: []
    })

    const setSourceState = useCallback((data) => setSource({
        count: data.count || 0,
        datasource: data.datasource || []
    }), [])

    return (
        <WrappedComponent

            page={page}
            perPage={perPage}

            setPage={setPage}
            setPerPage={setPerPage}

            count={source.count}
            datasource={source.datasource}

            setSource={setSourceState}
            dataSize={source.datasource.length}

            {...props}
        />
    )
}

/**
    datasource: PropTypes.array,
    count: PropTypes.number,
    setSource: PropTypes.func,
    page: PropTypes.number,
    setPage: PropTypes.func,
    perPage: PropTypes.number,
    setPerPage: PropTypes.func,
    dataSize: PropTypes.number
 */

export default withTable
