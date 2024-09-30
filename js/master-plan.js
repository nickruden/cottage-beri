// СКРИПТ ДЛЯ ГЕНПЛАНА КОТТЕДЖНЕГО КОМПЛЕКСА
document.addEventListener('DOMContentLoaded', function () {
    const polygons = document.querySelectorAll('.polygon');
    const tooltipGroup = document.getElementById('master-plan__polygon-tooltip');
    const tooltipBg = document.getElementById('tooltip-bg');
    const tooltipText = document.getElementById('tooltip-text');
    const masterPlanSvg = document.getElementById('master-plan');

    function setFixedSvgSize() {
        if (window.innerWidth <= 1024) {
            masterPlanSvg.removeAttribute('preserveAspectRatio');

        } else {
            masterPlanSvg.setAttribute('viewBox', '0 0 1280 720');
            masterPlanSvg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        }
    }

    const ps = new PerfectScrollbar('.scrollable');

    setFixedSvgSize();

    window.addEventListener('resize', setFixedSvgSize);

    polygons.forEach(polygon => {
        polygon.classList.add(polygon.dataset.status);

        if (polygon.dataset.status === 'free') {
            polygon.setAttribute('data-form', 'bookingForm');
        }

        polygon.addEventListener('mouseover', function () {
            const status = this.dataset.status === 'free' ? 'Свободен'
                : this.dataset.status === 'booked' ? 'Забронирован'
                    : 'Продан';

            const tooltipTextColor = this.dataset.status === 'free' ? 'green'
                : this.dataset.status === 'booked' ? 'orange'
                    : 'red';

            tooltipText.textContent = status;
            tooltipText.setAttribute('fill', tooltipTextColor);

            // Рассчитываем центр полигона
            let totalX = 0;
            let totalY = 0;
            for (let i = 0; i < this.points.numberOfItems; i++) {
                const point = this.points.getItem(i);
                totalX += point.x;
                totalY += point.y;
            }
            const centerX = totalX / this.points.numberOfItems;
            const centerY = totalY / this.points.numberOfItems;

            // Добавляем отступ снизу
            const offsetY = 20; // Отступ снизу
            const textWidth = tooltipText.getBBox().width;
            const textHeight = tooltipText.getBBox().height;

            tooltipGroup.setAttribute('transform', `translate(${centerX - textWidth / 2}, ${centerY + offsetY})`);
            tooltipBg.setAttribute('width', textWidth + 14); // Добавляем отступы
            tooltipBg.setAttribute('height', textHeight + 14); // Добавляем отступы
            tooltipBg.setAttribute('x', -7); // Смещение для центрирования
            tooltipBg.setAttribute('y', -7); // Смещение для центрирования

            tooltipGroup.style.visibility = 'visible';
        });

        polygon.addEventListener('mouseout', function () {
            tooltipGroup.style.visibility = 'hidden';
        });
    });
});