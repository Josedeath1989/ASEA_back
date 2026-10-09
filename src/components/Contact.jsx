import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { MapPin, Phone, Mail, Send, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    empresa: '',
    nombre: '',
    telefono: '',
    servicio: '',
    detalles: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateField = (name, value) => {
    let errorMsg = '';

    switch (name) {
      case 'empresa':
        if (!value.trim()) {
          errorMsg = t('valCompanyReq');
        } else if (value.trim().length < 2) {
          errorMsg = t('valCompanyShort');
        }
        break;

      case 'nombre':
        if (!value.trim()) {
          errorMsg = t('valNameReq');
        } else if (value.trim().length < 3) {
          errorMsg = t('valNameShort');
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s\.\-]+$/.test(value)) {
          errorMsg = t('valNameLetters');
        }
        break;

      case 'telefono':
        if (!value.trim()) {
          errorMsg = t('valPhoneReq');
        } else if (!/^[0-9\s\+\-\(\)]{7,15}$/.test(value.trim())) {
          errorMsg = t('valPhonePattern');
        }
        break;

      case 'servicio':
        if (!value) {
          errorMsg = t('valServiceReq');
        }
        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    return !errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateAll = () => {
    const isEmpresaValid = validateField('empresa', formData.empresa);
    const isNombreValid = validateField('nombre', formData.nombre);
    const isTelefonoValid = validateField('telefono', formData.telefono);
    const isServicioValid = validateField('servicio', formData.servicio);

    return isEmpresaValid && isNombreValid && isTelefonoValid && isServicioValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateAll()) {
      toast.error(t('toastValError'), { id: 'validation-error' });
      return;
    }

    setLoading(true);
    const toastId = toast.loading(t('toastSending'));

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success(data.message || t('toastSuccess'), { id: toastId, duration: 6000 });
        setFormData({ empresa: '', nombre: '', telefono: '', servicio: '', detalles: '' });
        setErrors({});
      } else {
        toast.error(data.message || t('toastError'), { id: toastId });
      }
    } catch (error) {
      console.error('Error enviando formulario:', error);
      toast.error(t('toastConnectionError'), { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contacto">
      <div className="contact-info">
        <span className="contact-tag">{t('contactTag')}</span>
        <h2>{t('contactTitleLine1')}<br />{t('contactTitleLine2')}</h2>
        <p className="lead">{t('contactLead')}</p>

        <div className="contact-details">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Calle+53a+No+71c-19+Bogota+Colombia"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item contact-item-link"
            title="Google Maps"
          >
            <MapPin size={22} className="contact-item-icon" />
            <span>{t('address')}</span>
          </a>
          <a
            href="tel:+573195457517"
            className="contact-item contact-item-link"
            title="Teléfono"
          >
            <Phone size={22} className="contact-item-icon" />
            <span>(1) 5415777 / (+57) 319 545 7517</span>
          </a>
          <a
            href="mailto:grupoaceasas@gmail.com"
            className="contact-item contact-item-link"
            title="Email"
          >
            <Mail size={22} className="contact-item-icon" />
            <span>grupoaceasas@gmail.com</span>
          </a>
        </div>
      </div>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="form-header">
          <h3>{t('formTitle')}</h3>
          <p>{t('formSub')}</p>
        </div>

        {/* Empresa */}
        <div className="form-group">
          <input
            type="text"
            name="empresa"
            placeholder={t('placeholderCompany')}
            value={formData.empresa}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.empresa ? 'input-error' : ''}
          />
          {errors.empresa && (
            <span className="error-text">
              <AlertCircle size={14} /> {errors.empresa}
            </span>
          )}
        </div>

        {/* Nombre Solicitante */}
        <div className="form-group">
          <input
            type="text"
            name="nombre"
            placeholder={t('placeholderName')}
            value={formData.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.nombre ? 'input-error' : ''}
          />
          {errors.nombre && (
            <span className="error-text">
              <AlertCircle size={14} /> {errors.nombre}
            </span>
          )}
        </div>

        {/* Teléfono */}
        <div className="form-group">
          <input
            type="tel"
            name="telefono"
            placeholder={t('placeholderPhone')}
            value={formData.telefono}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.telefono ? 'input-error' : ''}
          />
          {errors.telefono && (
            <span className="error-text">
              <AlertCircle size={14} /> {errors.telefono}
            </span>
          )}
        </div>

        {/* Servicio */}
        <div className="form-group">
          <select
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.servicio ? 'input-error' : ''}
          >
            <option value="" disabled>{t('placeholderSelect')}</option>
            <option value="Mantenimiento de Fachadas / Cubiertas">{t('opt1')}</option>
            <option value="Aseo Especializado Corporativo">{t('opt2')}</option>
            <option value="Obra Civil / Mantenimiento de Pisos">{t('opt3')}</option>
            <option value="Venta o Alquiler de Contenedores">{t('opt4')}</option>
          </select>
          {errors.servicio && (
            <span className="error-text">
              <AlertCircle size={14} /> {errors.servicio}
            </span>
          )}
        </div>

        {/* Detalles opcionales */}
        <div className="form-group">
          <textarea
            name="detalles"
            placeholder={t('placeholderDetails')}
            value={formData.detalles}
            onChange={handleChange}
            rows={3}
          />
        </div>

        <button
          type="submit"
          className="btn"
          disabled={loading}
          style={{ marginTop: '10px', width: '100%' }}
        >
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>{t('sendingBtn')}</span>
            </>
          ) : (
            <>
              <span>{t('submitBtn')}</span>
              <Send size={18} />
            </>
          )}
        </button>
      </form>
    </section>
  );
};

export default Contact;
