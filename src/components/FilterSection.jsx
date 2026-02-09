const FilterSection = () => {
    const filters = ['ทั้งหมด', 'ยอดนิยม', 'ใหม่ล่าสุด', 'แนะนำ'];

    return (
        <div className="flex gap-3 px-4 py-4 flex-wrap">
            {filters.map((filter, index) => (
                <button
                    key={index}
                    className="btn btn-sm btn-outline btn-primary hover:scale-105 transition-transform"
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default FilterSection;
